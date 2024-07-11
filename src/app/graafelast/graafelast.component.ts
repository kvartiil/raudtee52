import { Component, VERSION, OnInit } from '@angular/core';
import { xtee } from '../../xtee/xtee';

@Component({
  selector: 'graafelast',
  templateUrl: './graafelast.component.html',
  styleUrls: [ './graafelast.component.scss' ]
})
export class GraafElastComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;





  ngOnInit(): void {
    

    this.options = {
  
      title: {
        text: 'Hinnaelastsus'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {},
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2017', '2018', '2019', '2020', '2021', '2022', '2023']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} El'
        }
      },
      series: [
        {
          name: 'Kaubagrupp1',
          type: 'line',
          data: [1.2, 1.1, 1.3, 1.1, 1.2, 1.2, 0.9],
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
        },
        {
          name: 'Kaubagrupp2',
          type: 'line',
          data: [1.3, 2.1, 2.3, 1.9, 1.7, 2.2, 2.1],
          markPoint: {
            data: [{ name: 'Analüüsikoht', value: 1.9, xAxis: 3, yAxis: 1.9 }]
          },
          markLine: {
            data: [
              { type: 'average', name: 'Avg' },
              [
                {
                  symbol: 'none',
                  x: '90%',
                  yAxis: 'max'
                },
                {
                  symbol: 'circle',
                  label: {
                    position: 'start',
                    formatter: 'Max'
                  },
                  type: 'max',
                  name: '最高点'
                }
              ]
            ]
          }
        },
        {
          name: 'Kaubagrupp3',
          type: 'line',
          data: [0.2, 0.1, 0.5, 0.1, 0.2, 0.2, 0.3],
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
        }
      ]
      
    };
    } 
}

