import { Component } from '@angular/core';

@Component({
  selector: 'koondind3-component',
  templateUrl: './koondind3.component.html',
  styleUrls: ['./koondind3.component.scss']
})
export class Koondind3Component {

  value = 82
  thick = 22;
  label = "Elujõud"
  gaugeAppendText="%"
  max=100;
  min=0;
 
  

}