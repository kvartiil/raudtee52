import { Component } from '@angular/core';
import { xtee } from '../../xtee/xtee';

//import { products } from '../products';

@Component({
  selector: 'tabel5-component',
  templateUrl: './tabel5.component.html',
  styleUrls: ['./tabel5.component.scss']
})
export class Tabel5Component {

  emppsect: number;  
  empnsect: number;
  emppsize: number;
  empnsize: number;
  emppcount: number;
  empncount: number;

  constructor() { 
    this.emppsect = (xtee.EmppSect)*100;
    this.empnsect = xtee.Emp_n_Sect;
    this.emppsize = (xtee.EmppSize)*100;
    //this.emppsize = Math.round((xtee.EmppSize)*100*10)/10;
    this.empnsize = xtee.Emp_n_Size;
    this.emppcount = (xtee.EmppCount)*100;
    this.empncount = xtee.Emp_n_Count;
  }
  
}