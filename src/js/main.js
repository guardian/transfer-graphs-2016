import reqwest from 'reqwest'
import _ from 'lodash'
import d3 from 'd3'
import chart from 'd3.chart'
import Sankey from 'd3.chart.sankey'

import mainHTML from './text/main.html!text'
import share from './lib/share'
import { getUniqueObjects, getAgeGroup, checkForNumber, getDisplayCost, getFormattedFee, stripSpace } from './lib/utils'

var dataURL2016 = 'https://interactive.guim.co.uk/docsdata-test/1VW0QYe6WqmvxIQ2MoDUaFIbztySJxLQJ9UUIGSYSaNg.json'
var dataURL2015 = 'https://interactive.guim.co.uk/docsdata-test/1OilCanhD6Xb3uN7fl-UvuRaCFpTuTgEk6CcBbr4OFYg.json'
var dataURL2014 = 'https://interactive.guim.co.uk/docsdata-test/1YwSeSd_eNMFnzgPmXmwa-UfKCk6lMFG0Qd-1KSKtW48.json'

var bandShim = 500000;
var allData = [];
var tempArr = [];
var nodeMaps = [];
var sortStringsArr = ['position', 'previousleague'];


var isoArr = [ 
    { premClub:'Arsenal', iso:'ARS', badgeRef:'1006'}, 
    { premClub:'Bournemouth', iso:'BOU', badgeRef:'23'},
    { premClub:'Burnley', iso:'BUR', badgeRef:'70'}, 
    { premClub:'Chelsea', iso:'CHE', badgeRef:'4'}, 
    { premClub:'Crystal Palace', iso:'CRY', badgeRef:'5'}, 
    { premClub:'Everton', iso:'EVE', badgeRef:'8'}, 
    { premClub:'Hull City', iso:'HUL', badgeRef:'26'}, 
    { premClub:'Leicester City', iso:'LEI', badgeRef:'29'}, 
    { premClub:'Liverpool', iso:'LIV', badgeRef:'9'}, 
    { premClub:'Manchester City', iso:'MCY', badgeRef:'11'}, 
    { premClub:'Manchester United', iso:'MUN', badgeRef:'12'}, 
    { premClub:'Middlesbrough', iso:'MID', badgeRef:'30'}, 
    { premClub:'Southampton', iso:'SOU', badgeRef:'18'}, 
    { premClub:'Stoke City', iso:'STK', badgeRef:'38'}, 
    { premClub:'Sunderland', iso:'SUN', badgeRef:'39'}, 
    { premClub:'Swansea City', iso:'SWA', badgeRef:'65'}, 
    { premClub:'Tottenham Hotspur', iso:'TOT', badgeRef:'19'},
    { premClub:'Watford', iso:'WAT', badgeRef:'41'},  
    { premClub:'West Bromwich Albion', iso:'WBA', badgeRef:'42'}, 
    { premClub:'West Ham United', iso:'WHU', badgeRef:'43'}
];

// var shareFn = share('Interactive title', 'http://gu.com/p/URL', '#Interactive');  -- you might need this to put social buttons in a header area ???


export function init(el, context, config, mediator) {
    //using this so that bands show for 0 value transfers

    var allTransfers = [];

    el.innerHTML = mainHTML.replace(/%assetPath%/g, config.assetPath);

    reqwest({
        url: dataURL2014,
        type: 'json',
        crossOrigin: true,
        success: (resp) => gatherData(resp.sheets.rawData) //allArr = resp.sheets.rawData //
    });

    reqwest({
        url: dataURL2015,
        type: 'json',
        crossOrigin: true,
        success: (resp) => gatherData(resp.sheets.rawData) //console.log(resp)
    });

    reqwest({
        url: dataURL2016,
        type: 'json',
        crossOrigin: true,
        success: (resp) => gatherData(resp.sheets.rawData) //console.log(resp)
    });

    //initData(allTransfers)

}

