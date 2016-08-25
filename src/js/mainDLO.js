var dataTest = '{"links": [{"source":"Agricultural Energy Use","target":"Carbon Dioxide","value":"1.4"}, {"source":"Agriculture","target":"Agriculture Soils","value":"5.2"}, {"source":"Agriculture","target":"Livestock and Manure","value":"5.4"}, {"source":"Agriculture","target":"Other Agriculture","value":"1.7"}, {"source":"Agriculture","target":"Rice Cultivation","value":"1.5"}, {"source":"Agriculture Soils","target":"Nitrous Oxide","value":"5.2"}, {"source":"Air","target":"Carbon Dioxide","value":"1.7"}, {"source":"Aluminium Non-Ferrous Metals","target":"Carbon Dioxide","value":"1.0"}, {"source":"Aluminium Non-Ferrous Metals","target":"HFCs - PFCs","value":"0.2"}, {"source":"Cement","target":"Carbon Dioxide","value":"5.0"}, {"source":"Chemicals","target":"Carbon Dioxide","value":"3.4"}, {"source":"Chemicals","target":"HFCs - PFCs","value":"0.5"}, {"source":"Chemicals","target":"Nitrous Oxide","value":"0.2"}, {"source":"Coal Mining","target":"Carbon Dioxide","value":"0.1"}, {"source":"Coal Mining","target":"Methane","value":"1.2"}, {"source":"Commercial Buildings","target":"Carbon Dioxide","value":"6.3"}, {"source":"Deforestation","target":"Carbon Dioxide","value":"10.9"}, {"source":"Electricity and heat","target":"Agricultural Energy Use","value":"0.4"}, {"source":"Electricity and heat","target":"Aluminium Non-Ferrous Metals","value":"0.4"}, {"source":"Electricity and heat","target":"Cement","value":"0.3"}, {"source":"Electricity and heat","target":"Chemicals","value":"1.3"}, {"source":"Electricity and heat","target":"Commercial Buildings","value":"5.0"}, {"source":"Electricity and heat","target":"Food and Tobacco","value":"0.5"}, {"source":"Electricity and heat","target":"Iron and Steel","value":"1.0"}, {"source":"Electricity and heat","target":"Machinery","value":"1.0"}, {"source":"Electricity and heat","target":"Oil and Gas Processing","value":"0.4"}, {"source":"Electricity and heat","target":"Other Industry","value":"2.7"}, {"source":"Electricity and heat","target":"Pulp - Paper and Printing","value":"0.6"}, {"source":"Electricity and heat","target":"Residential Buildings","value":"5.2"}, {"source":"Electricity and heat","target":"T and D Losses","value":"2.2"}, {"source":"Electricity and heat","target":"Unallocated Fuel Combustion","value":"2.0"}, {"source":"Energy","target":"Electricity and heat","value":"24.9"}, {"source":"Energy","target":"Fugitive Emissions","value":"4.0"}, {"source":"Energy","target":"Industry","value":"14.7"}, {"source":"Energy","target":"Other Fuel Combustion","value":"8.6"}, {"source":"Energy","target":"Transportation","value":"14.3"}, {"source":"Food and Tobacco","target":"Carbon Dioxide","value":"1.0"}, {"source":"Fugitive Emissions","target":"Coal Mining","value":"1.3"}, {"source":"Fugitive Emissions","target":"Oil and Gas Processing","value":"3.2"}, {"source":"Harvest \/ Management","target":"Carbon Dioxide","value":"1.3"}, {"source":"Industrial Processes","target":"Aluminium Non-Ferrous Metals","value":"0.4"}, {"source":"Industrial Processes","target":"Cement","value":"2.8"}, {"source":"Industrial Processes","target":"Chemicals","value":"1.4"}, {"source":"Industrial Processes","target":"Other Industry","value":"0.5"}, {"source":"Industry","target":"Aluminium Non-Ferrous Metals","value":"0.4"}, {"source":"Industry","target":"Cement","value":"1.9"}, {"source":"Industry","target":"Chemicals","value":"1.4"}, {"source":"Industry","target":"Food and Tobacco","value":"0.5"}, {"source":"Industry","target":"Iron and Steel","value":"3.0"}, {"source":"Industry","target":"Oil and Gas Processing","value":"2.8"}, {"source":"Industry","target":"Other Industry","value":"3.8"}, {"source":"Industry","target":"Pulp - Paper and Printing","value":"0.5"}, {"source":"Iron and Steel","target":"Carbon Dioxide","value":"4.0"}, {"source":"Land Use Change","target":"Deforestation","value":"10.9"}, {"source":"Land Use Change","target":"Harvest \/ Management","value":"1.3"}, {"source":"Landfills","target":"Methane","value":"1.7"}, {"source":"Livestock and Manure","target":"Methane","value":"5.1"}, {"source":"Livestock and Manure","target":"Nitrous Oxide","value":"0.3"}, {"source":"Machinery","target":"Carbon Dioxide","value":"1.0"}, {"source":"Oil and Gas Processing","target":"Carbon Dioxide","value":"3.6"}, {"source":"Oil and Gas Processing","target":"Methane","value":"2.8"}, {"source":"Other Agriculture","target":"Methane","value":"1.4"}, {"source":"Other Agriculture","target":"Nitrous Oxide","value":"0.3"}, {"source":"Other Fuel Combustion","target":"Agricultural Energy Use","value":"1.0"}, {"source":"Other Fuel Combustion","target":"Commercial Buildings","value":"1.3"}, {"source":"Other Fuel Combustion","target":"Residential Buildings","value":"5.0"}, {"source":"Other Fuel Combustion","target":"Unallocated Fuel Combustion","value":"1.8"}, {"source":"Other Industry","target":"Carbon Dioxide","value":"6.6"}, {"source":"Other Industry","target":"HFCs - PFCs","value":"0.4"}, {"source":"Pulp - Paper and Printing","target":"Carbon Dioxide","value":"1.1"}, {"source":"Rail - Ship and Other Transport","target":"Carbon Dioxide","value":"2.5"}, {"source":"Residential Buildings","target":"Carbon Dioxide","value":"10.2"}, {"source":"Rice Cultivation","target":"Methane","value":"1.5"}, {"source":"Road","target":"Carbon Dioxide","value":"10.5"}, {"source":"T and D Losses","target":"Carbon Dioxide","value":"2.2"}, {"source":"Transportation","target":"Air","value":"1.7"}, {"source":"Transportation","target":"Rail - Ship and Other Transport","value":"2.5"}, {"source":"Transportation","target":"Road","value":"10.5"}, {"source":"Unallocated Fuel Combustion","target":"Carbon Dioxide","value":"3.0"}, {"source":"Unallocated Fuel Combustion","target":"Methane","value":"0.4"}, {"source":"Unallocated Fuel Combustion","target":"Nitrous Oxide","value":"0.4"}, {"source":"Waste","target":"Landfills","value":"1.7"}, {"source":"Waste","target":"Waste water - Other Waste","value":"1.5"}, {"source":"Waste water - Other Waste","target":"Methane","value":"1.2"}, {"source":"Waste water - Other Waste","target":"Nitrous Oxide","value":"0.3"} ] , "nodes": [ {"name":"Energy"}, {"name":"Industrial Processes"}, {"name":"Electricity and heat"}, {"name":"Industry"}, {"name":"Land Use Change"}, {"name":"Agriculture"}, {"name":"Waste"}, {"name":"Transportation"}, {"name":"Other Fuel Combustion"}, {"name":"Fugitive Emissions"}, {"name":"Road"},{"name":"Air"}, {"name":"Rail - Ship and Other Transport"}, {"name":"Residential Buildings"}, {"name":"Commercial Buildings"}, {"name":"Unallocated Fuel Combustion"}, {"name":"Iron and Steel"}, {"name":"Aluminium Non-Ferrous Metals"}, {"name":"Machinery"}, {"name":"Pulp - Paper and Printing"}, {"name":"Food and Tobacco"}, {"name":"Chemicals"}, {"name":"Cement"}, {"name":"Other Industry"}, {"name":"T and D Losses"}, {"name":"Coal Mining"}, {"name":"Oil and Gas Processing"}, {"name":"Deforestation"}, {"name":"Harvest \/ Management"}, {"name":"Agricultural Energy Use"}, {"name":"Agriculture Soils"}, {"name":"Livestock and Manure"}, {"name":"Rice Cultivation"}, {"name":"Other Agriculture"}, {"name":"Landfills"}, {"name":"Waste water - Other Waste"}, {"name":"Carbon Dioxide"}, {"name":"HFCs - PFCs"}, {"name":"Methane"}, {"name":"Nitrous Oxide"} ] }';


