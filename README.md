# dataviz_basics
basic d3.js graphing skills

Requirements
//////////////////////////////////////////////
Chart 1 (Horizontal Bar Chart: Downloads)

This one is mostly pre-done but needs cleaning up.

1. Ticks on the left axis isn't very nice.
    (DONE)Work out removing the ticks through CSS styling 
    (DONE)Update the font to make the labels nicer. (Feel free to change the CSS class for the axis or add an id attribute to target styling for just that axis.)
2. The color range isn't the most appealing.
    (DONE)Try working using a different pair of colors that appeal to you.
3. The chart also looks a bit tight/crowded.
    (DONE)Rework the numbers to give a bit of space between the bottom axis and the main bar chart
    (DONE)Change the y-scale range and update other calculations to give more space between bars.

//////////////////////////////////////////////
Chart 2 (Horizontal Bar Chart: Average Rating)

1. Implement makeChart2() using makeChart1() as a template.
    (DONE)Use a different set of colors and sort by average_rating.

//////////////////////////////////////////////
Chart 3 (Horizontal Bar Chart: 30 Day Retention)

1. Implement makeChart3() using makeChart1() as a template. 
    (DONE)Use a different set of colors and sort by thirty_day_keep. 
    (DONE)Use tickFormat() for the x-axis with percentage formatting (see "Formatting Tick Labels" near the end of Chapter 8 in the book for reference).

//////////////////////////////////////////////
Chart 4 (Scatter Chart: Downloads/Rating)

1. Make a scatterplot using downloads as the x-axis and rating as the y-axis. 
    (DONE)The chart should have x- and y- axes
    (DONE)Use circles, and the circles should have r-attributes that scale properly for area. (See Class 3.3 example code regarding .scaleSqrt()). 
    (DONE)Make the circle area scale with rating.
    (DONE)Label the dots using the app_name.

//////////////////////////////////////////////
Chart 5 (Scatter Chart: Downloads/30 Day Retention)

1. Make a scatterplot using downloads as the x-axis and 30 day retention as the y-axis. 
    (DONE)The chart should have x- and y- axes
    (DONE)Use circles, and the circles should have r-attributes that scale properly for area. (See Class 3.3 example code regarding .scaleSqrt()
    (DONE)Make the circle area scale with retention
    (DONE)Label the dots using the app_name
    (DONE)Use percentage formatting for the x-axis tickFormat().

//////////////////////////////////////////////
Storytelling

From the charts, see what you find and make a story about the findings. The data was randomly generated and modified by me to hopefully allow making a story about downloads vs. ratings vs. retention possible. If you can't find a clear story to tell though, feel free let that be the story. The story should have somewhat of a journalist tone, telling an overview of the story, go through the charts, and wrap it up in conclusions. The important part for me is to see that you can work the charts into a narrative document in HTML. Feel free to style the overall document with CSS and structure it using main and section elements.
