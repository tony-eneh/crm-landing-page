import * as d3 from 'd3';
import { IData } from '../../types';

export function drawChart(svgEl: SVGSVGElement, data: IData[]): void {
  const svg = d3.select(svgEl);

  /**
   * SIZE DEFINITIONS
   */
  const height = 228;
  const width = 326;
  const margin = 25;

  /**
   * CHART TITLE
   */
  svg
    .select('#chart-title')
    .attr('x', margin)
    .attr('y', margin)
    .attr('fill', 'white')
    .attr('font-size', 14)
    .attr('font-weight', 'bold')
    .attr('font-family', 'sans-serif');

  /**
   * SCALES
   */
  const yScale = d3
    .scaleLinear()
    .domain([0, 1000])
    .range([height - margin, margin]);

  // console.log({extent: d3.extent(data, d => d.x)})
  const xScale = d3
    .scaleTime()
    .domain(d3.extent(data, (d) => d.x) as [Date, Date])
    .nice()
    .range([margin, width - margin]);

  /**
   * CURVES (THE PATHS)
   */
  const areaCurve = d3
    .area<IData>()
    .curve(d3.curveNatural)
    .x((d) => xScale(d.x))
    .y0(205)
    .y1((d) => yScale(d.y));

  const areaCurveStart = d3
    .area<IData>()
    .curve(d3.curveNatural)
    .x((d) => xScale(d.x))
    .y0(205)
    .y1(190);

  const lineCurve = d3
    .line<IData>()
    .curve(d3.curveNatural)
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));

  const lineCurveStart = d3
    .line<IData>()
    .curve(d3.curveNatural)
    .x((d) => xScale(d.x))
    .y(190);

  svg
    .append('path')
    .attr('d', areaCurveStart(data))
    .transition()
    .duration(1000)
    .ease(customEase)
    .attr('d', areaCurve(data))
    .attr('fill', 'url(#area-fill)');

  svg
    .append('path')
    .attr('d', lineCurveStart(data))
    .transition()
    .duration(1000)
    .ease(customEase)
    .attr('d', lineCurve(data))
    .attr('stroke', '#AC17D1')
    .attr('stroke-width', 2);

  /**
   * AXES
   */
  const xAxis = d3.axisBottom<Date>(xScale).tickFormat(d3.timeFormat('%b'));

  const gXAxis = svg
    .append('g')
    .attr('color', 'white')
    .attr('transform', 'translate(0, ' + (height - margin) + ')')
    .call(xAxis);

  // hide lines
  gXAxis.select('path').attr('stroke', null);
  gXAxis.selectAll('.tick line').attr('stroke', null);

  // rect for indicating label of activeDatum (the clicked shi)
  gXAxis
    .selectAll('.tick')
    .insert('rect', 'text')
    .attr('width', 26)
    .attr('height', 14)
    .attr('x', -13)
    .attr('y', 6)
    .attr('rx', 5);

  /**
   * ACTIVE BAR
   */
  const bars = svg
    .selectAll('g.highlight-rect')
    .data(data)
    .join('g')
    .attr('class', 'highlight-rect')
    .style('transition', 'opacity .3s');

  const barWidth = 24;

  bars
    .append('rect')
    .attr('x', (d) => xScale(d.x))
    .attr('y', (d) => yScale(d.y) - 10)
    .attr('width', barWidth)
    .attr('height', (d) => height - margin - yScale(d.y))
    .attr('rx', 5)
    .attr('fill', 'url(#highlighted-hover)')
    .attr('transform', `translate(${-barWidth / 2})`);

  bars
    .append('circle')
    .attr('cx', (d) => xScale(d.x))
    .attr('cy', (d) => yScale(d.y))
    .attr('r', 5)
    .attr('fill', 'white');

  bars
    .append('circle')
    .attr('cx', (d) => xScale(d.x))
    .attr('cy', (d) => yScale(d.y))
    .attr('r', 2)
    .attr('fill', '#AC17D1');

  let activeDatum: IData;
  const monthLabels = gXAxis.selectAll('.tick').data(data);

  /**
   * CLICK LISTENER
   */
  bars.on('click', function () {
    bars.each((d) => {
      if (d === d3.select(this).datum()) {
        activeDatum = d;
      }
    });

    monthLabels.each(function (d) {
      d3.select(this).classed('active', activeDatum === d);
    });

    bars
      .classed('active', false)
      .select('rect')
      .attr('fill', 'url(#highlighted-hover)');

    d3.select(this).classed('active', true).select('rect');
  });
}

 // custom easing function
 function customEase(t: number) {
    return t < 0.6 ? d3.easeCircleIn(t) : d3.easeBackOut.overshoot(3)(t);
  }
