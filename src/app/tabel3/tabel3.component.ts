import { Component } from '@angular/core';
import { xtee } from '../../xtee/xtee';

//import { products } from '../products';

@Component({
  selector: 'tabel3-component',
  templateUrl: './tabel3.component.html',
  styleUrls: ['./tabel3.component.scss']
})
export class Tabel3Component {

  levpsect: number;  
  levnsect: number;
  levpsize: number;
  levnsize: number;
  levpcount: number;
  levncount: number;

  constructor() { 
    this.levpsect = (xtee.LevpSect)*100;
    this.levnsect = xtee.Lev_n_Sect;
    this.levpsize = (xtee.LevpSize)*100;
    //this.levpsize = Math.round((xtee.LevpSize)*100*10)/10;
    this.levnsize = xtee.Lev_n_Size;
    this.levpcount = (xtee.LevpCount)*100;
    this.levncount = xtee.Lev_n_Count;
  }
  
}