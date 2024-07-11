import { Component } from '@angular/core';
import { xtee } from '../../xtee/xtee';

//import { products } from '../products';

@Component({
  selector: 'tabel4-component',
  templateUrl: './tabel4.component.html',
  styleUrls: ['./tabel4.component.scss']
})
export class Tabel4Component {

  retpsect: number;  
  retnsect: number;
  retpsize: number;
  retnsize: number;
  retpcount: number;
  retncount: number;

  constructor() { 
    this.retpsect = (xtee.RetpSect)*100;
    this.retnsect = xtee.Ret_n_Sect;
    //this.retpsize = (xtee.RetpSize)*100;
    this.retpsize = Math.round((xtee.RetpSize)*100*10)/10;
    this.retnsize = xtee.Ret_n_Size;
    this.retpcount = (xtee.RetpCount)*100;
    this.retncount = xtee.Ret_n_Count;
  }
  
}