import reqwest from 'reqwest'
import _ from 'lodash'
import d3 from 'd3'
import chart from 'd3.chart'
import Sankey from 'd3.chart.sankey'

import mainHTML from './text/main.html!text'
import share from './lib/share'
import { getUniqueObjects, getAgeGroup, checkForNumber, getDisplayCost , getFormattedFee, stripSpace } from './lib/utils'


var dataURL2016 = 'https://interactive.guim.co.uk/docsdata-test/1VW0QYe6WqmvxIQ2MoDUaFIbztySJxLQJ9UUIGSYSaNg.json'
var dataURL2015 = 'https://interactive.guim.co.uk/docsdata-test/1OilCanhD6Xb3uN7fl-UvuRaCFpTuTgEk6CcBbr4OFYg.json'
var dataURL2014 = 'https://interactive.guim.co.uk/docsdata-test/1YwSeSd_eNMFnzgPmXmwa-UfKCk6lMFG0Qd-1KSKtW48.json'

var bandShim = 500000; //using this so that bands show for 0 value transfers


// var shareFn = share('Interactive title', 'http://gu.com/p/URL', '#Interactive');  -- you might need this to put social buttons in a header area ???

var colors = {
            'environment':         '#edbd00',
            'social':              '#367d85',
            'animals':             '#97ba4c',
            'health':              '#f5662b',
            'research_ingredient': '#3f3e47',
            'fallback':            '#9f9fa3'
          };

