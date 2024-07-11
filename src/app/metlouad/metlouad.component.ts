import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'metlouad-component',
  templateUrl: './metlouad.component.html',
  styleUrls: ['./metlouad.component.scss']
})
export class MetlouadComponent {

ReadMore:boolean = true
visible:boolean = false

onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
    //alert("lgaj");
  }
  
}