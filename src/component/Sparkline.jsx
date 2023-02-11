import React from 'react';
import * as d3 from 'd3';

function Sparkline({data}) {
  const width = 100;
  const height = 40;
  const x = d3.scaleLinear()
    .domain([0, data.length - 1])
    .range([0, width]);
  
  const y = d3.scaleLinear()
    .domain(d3.extent(data))
    .range([height, 0]);

  const line = d3.line()
    .x((d, i) => x(i))
    .y(d => y(d))
    .curve(d3.curveMonotoneX);

  const path = line(data);
  const color = d3.scaleLinear()
    .domain(d3.extent(data))
    .range(['red', 'green']);
  
  return (
    <svg width={width} height={height}>
      <path d={path} fill="none" stroke={color(data[data.length - 1])} />
    </svg>
  );
}

export default Sparkline;
