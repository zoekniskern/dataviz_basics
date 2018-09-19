function rowConverter(row) {
  return {
    app_name: row.app_name,
    downloads: parseInt(row.downloads),
    average_rating: parseFloat(row.average_rating),
    thirty_day_keep: parseFloat(row.thirty_day_keep)
  }
}

function makeChart1(dataset) {

  let w = 600;
  let h = dataset.length * 24;

  // sort the data by downloads
  // uses built-in Array.sort() with comparator function
  dataset.sort((a,b) => b.downloads - a.downloads);

  let chart1 = d3.select('#chart1')
    .attr('width', w)
    .attr('height', h);

  // our range is limited from 0 to width - 100, 
  // which is for the 80 pixels on left for axis and 
  // 20 pixels on right for padding
  let xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, (d) => d.downloads)])
    .rangeRound([0, w - 100]);

  // using scale band to work with nominal values 
  // the Array.map() call allows us to get a new array
  // by calling a function on each item of the source array 
  // here it pulls out the app_name
  let yScale = d3.scaleBand()
    .domain(dataset.map((d) => d.app_name))
    .rangeRound([20, h - 20]);

  // d3 allows scaling between colors
  let colorScale = d3.scaleLinear()
    .domain([4.5, 5])
    .range(['#88d', '#ccf']);

  chart1.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', 80)
    .attr('y', (d) => yScale(d.app_name))
    .attr('width', (d) => xScale(d.downloads))
    .attr('height', 20)
    .attr('fill', (d) => colorScale(d.average_rating));

  // AXES
  chart1.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(80, ${h - 20})`)
    .call(d3.axisBottom(xScale));

  chart1.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(80,0 )`)
    .call(d3.axisLeft(yScale));
}

function makeChart2(dataset) {
}

function makeChart3(dataset) {
}

function makeChart4(dataset) {
}

function makeChart5(dataset) {
}

window.onload = function () {
  d3.csv('fake_app_download_rating.csv', rowConverter)
    .then((dataset) => {

      makeChart1(dataset);
      makeChart2(dataset);
      makeChart3(dataset);
      makeChart4(dataset);
      makeChart5(dataset);


    });
}
