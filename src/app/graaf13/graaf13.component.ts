import { Component, VERSION, OnInit } from '@angular/core';
import { xtee } from '../../xtee/xtee';

@Component({
  selector: 'graaf13',
  templateUrl: './graaf13.component.html',
  styleUrls: [ './graaf13.component.scss' ]
})
export class Graaf13Component implements OnInit  {
  type:any;
  options: any;
  
  ngOnInit(): void {

    this.options = {
      legend: {
        
        
      },
      tooltip: {},
      angleAxis: [
        {
          type: 'category',
          polarIndex: 0,
          startAngle: 90,
          endAngle: 0,
          data: ['Vedajad1', 'Vedajad2', 'Vedajad3', 'Vedajad4']
        },
        {
          type: 'category',
          polarIndex: 1,
          startAngle: -90,
          endAngle: -180,
          data: ['Kaubagrupp1', 'Kaubagrupp2', 'Kaubagrupp3', 'Kaubagrupp4']
        }
      ],
      radiusAxis: [{ polarIndex: 0 }, { polarIndex: 1 }],
      polar: [{}, {}],
      series: [
        {
          type: 'bar',
          name: 'Elujõud',
          polarIndex: 0,
          data: [1, 0.2, 0.9, 0.27],
          coordinateSystem: 'polar'
          
        },
        {
          type: 'bar',
          name: 'Elastsus',
          polarIndex: 1,
          data: [0.6, 2.4, 1.8, 0.7],
          coordinateSystem: 'polar'
        }
        
      ]
    };


  }


}

