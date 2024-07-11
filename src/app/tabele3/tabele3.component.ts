import { Component } from '@angular/core';
import { xtee } from '../../xtee/xtee';

//import { products } from '../products';

@Component({
  selector: 'tabele3-component',
  templateUrl: './tabele3.component.html',
  styleUrls: ['./tabele3.component.scss']
})
export class Tabele3Component {

  vk: number;  
  kos: number;
  ikk: number;

  constructor() { 
    this.vk = xtee.VK;
    this.kos = xtee.KOS;
    this.ikk = xtee.IKK;
  }
  
}