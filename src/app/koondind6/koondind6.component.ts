import { Component } from '@angular/core';

//declare var d3: any;

@Component({
  selector: 'koondind6-component',
  templateUrl: './koondind6.component.html',
  styleUrls: ['./koondind6.component.scss']
})
export class Koondind6Component {

  value = 12;
  thick = 25;
  label = ""
  gaugeAppendText=""
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