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
var data2014; //using this so that bands show for 0 value transfers
var data2015;
var data2016;
var allArr = [];

// var shareFn = share('Interactive title', 'http://gu.com/p/URL', '#Interactive');  -- you might need this to put social buttons in a header area ???
export function init(el, context, config, mediator) {
        el.innerHTML = mainHTML.replace(/%assetPath%/g, config.assetPath);
        reqwest({
            url: dataURL2014,
            type: 'json',
            crossOrigin: true,
            success: (resp) => initSankey(resp.sheets.rawData, '2014', 'previousleague') //allArr = resp.sheets.rawData //
        });
        reqwest({
            url: dataURL2015,
            type: 'json',
            crossOrigin: true,
            success: (resp) => allArr.push(resp.sheets.rawData) //console.log(resp)
        });
        reqwest({
            url: dataURL2016,
            type: 'json',
            crossOrigin: true,
            success: (resp) => allArr.push(resp.sheets.rawData) //console.log(resp)
        });
        //var allArr = data2014.concat(data2015, data2016);
        var array0 = allArr[0];
        var array1 = allArr[1];
        var array2 = allArr[2];
        var array4 = [].concat(array1, array2);
        console.log("JOIN ARRAYS HERE")
}
    //

function initData(a, yy, s) {
        var categoriesObj = _.groupBy(a, s);
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
            node.name = getNodeName(key);
            nodes.push(node);
            catCount++
        })
        _.each(a, function(o, i) {
            var node = {}
            o.value = checkForNumber(o.price) + bandShim;
            o.ind = i;
            node.node = i + catCount;
            node.name = o.playername;
            nodes.push(node);
            //node.value = o.value;
        });
        _.each(a, function(o, i) {
            var link = {}
                // link.
            _.each(categoriesMap, function(item) {
                if (o[s] == item.k) {
                    link.source = item.n
                }
            })
            link.target = i + catCount;
            link.value = o.value
            links.push(link);
        });
        nodeMap.nodes = nodes;
        nodeMap.links = links;
        return nodeMap;
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

function initSankey(a, yy, s) {
    var graph = initData(a, yy, s);
    _.each(graph.links, function(link) {
        //console.log(link)
    })
    console.log(graph);
    var colors = {
        'environment': '#edbd00',
        'social': '#367d85',
        'animals': '#97ba4c',
        'health': '#f5662b',
        'research_ingredient': '#3f3e47',
        'fallback': '#9f9fa3'
    };
    var chart = d3.select("#chart")
        .append("svg")
        .chart("Sankey.Path");
    chart.name(label)
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

function getData() {
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