function addValuesToData(a){

   
    _.each(a, function(item, i) {
        item.value = checkForNumber(item.price);
        item.id = i;
        item.d3Date = getD3Date(item.date);
        item.yyyy = getD3Year(item.date);
        item.to = item.to.trim();
        item.from = item.from.trim();

        if(item.newleague == "Premier League (England)" && item.previousleague != "Premier League (England)"){ 
                    item.buy=true; 
                    item.premClub = item.to;
                    tempArr.push(item); 
        }

        if(item.previousleague == "Premier League (England)" && item.newleague != "Premier League (England)"){ 
            item.sell=true; 
            item.premClub = item.from;
            tempArr.push(item);
        }

        if(item.newleague == "Premier League (England)" && item.previousleague == "Premier League (England)"){ 

            var itemOne = {}; 
            var itemTwo = {};

            var sellClub = item.from; var buyClub = item.to;
                
                itemOne.buy=false;
                itemOne.sell=true;                    
                itemOne.inout = "OUT";
                
                itemTwo.buy=true;
                itemTwo.sell=false;                    
                itemTwo.inout = "IN";

                itemOne.age = itemTwo.age = item.age;
                itemOne.ageGroup = itemTwo.ageGroup = item.ageGroup;
                itemOne.cost = itemTwo.cost = item.cost;
                itemOne.d3Date = itemTwo.d3Date = item.d3Date;

                itemOne.date = itemTwo.date = item.date;
                itemOne.yyyy = itemTwo.yyyy = getD3Year(item.date);

                itemOne.formattedFee = itemTwo.formattedFee = item.formattedFee;
                itemOne.imageGridURL = itemTwo.imageGridURL = item.imageGridURL;
               
                itemOne.nationality = itemTwo.nationality = item.nationality;
                itemOne.newleague = itemTwo.newleague = item.newleague;
                itemOne.playername = itemTwo.playername = item.playername;
                itemOne.position = itemTwo.position = item.position;
                itemOne.previousleague = itemTwo.previousleague = item.previousleague;
                itemOne.price = itemTwo.price = item.price;
                itemOne.value = itemTwo.value = item.value;
                itemOne.premClub = sellClub; 
                itemTwo.premClub = buyClub; 

                itemOne.from = itemTwo.from = item.from;
                itemOne.to = itemTwo.to = item.to;
                
                tempArr.push(itemOne);
                tempArr.push(itemTwo);

            }

    })
  
  var yearsArr = _.groupBy(tempArr, 'yyyy'); 

  

  return yearsArr;

}


// var yearArrays = {
     //      Array2014: [],
     //      Array2015: [],
     //      Array2016: []
     //  }


function gatherData(a) {
    var s = 'previousleague';
    var tempArr = addValuesToData(a,s);

    if (_.keys(tempArr).length === 3){

          sortData(tempArr,s)
    }

    
}

function sortData(a,s){

  var tempObj = {}

  _.each(a, function(o,k){
      getClubValues(o,k);//tempObj.clubValues = 
      tempObj.yyyy = k;
      tempObj.values = o;
      tempObj.buyValue = _.sumBy(o, function(item) { if(item.buy){ return item.value; } });
      tempObj.sellValue =  _.sumBy(o, function(item) { if(item.sell){ return item.value; } });
      tempObj.categories = _.groupBy(o,s)

      var newNode = addNodeMap(tempObj,s)

      nodeMaps.push(newNode)
  })

  function getClubValues(o, k){

      console.log("CONTINUE WORK IN IN HERE - create a new object with the clubs spending per league")

      var categObj= { }; 

      categObj.yyyy = k;

      _.each(o, function(item){ console.log(item[s])})

      var clubArr = _.groupBy(o, 'premClub');

      _.each(clubArr , function (club,k){
            var tempryObj = {}
            var clubSpendPerSort = _.groupBy(club, s);
            tempryObj.name = k;
            tempryObj.values = clubSpendPerSort;
            console.log("THIS IS CLOSE TO WORKING ")
            console.log(tempryObj);
      })

      categObj.values = clubArr;
      
      console.log(categObj)

  }


console.log(nodeMaps)


initSankey(nodeMaps[0],s)
//addNodeMap(tempArr,s)


}




// function sortDataDLO(a,s){

//   var tempObj = {}

//   _.each(a, function(o,k){
//       tempObj.yyyy = k;
//       tempObj.values = o;
//       tempObj.buyValue = _.sumBy(o, function(item) { if(item.buy){ return item.value; } });
//       tempObj.sellValue =  _.sumBy(o, function(item) { if(item.sell){ return item.value; } });
//       tempObj.categories = _.groupBy(o,s)
  
//   })

//   console.log(tempObj);

// //addNodeMap(tempArr,s)


// }



function addNodeMap(obj,s) {

    console.log(obj)

    var categoriesObj = obj.categories;
    var categoriesMap = [];
    var nodeMap = {};
    var nodes = [];
    var links = [];
    var catCount = 0;

    _.each(categoriesObj, function(o, key) {
        var node = {};
        var mapObj = {};
        mapObj.k = key;
        mapObj.n = catCount;
        categoriesMap.push(mapObj);
        node.node = catCount;
        node.name = getNodeName(key) + " buy";
        nodes.push(node);
        catCount++;
    })

    console.log(nodes)

    _.each(obj.values, function(o, i) {
        var node = {}

        node.node = i + catCount;
        node.name = o.playername;

        nodes.push(node);
    });



    var clubObj = _.groupBy(obj.values, 'premClub');
    var tempClubArr = [];


        // var tempClubArr = [ ];

      _.each(clubObj, function(item,k) { 

       // run a quick filter for none prem clubs slipping through 
        _.each(isoArr, function(team){
          if (k == team.premClub){ 
              getLinks(obj.values)
          }
        })


    });


    function getLinks(a)  {
       _.each(a, function(o, i) {
            var link = {}
            // link.
            _.each(categoriesMap, function(item) {
                if (o[s] == item.k) {
                    link.source = item.n
                }
        })

        link.target = i + catCount;
        link.value = o.value + bandShim;

        links.push(link);
    });


    }



    nodeMap.nodes = nodes;
    nodeMap.links = links;



    //initSankey(nodeMap)

    return nodeMap;

   
}






