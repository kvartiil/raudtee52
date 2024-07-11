import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'elujoud1-component',
  templateUrl: './elujoud1.component.html',
  styleUrls: ['./elujoud1.component.scss']
})
export class Elujoud1Component {
  products2 = "Siit läheb edasi klassika:";

  share() {
    window.alert('The product has been shared!');
  }
}