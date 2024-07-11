import { Component } from '@angular/core';

@Component({
  selector: 'koondind2-component',
  templateUrl: './koondind2.component.html',
  styleUrls: ['./koondind2.component.scss']
})
export class Koondind2Component {

  value = 58
  thick = 25;
  label = "Elujõud"
  gaugeAppendText="%"
  max=100;
  min=0;
 
  

}