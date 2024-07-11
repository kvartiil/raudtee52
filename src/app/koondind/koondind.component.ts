import { Component } from '@angular/core';
import * as d3 from "d3";

//declare var d3: any;

@Component({
  selector: 'koondind-component',
  templateUrl: './koondind.component.html',
  styleUrls: ['./koondind.component.scss']
})
export class KoondindComponent {

  value = 64
  thick = 15;
  label = "Elujõud"
  gaugeAppendText="%"
  max=100;
  min=0;
 
  

}