import { useEffect, useRef } from 'react';
import './AreaChart.css';
import { IData } from '../../types';
import { drawChart } from './helpers';

export interface IAreaChartProps extends React.ComponentProps<'svg'> {
  data?: IData[];
}

export function AreaChart(props: IAreaChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !props.data) {
      return;
    }

    drawChart(svgRef.current, props.data);
  }, [props.data]);

  return (
    <svg
      id="areaChart"
      ref={svgRef}
      viewBox="0 0 326 228"
      fill="none"
      {...props}
    >
      <text id="chart-title">Revenue</text>
      <defs>
        <linearGradient
          id="area-fill"
          x1="164"
          y1="82.7234"
          x2="164"
          y2="205"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.03" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="highlighted-hover"
          x1="167.5"
          y1="85"
          x2="167.5"
          y2="222"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.05" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="highlighted-active"
          x1="167.5"
          y1="85"
          x2="167.5"
          y2="222"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.5" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
