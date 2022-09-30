var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
 
console.log(today)


var trace1 = {
  x: ['role', 'roundtrip'],
  y: [3, 6],
  name: 'object',
  type: 'bar'
};

var trace2 = {
  x: ['role', 'roundtrip'],
  y: [1, 3],
  name: 'resource',
  type: 'bar'
};

var data = [trace1, trace2];

var layout = {barmode: 'group'};

Plotly.newPlot('myDiv', data, layout);

