import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'elujoud-component',
  templateUrl: './elujoud.component.html',
  styleUrls: ['./elujoud.component.scss']
})
export class ElujoudComponent {
  products2 = "Siit läheb edasi klassika:";

  share() {
    window.alert('The product has been shared!');
  }
}