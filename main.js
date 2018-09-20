//ASSIGNMENT 1 MAIN JS

function rowConverter(row) {
  return {
    app_name: row.app_name,
    downloads: parseInt(row.downloads),
    average_rating: parseFloat(row.average_rating),
    thirty_day_keep: parseFloat(row.thirty_day_keep)
  }
}

//measure size of titles
//https://stackoverflow.com/questions/14605348/title-and-axis-labels
function measure(text, chart){
  if(!text || text.length === 0) return {height:0, width:0};

  var container = d3.select(chart)
    .append('text').attr({x:-1000, y:1000}).text(text);

  var bbox = container.node().getBBox();
  container.remove();

  return {height: bbox.height, width: bbox,width};
}

function makeChart1(dataset) {

  let w = 500;
  let h = 500;

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

  let xAxis = d3.axisBottom(xScale)
    .ticks(5);
  let yAxis = d3.axisLeft(yScale);

  //responsive bar width
  let barWidth = Math.floor((h-10) / dataset.length) - 5;

  // d3 allows scaling between colors
  let colorScale = d3.scaleLinear()
    .domain([4.5, 5])
    .range(['#c9df8a', '#74d600']);

  chart1.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', 40)
    .attr('y', (d) => yScale(d.app_name))
    .attr('width', (d) => xScale(d.downloads))
    .attr('height', barWidth)
    .attr('fill', (d) => colorScale(d.average_rating));

  // AXES
  chart1.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(40, ${h - 20})`)
    .call(xAxis);

  chart1.append('g')
    .attr('class', 'axis')
    .attr('class', 'graph1_y')
    .attr('transform', `translate(55, 0)`)
    .call(yAxis);

  //Chart titles
  //https://stackoverflow.com/questions/14605348/title-and-axis-labels
  //Create title 
  chart1.append("text")
    .attr("x", w / 2 )
    .attr("y", 12)
    .style("text-anchor", "middle")
    .text("Number of Downloads Per App");
}

function makeChart2(dataset) {
  let w = 500;
  let h = 500;

  // sort the data by downloads
  // uses built-in Array.sort() with comparator function
  dataset.sort((a,b) => b.average_rating - a.average_rating);

  let chart1 = d3.select('#chart2')
    .attr('width', w)
    .attr('height', h);

  // our range is limited from 0 to width - 100, 
  // which is for the 80 pixels on left for axis and 
  // 20 pixels on right for padding
  let xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, (d) => d.average_rating)])
    .rangeRound([0, w - 100]);

  // using scale band to work with nominal values 
  // the Array.map() call allows us to get a new array
  // by calling a function on each item of the source array 
  // here it pulls out the app_name
  let yScale = d3.scaleBand()
    .domain(dataset.map((d) => d.app_name))
    .rangeRound([20, h - 20]);

  let xAxis = d3.axisBottom(xScale)
    .ticks(5);
  let yAxis = d3.axisLeft(yScale);

  //responsive bar width
  let barWidth = Math.floor((h-10) / dataset.length) - 5;

  // d3 allows scaling between colors
  let colorScale = d3.scaleLinear()
    .domain([4.5, 5])
    .range(['#c9df8a', '#74d600']);

  chart1.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', 40)
    .attr('y', (d) => yScale(d.app_name))
    .attr('width', (d) => xScale(d.average_rating))
    .attr('height', barWidth)
    .attr('fill', (d) => colorScale(d.average_rating));

  // AXES
  chart1.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(40, ${h - 20})`)
    .call(xAxis);

  chart1.append('g')
    .attr('class', 'axis')
    .attr('class', 'graph1_y')
    .attr('transform', `translate(55, 0)`)
    .call(yAxis);

  //Chart titles
  //https://stackoverflow.com/questions/14605348/title-and-axis-labels
  //Create title 
  chart1.append("text")
    .attr("x", w / 2 )
    .attr("y", 12)
    .style("text-anchor", "middle")
    .text("Average Rating Per App");
}

function makeChart3(dataset) {
  let w = 500;
  let h = 500;

  // sort the data by downloads
  // uses built-in Array.sort() with comparator function
  dataset.sort((a,b) => b.thirty_day_keep - a.thirty_day_keep);

  let chart1 = d3.select('#chart3')
    .attr('width', w)
    .attr('height', h);

  // our range is limited from 0 to width - 100, 
  // which is for the 80 pixels on left for axis and 
  // 20 pixels on right for padding
  let xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, (d) => d.thirty_day_keep)])
    .rangeRound([0, w - 100]);

  // using scale band to work with nominal values 
  // the Array.map() call allows us to get a new array
  // by calling a function on each item of the source array 
  // here it pulls out the app_name
  let yScale = d3.scaleBand()
    .domain(dataset.map((d) => d.app_name))
    .rangeRound([20, h - 20]);

  let xAxis = d3.axisBottom(xScale)
    .ticks(5);
  let yAxis = d3.axisLeft(yScale);

  //responsive bar width
  let barWidth = Math.floor((h-10) / dataset.length) - 5;

  // d3 allows scaling between colors
  let colorScale = d3.scaleLinear()
    .domain([4.5, 5])
    .range(['#c9df8a', '#74d600']);

  chart1.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', 40)
    .attr('y', (d) => yScale(d.app_name))
    .attr('width', (d) => xScale(d.thirty_day_keep))
    .attr('height', barWidth)
    .attr('fill', (d) => colorScale(d.average_rating));

  // AXES
  chart1.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(40, ${h - 20})`)
    .call(xAxis);

  chart1.append('g')
    .attr('class', 'axis')
    .attr('class', 'graph1_y')
    .attr('transform', `translate(55, 0)`)
    .call(yAxis);

  //Chart titles
  //https://stackoverflow.com/questions/14605348/title-and-axis-labels
  //Create title 
  chart1.append("text")
    .attr("x", w / 2 )
    .attr("y", 12)
    .style("text-anchor", "middle")
    .text("Percentage of Users With App Still Installed After 30 Days");
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
