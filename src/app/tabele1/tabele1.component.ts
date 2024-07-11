import { Component } from '@angular/core';
import { xtee } from '../../xtee/xtee';

//import { products } from '../products';

@Component({
  selector: 'tabele1-component',
  templateUrl: './tabele1.component.html',
  styleUrls: ['./tabele1.component.scss']
})
export class Tabele1Component {
  
  vakk: number;  
  lvkak: number;
  vkk: number;

  constructor() { 
    this.vakk = xtee.VaKK;
    this.lvkak = xtee.LVKaK;
    this.vkk = xtee.VKK;
  }



}