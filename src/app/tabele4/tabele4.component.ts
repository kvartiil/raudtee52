import { Component } from '@angular/core';
import { xtee } from '../../xtee/xtee';

//import { products } from '../products';

@Component({
  selector: 'tabele4-component',
  templateUrl: './tabele4.component.html',
  styleUrls: ['./tabele4.component.scss']
})
export class Tabele4Component {

  roe: number;  
  roa: number;
  pkm: number;
  akm: number;

  constructor() { 
    this.roe = xtee.ROE;
    this.roa = xtee.ROA;
    this.pkm = xtee.PKM;
    this.akm = xtee.AKM;
  }
  
}