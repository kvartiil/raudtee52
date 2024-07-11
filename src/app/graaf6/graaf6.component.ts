import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'graaf6',
  templateUrl: './graaf6.component.html',
  styleUrls: [ './graaf6.component.scss' ]
})
export class Graaf6Component implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;
  idx = 2;

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
      animationDuration: 10000,          
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
          name: 'Maksevõime',
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
          color: ['#d73e3e', '#ffcf00', '#008936'],
          animationDelay: (idx) => idx * 10000 + 100000,
          animationDuration: 233,
          data: [
            { value: 40, name: 'Madal' },
            { value: 35, name: 'Keskmine' },
            { value: 25, name: 'Väga hea' }
            
          ]
        }

        ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 25,

      
        
    };
  }
}