export function init(el, context, config, mediator) {
    el.innerHTML = mainHTML.replace(/%assetPath%/g, config.assetPath);

    reqwest({
        url: 'https://cdn.rawgit.com/q-m/d3.chart.sankey/master/example/data/product.json',
        type: 'json',
        crossOrigin: true,
        success: (resp) =>  initData(resp) //console.log(resp)
    });

}

function initData(r){

  console.log(r)
  initSankey(dataTest)

  

  reqwest({
        url: dataURL2014,
        type: 'json',
        crossOrigin: true,
        success: (resp) => getData(resp, '2014', 'position') // initSankey(resp) 
    });

}


function getData(r,yy,s){

  var a = r.sheets.rawData;

    var categArr = []

    _.each(a, function(o,i){ o.value = checkForNumber(o.price) + bandShim; o.ind = i; });

    var nodes = [];
    var links = [];
    var outPutArr = _.groupBy(a, s);

    _.each(outPutArr, function(a, i){ 
        a.id = i;  
        a.value = _.sumBy(a, function(o) { return o.value; });  

          _.each(a, function(o, k){
              o.id = k;
              o.source = i;
          });

    })

    var nested_data = d3.nest()
        .key(function(d) { return d[s]; })
        // .key(function(d) { return d.priority; })
        .rollup(function(leaves) { return {"length": leaves.length, "total_fee": d3.sum(leaves, function(d) { return d.value; })} })
        .entries(a);
    
    _.each(nested_data, function(o,i){
          var tempObj = {};
          tempObj.name = getNodeName(o.key);
          tempObj.id  = o.key;
          tempObj.value = o.values.total_fee;
          nodes.push(tempObj);


          categArr.push(tempObj.id)
          //push into nodes name is label id filter - d3 will cycle thru these and add compare to links values 

        // {
            // source: 0,
            // value: 0.342284047256003,
            // target: 1
            // }

    })  

    //addnodes for players

    _.each(a, function(o){
        var node = {};
        node.name= o.playername;
        node.id  = stripSpace(o.playername); 
        node.value = o.value;
        node.s = o[s];
        nodes.push(node);

    })     

    _.each(nodes, function(node,i){
        var link = {}

        link.target = i;
        link.source = getLinkSource(node.s);  //link.source = 
        link.value = node.value;
        links.push(link);

    })


    var json2014 = { }

    json2014.nodes = nodes;
    json2014.links = links;


        function getLinkSource(s){
          var src = 0;
            _.each(categArr, function(o,i){

              if(s == o){ src = i+1 }
            
            })
         
          return src;  
        }

    console.log(json2014)


}



function getNodeName (s){

  var t;

      if(s == "D"){ t = "Defender" }
      if(s == "M"){ t = "Midfielder" }
      if(s == "F"){ t = "Forward" }
      if(s == "G"){ t = "Goalkeeper" }  

  return t
}

function initSankey(data){
    
    var chart = d3.select("#chart").append("svg").chart("Sankey.Path")
          .name(label)
          // .colorNodes(function(name, node) {  return color(node, 1) || colors.fallback; })
          // .colorLinks(function(link) { return color(link.source, 4) || color(link.target, 1) || colors.fallback; })
          .nodeWidth(15)
          .nodePadding(10)
          .spread(true)
          .iterations(0)
          .draw(data);   


}

function label(node) {
          return node.name.replace(/\s*\(.*?\)$/, '');
        }
        function color(node, depth) {
          var id = node.id.replace(/(_score)?(_\d+)?$/, '');
          if (colors[id]) {
            return colors[id];
          } else if (depth > 0 && node.targetLinks && node.targetLinks.length == 1) {
            return color(node.targetLinks[0].source, depth-1);
          } else {
            return null;
          }
}      