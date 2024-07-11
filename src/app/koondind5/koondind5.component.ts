import { Component } from '@angular/core';

//declare var d3: any;

@Component({
  selector: 'koondind5-component',
  templateUrl: './koondind5.component.html',
  styleUrls: ['./koondind5.component.scss']
})
export class Koondind5Component {

  value = 89;
  thick = 25;
  label = "Elujõud"
  gaugeAppendText="stat"
  max=100;
  min=0;
  gaugeDuration = 10000;
  gaugeAnimate = true;
  thresholdConfig = {
  '0': {color: '#d73e3e'},
  '33': {color: '#ffcf00'},
  '67': {color: '#008936'}
};
  

}