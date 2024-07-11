import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'graaf4',
  templateUrl: './graaf4.component.html',
  styleUrls: [ './graaf4.component.scss' ]
})
export class Graaf4Component implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;

  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      legend: {
        data: ['Madal', 'Keskmine', 'Kõrge'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        //data: xAxisData,
        //data: ['A', 'B', 'C', 'D', 'E'],
        silent: false,
        position: 'top',
        splitLine: {
          show: false,
        },
        axisLabel: {
          formatter: '{value} %',
          align: 'center'
          // ...
        },
        axisLine: {onZero: false},
      },
      yAxis: {
        type: 'category',
        data: ['Efektiivsus', 'Maksevõime', 'Võimendus', 'Tasuvus', 'Tööjõud'],
        inverse: true
        
      },
      series: [
        {
          name: 'Madal',
          type: 'bar',
          //stack: '1',
          //stack: 'x',
          //data: data1,
          data: [34, 22, 28, 43, 49],
          markLine: {
            data: [{
                    name: 'Maksimum',
                    type: 'max'
                },
                {
                    name: 'Miinimum',
                    type: 'min'
                }
            ]
        },
          color: ['#EFB2B2'],
          animationDelay: (idx) => idx * 1000,
        },
        {
          name: 'Keskmine',
          type: 'bar',
          //stack: 'x',
          //stack: '1',
          data: [26, 34, 32, 27, 31],
          markLine: {
            data: [{
                    name: 'Maksimum',
                    type: 'max',
                },
                {
                    name: 'Miinimum',
                    type: 'min',
                }
            ]
        },
          color: ['#FFE1A0'],
          //data: data2,
          animationDelay: (idx) => idx * 1000 + 1000,
        },

        {
          name: 'Kõrge',
          type: 'bar',
          //stack: 'x',
          //stack: '1',
          data: [40, 44, 40, 30, 20],
          markLine: {
            data: [{
                    name: 'Maksimum',
                    type: 'max',
                },
                {
                    name: 'Miinimum',
                    type: 'min',
                }
            ]
        },
          color: ['#ACCFBA'],
          //data: data2,
          animationDelay: (idx) => idx * 1000 + 1000,
        },









5      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  }
}