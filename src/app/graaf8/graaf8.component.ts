import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'graaf8',
  templateUrl: './graaf8.component.html',
  styleUrls: [ './graaf8.component.scss' ]
})
export class Graaf8Component implements OnInit  {
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

     

  angleAxis: {},
  radiusAxis: {
    type: 'category',
    data: ['Efektiivsus', 'Maksevõime', 'Võimendus', 'Tasuvus', 'Tööjõud'],
    //color: '#ffffff',
    z: 10
  },
  polar: {},
  color: ['#d73e3e', '#ffcf00', '#008936'],
  series: [
    {
      type: 'bar',
      data: [10, 20, 30, 40, 50],
      coordinateSystem: 'polar',
      name: 'Madal',
      stack: 'a',
      emphasis: {
        focus: 'series'
      }
    },
    {
      type: 'bar',
      data: [20, 40, 60, 20, 30],
      coordinateSystem: 'polar',
      name: 'Keskmine',
      stack: 'a',
      emphasis: {
        focus: 'series'
      }
    },
    {
      type: 'bar',
      data: [70, 40, 10, 40, 20],
      coordinateSystem: 'polar',
      name: 'Väga hea',
      stack: 'a',
      emphasis: {
        focus: 'series'
      }
    }
  ],
  legend: {
    show: true,
    data: ['Madal', 'Keskmine', 'Väga hea']
  }
};
  }
}