// function addNodeMapDLO(a, s) {

//   console.log(a,s)

//     var categoriesObj = _.groupBy(a, s);
//     var categoriesMap = [];
//     var nodeMap = {};
//     var nodes = [];
//     var links = [];
//     var catCount = 0;

//     _.each(categoriesObj, function(o, key) {
//         var node = {};
//         var mapObj = {};
//         mapObj.k = key;
//         mapObj.n = catCount;
//         categoriesMap.push(mapObj);
//         node.node = catCount;
//         node.name = getNodeName(key) + " buy";
//         nodes.push(node);
//         catCount++
//     })

//     _.each(a, function(o, i) {
//         var node = {}

//         node.node = i + catCount;
//         node.name = o.playername;

//         nodes.push(node);
//     });

//     _.each(a, function(o, i) {
//         var link = {}
//             // link.
//         _.each(categoriesMap, function(item) {
//             if (o[s] == item.k) {
//                 link.source = item.n
//             }
//         })
//         link.target = i + catCount;
//         link.value = o.value + bandShim;

//         links.push(link);
//     });


//     nodeMap.nodes = nodes;
//     nodeMap.links = links;


//     console.log(nodeMap)

//     return nodeMap;

   
// }



function initSankey(a, s) {
    var graph = a;//getNodeMap(a, yy, s);

    _.each(graph.links, function(link) {
        //console.log(link)
    })

    //console.log(graph);


    var colors = {
        'environment': '#edbd00',
        'social': '#367d85',
        'animals': '#97ba4c',
        'health': '#f5662b',
        'research_ingredient': '#3f3e47',
        'fallback': '#9f9fa3'
    };

    var chart = d3.select("#chart").append("svg").chart("Sankey.Path");
    chart
        .name(label)
        // .colorNodes(function(name, node) {
        //   return color(node, 1) || colors.fallback;
        // })
        // .colorLinks(function(link) {
        //   return color(link.source, 4) || color(link.target, 1) || colors.fallback;
        // })
        .nodeWidth(15)
        .nodePadding(1)
        .spread(true)
        .iterations(0)
        .draw(graph);

    function label(node) {
        return node.name.replace(/\s*\(.*?\)$/, '');
    }

    function color(node, depth) {
        var id = node.id.replace(/(_score)?(_\d+)?$/, '');
        if (colors[id]) {
            return colors[id];
        } else if (depth > 0 && node.targetLinks && node.targetLinks.length ==
            1) {
            return color(node.targetLinks[0].source, depth - 1);
        } else {
            return null;
        }
    }

}



function getNodeName(s) {
    var t = s;

    if (s == "D") {
        t = "Defender"
    }
    if (s == "M") {
        t = "Midfielder"
    }
    if (s == "F") {
        t = "Forward"
    }
    if (s == "G") {
        t = "Goalkeeper"
    }

    return t
}

function getD3Date(d) {
    var a = d.split("/");
    var t = a[2] + '-' + a[1] + '-' + a[0] + 'T12:00:00';
    return t; // DD/MM/YYYY Month - 1 to map against array 0-11
}

function getD3Year(d) {
    var a = d.split("/");
    return a[2]; // DD/MM/YYYY Month - 1 to map against array 0-11
}

function getTestData() {
    return {
        "nodes": [{
            "node": 0,
            "name": "Goalkeeper"
    }, {
            "node": 1,
            "name": "Defender"
    }, {
            "node": 2,
            "name": "Midfielder"
    }, {
            "node": 3,
            "name": "Forward"
    }, {
            "node": 4,
            "name": "Carlo Bravo"
    }, {
            "node": 5,
            "name": "John Stones"
    }, {
            "node": 6,
            "name": "Ilkay Gundogan"
    }, {
            "node": 7,
            "name": "Nolito"
    }, {
            "node": 8,
            "name": "Eric Bailly"
    }, {
            "node": 9,
            "name": "Jose Fonte"
    }, {
            "node": 10,
            "name": "Paul Pogba"
    }, {
            "node": 11,
            "name": "Zlatan Ibrahimovic"
    }],
        "links": [{
            "source": 0,
            "target": 4,
            "value": 13000000
    }, {
            "source": 1,
            "target": 5,
            "value": 49000000
    }, {
            "source": 2,
            "target": 6,
            "value": 20000000
    }, {
            "source": 3,
            "target": 7,
            "value": 12000000
    }, {
            "source": 1,
            "target": 8,
            "value": 30000000
    }, {
            "source": 1,
            "target": 9,
            "value": 10000000
    }, {
            "source": 2,
            "target": 10,
            "value": 90000000
    }, {
            "source": 3,
            "target": 11,
            "value": 500000
    }]
    };
}
