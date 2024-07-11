import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'hetk1-component',
  templateUrl: './hetk1.component.html',
  styleUrls: ['./hetk1.component.scss']
})
export class Hetk1Component {
  
  key = 'ennustus';
  ennustustulemus: string;
  ennustustulemusn: number;

  getEnnustus() {
    this.ennustustulemus = localStorage.getItem(this.key);
    this.ennustustulemusn=Number(this.ennustustulemus);
    return this.ennustustulemusn;
  }

}