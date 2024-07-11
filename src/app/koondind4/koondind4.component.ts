import { Component } from '@angular/core';

//declare var d3: any;

@Component({
  selector: 'koondind4-component',
  templateUrl: './koondind4.component.html',
  styleUrls: ['./koondind4.component.scss']
})
export class Koondind4Component {

  value = 59;
  thick = 25;
  label = "Elujõud"
  gaugeAppendText="€"
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