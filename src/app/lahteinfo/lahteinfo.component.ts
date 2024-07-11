import { Component, OnInit } from '@angular/core';
import { xtee } from '../../xtee/xtee';
import { sektorid } from './sectors';
import { suurusgrupid } from './suurus';
import { maakonnad } from './counties';
import { emtakid } from './emtax';
//import { timeHours } from 'd3';

//import { products } from '../products';

@Component({
  selector: 'lahteinfo-component',
  templateUrl: './lahteinfo.component.html',
  styleUrls: ['./lahteinfo.component.scss']
})
export class LahteinfoComponent implements OnInit {


  title = "Põhimõtteline lähtenurk elujõu ja elastsuse kombinatsiooni tõlgendamiseks";
  content1 = "Ettevõtte põhitegevusala (EMTAK): ";
  content2 = "Ettevõtte tegevussektor: ";
  content3 = "Hõivatute arv ettevõttes: ";
  content4 = "Ettevõtte suurusgrupp: ";
  content5 = "Ettevõtte tegevuspiirkond (maakond): ";
  content6 = "Majandusaasta aruande aasta, millel prognoosid põhinevad: ";

  content1a: string;
  content1b: string;
  sectorNo: string;
  sectParing: string;
  content2a: string;
  content3a: string;
  content3b: string;
  sizeNo: string;
  countNo: string;
  content6a: string;
  content6b: string;

  constructor() { 
    this.content1a = JSON.stringify(xtee.EMTAK);
    this.content1b = this.content1+this.content1a;
    this.sectorNo = JSON.stringify(xtee.sektorNo);
    this.sectParing = 's'+this.sectorNo;
    //this.content2a = sektorid.this.sectParing;
    //this.content2a = this.content2+this.sectParing;
    this.content3a = JSON.stringify(xtee.hoiv);
    this.content3b = this.content3+this.content3a;
    this.sizeNo = JSON.stringify(xtee.size);
    this.countNo = JSON.stringify(xtee.county);
    this.content6a = JSON.stringify(xtee.prognAasta);
    this.content6b = this.content6+this.content6a;

  }

  paring() {
    this.sectParing = 'sektorid.s35';
    this.content2a = this.sectParing;
    return this.content2a;
  }

  sektorArray: any = [];
  oigeSektor: any;

  keerukam() {
    for (let key in sektorid) {
      if (sektorid.hasOwnProperty(key)) {
        this.sektorArray.push(sektorid[key]);
      }
    }
  
      this.oigeSektor= this.sektorArray.filter(e=>{
        return e.sektorNo === this.sectorNo;
  
      
    })
    
    //console.log( this.oigeSektor[1]);

    //return this.oigeSektor;

  }

  suurusArray: any = [];
  oigeSuurus: any;

  suurusklass() {

    for (let key in suurusgrupid) {
      if (suurusgrupid.hasOwnProperty(key)) {
        this.suurusArray.push(suurusgrupid[key]);
      }
    }
    this.oigeSuurus= this.suurusArray.filter(e=>{
      return e.grupiNo === this.sizeNo;
  })

  }

  maakondArray: any = [];
  oigeMaakond: any;

  maakonnavalik() {

    for (let key in maakonnad) {
      if (maakonnad.hasOwnProperty(key)) {
        this.maakondArray.push(maakonnad[key]);
      }
    }
    this.oigeMaakond= this.maakondArray.filter(e=>{
      return e.maakonnaNo === this.countNo;
  })

  }

  emtaktextArray: any = [];
  oigeText: any;

  emtaktextvalik() {

    for (let key in emtakid) {
      if (emtakid.hasOwnProperty(key)) {
        this.emtaktextArray.push(emtakid[key]);
      }
    }
    this.oigeText= this.emtaktextArray.filter(e=>{
      return e.EMTAK_txt === this.content1a;
  })

  }




  ngOnInit() {
    this.keerukam();
    this.suurusklass();
    this.maakonnavalik();
    this.emtaktextvalik();
  }

    
}