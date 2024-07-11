import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'graaf5',
  templateUrl: './graaf5.component.html',
  styleUrls: [ './graaf5.component.scss' ]
})
export class Graaf5Component implements OnInit  {
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
                
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      }
      ,
      series: [

        {
          name: 'Efektiivsus',
          type: 'pie',
          radius: ['30%', '70%'],
          roseType: 'angle',
          itemStyle: {
            borderRadius: [20, 5, 5, 10],
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false
          },
          color: ['#EFB2B2', '#FFE1A0', '#ACCFBA'],
          data: [
            { value: 30, name: 'Madal' },
            { value: 40, name: 'Keskmine' },
            { value: 40, name: 'Väga hea' }
            
          ]
        }

        ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  }
}