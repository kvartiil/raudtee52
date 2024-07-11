import { Component } from '@angular/core';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

//import { products } from '../products';

@Component({
  selector: 'graaf1',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './graaf1.component.html',
  styleUrls: ['./graaf1.component.scss'],
  providers: [
    provideEcharts(),
  ]
})
export class Graaf1Component {

  xAxis = {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  };

  yAxis = {
    type: 'value'
  };

  series = [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line',
    areaStyle: {}
  }];


}