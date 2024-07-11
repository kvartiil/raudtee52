import { Component } from '@angular/core';
import { xtee } from '../../xtee/xtee';

//import { products } from '../products';

@Component({
  selector: 'tabele2-component',
  templateUrl: './tabele2.component.html',
  styleUrls: ['./tabele2.component.scss']
})
export class Tabele2Component {

  lvkk: number;  
  mvk: number;
  rk: number;

  constructor() { 
    this.lvkk = xtee.LVKK;
    this.mvk = xtee.MVK;
    this.rk = xtee.RK;
  }
  
}