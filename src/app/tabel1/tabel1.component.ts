import { Component } from '@angular/core';
import { xtee } from '../../xtee/xtee';


//import { products } from '../products';

@Component({
  selector: 'tabel1-component',
  templateUrl: './tabel1.component.html',
  styleUrls: ['./tabel1.component.scss']
})
export class Tabel1Component {

effpsect: number;  
effnsect: number;
effpsize: number;
effnsize: number;
effpcount: number;
effncount: number;

  constructor() { 
    this.effpsect = (xtee.EffpSect)*100;
    this.effnsect = xtee.Eff_n_Sect;
    this.effpsize = (xtee.EffpSize)*100;
    this.effnsize = xtee.Eff_n_Size;
    this.effpcount = (xtee.EffpCount)*100;
    this.effncount = xtee.Eff_n_Count;
  }
}