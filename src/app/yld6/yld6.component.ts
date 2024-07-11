import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'yld6-component',
  templateUrl: './yld6.component.html',
  styleUrls: ['./yld6.component.scss']
})
export class Yld6Component {

ReadMore:boolean = true
visible:boolean = false

onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
    //alert("lgaj");
  }
  
}