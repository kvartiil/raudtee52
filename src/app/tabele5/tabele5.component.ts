import { Component } from '@angular/core';
import { xtee } from '../../xtee/xtee';

//import { products } from '../products';

@Component({
  selector: 'tabele5-component',
  templateUrl: './tabele5.component.html',
  styleUrls: ['./tabele5.component.scss']
})
export class Tabele5Component {

  tjt: number;

  constructor() { 
    this.tjt = xtee.TJT;
    
  }
  
}