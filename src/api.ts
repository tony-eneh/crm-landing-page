import { IData } from './types';

export function getChartData() {
  const chartData: IData[] = [
    {
      x: new Date('2023-01-01T00:00:00.000Z'),
      y: 800,
    },
    {
      x: new Date('2023-01-31T00:00:00.000Z'),
      y: 628.8263743200896,
    },
    {
      x: new Date('2023-03-02T00:00:00.000Z'),
      y: 891.8240871140856,
    },
    {
      x: new Date('2023-04-01T00:00:00.000Z'),
      y: 812.1512978221934,
    },
    {
      x: new Date('2023-05-01T00:00:00.000Z'),
      y: 772.090164410443,
    },
    {
      x: new Date('2023-05-31T00:00:00.000Z'),
      y: 618.0093233264864,
    },
    {
      x: new Date('2023-06-30T00:00:00.000Z'),
      y: 940.8833860532548,
    },
  ];

  return Promise.resolve(chartData);
}
