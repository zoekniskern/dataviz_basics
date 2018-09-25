//ASSIGNMENT 1 MAIN JS

function rowConverter(row) {
  return {
    app_name: row.app_name,
    downloads: parseInt(row.downloads),
    average_rating: parseFloat(row.average_rating),
    thirty_day_keep: parseFloat(row.thirty_day_keep),
  }
}



///////////// CHART 1 ////////////////////////////////////////////////////////////////////////////
function makeChart1(dataset) {

  let w = 400;
  let h = 400;

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
    .attr('fill', (d) => colorScale(d.average_rating))
    .attr('id', (d) => d.app_name);

  // AXES
  chart1.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(40, ${h - 20})`)
    .call(xAxis);

  chart1.append('g')
    .attr('class', 'axis')
    .attr('class', 'graph1_y')
    .attr('transform', `translate(55, -2)`)
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

///////////// CHART 2 ////////////////////////////////////////////////////////////////////////////
function makeChart2(dataset) {
  let w = 400;
  let h = 400;

  // sort the data by downloads
  // uses built-in Array.sort() with comparator function
  dataset.sort((a,b) => b.average_rating - a.average_rating);

  let chart2 = d3.select('#chart2')
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
    .range(['#BDFCC9', '#32CD32']);

  chart2.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', 40)
    .attr('y', (d) => yScale(d.app_name))
    .attr('width', (d) => xScale(d.average_rating))
    .attr('height', barWidth)
    .attr('fill', (d) => colorScale(d.average_rating))
    .attr('id', (d) => d.app_name);

  // AXES
  chart2.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(40, ${h - 20})`)
    .call(xAxis);

  chart2.append('g')
    .attr('class', 'axis')
    .attr('class', 'graph1_y')
    .attr('transform', `translate(55, -2)`)
    .call(yAxis);

  //Chart titles
  //https://stackoverflow.com/questions/14605348/title-and-axis-labels
  //Create title 
  chart2.append("text")
    .attr("x", w / 2 )
    .attr("y", 12)
    .style("text-anchor", "middle")
    .text("Average Rating Per App");
}

///////////// CHART 3 ////////////////////////////////////////////////////////////////////////////
function makeChart3(dataset) {
  let w = 400;
  let h = 400;

  // sort the data by downloads
  // uses built-in Array.sort() with comparator function
  dataset.sort((a,b) => b.thirty_day_keep - a.thirty_day_keep);

  let chart3 = d3.select('#chart3')
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
    .ticks(5)
    .tickFormat(d => d + "%");
  let yAxis = d3.axisLeft(yScale);

  //responsive bar width
  let barWidth = Math.floor((h-10) / dataset.length) - 5;

  // d3 allows scaling between colors
  let colorScale = d3.scaleLinear()
    .domain([4.5, 5])
    .range(['#CCFFCC', '#00FF00']);

  chart3.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', 40)
    .attr('y', (d) => yScale(d.app_name))
    .attr('width', (d) => xScale(d.thirty_day_keep))
    .attr('height', barWidth)
    .attr('fill', (d) => colorScale(d.average_rating))
    .attr('id', (d) => d.app_name);

  // AXES
  chart3.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(40, ${h - 20})`)
    .call(xAxis);

  chart3.append('g')
    .attr('class', 'axis')
    .attr('class', 'graph1_y')
    .attr('transform', `translate(55, -2)`)
    .call(yAxis);

  //Chart titles
  //https://stackoverflow.com/questions/14605348/title-and-axis-labels
  //Create title 
  chart3.append("text")
    .attr("x", w / 2 )
    .attr("y", 12)
    .style("text-anchor", "middle")
    .text("% of Users With App Still Installed After 30 Days");
}

///////////// CHART 4 ////////////////////////////////////////////////////////////////////////////
function makeChart4(dataset) {
  let w = 620;
  let h = 450;

  let xScale = d3.scaleLinear()
    .domain([d3.min(dataset, (d) => d.downloads) - 100000, d3.max(dataset, (d) => d.downloads) + 100000])
    .rangeRound([40, w -15]);

  let yScale = d3.scaleLinear()
    .domain([5, d3.min(dataset, (d) => d.average_rating)])
    .rangeRound([20, h-20]);
  
  let rScale = d3.scaleSqrt()
    .domain([0, d3.max(dataset, (d) => d.average_rating)])
    .range([1,5]);

  let xAxis = d3.axisBottom(xScale);

  let yAxis = d3.axisLeft(yScale)
    .ticks(5);

  let chart4 = d3.select('#chart4')
    .attr('width', w)
    .attr('height', h);

  chart4.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', (d) => xScale(d.downloads))
    .attr('cy', (d) => yScale(d.average_rating))
    .attr('fill', 'green')
    .attr('r', (d) => rScale(d.average_rating))
    .attr('id', (d) => d.app_name);

  chart4.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('font-size', 10)
    .attr('x', (d) => xScale(d.downloads))
    .attr('y', (d) => yScale(d.average_rating) - 8)
    .text((d) => d.app_name); 

  chart4.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0, ${h - 12})`)
    .call(xAxis);

  chart4.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(40, 0)`)
    .call(yAxis);

  chart4.append("text")
    .attr("x", w / 2 )
    .attr("y", 5)
    .style("text-anchor", "middle")
    .text("Average Rating vs. Downloads");

}

///////////// CHART 5 ////////////////////////////////////////////////////////////////////////////
function makeChart5(dataset) {
  let w = 620;
  let h = 450;

  let xScale = d3.scaleLinear()
    .domain([d3.min(dataset, (d) => d.downloads) - 100000, d3.max(dataset, (d) => d.downloads) + 100000])
    .rangeRound([40, w -15]);

  let yScale = d3.scaleLinear()
    .domain([d3.max(dataset, (d) => d.thirty_day_keep) + 5, d3.min(dataset, (d) => d.thirty_day_keep)])
    .rangeRound([20, h-20]);
  
  let rScale = d3.scaleSqrt()
    .domain([0, d3.max(dataset, (d) => d.thirty_day_keep)])
    .range([1,5]);

  let xAxis = d3.axisBottom(xScale);

  let yAxis = d3.axisLeft(yScale)
    .ticks(5)
    .tickFormat(d => d + "%");

  let chart5 = d3.select('#chart5')
    .attr('width', w)
    .attr('height', h);

  chart5.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', (d) => xScale(d.downloads))
    .attr('cy', (d) => yScale(d.thirty_day_keep))
    .attr('fill', 'limegreen')
    .attr('r', (d) => rScale(d.thirty_day_keep))
    .attr('id', (d) => d.app_name);

  chart5.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('font-size', 10)
    .attr('x', (d) => xScale(d.downloads))
    .attr('y', (d) => yScale(d.thirty_day_keep) - 8)
    .text((d) => d.app_name); 

  chart5.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0, ${h - 12})`)
    .call(xAxis);

  chart5.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(40, 0)`)
    .call(yAxis);

  chart5.append("text")
    .attr("x", w / 2 )
    .attr("y", 5)
    .style("text-anchor", "middle")
    .text("30 Day Retention vs. Downloads");
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
