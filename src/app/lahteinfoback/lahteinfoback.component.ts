import { Component, OnInit } from '@angular/core';
import { xtee } from '../../xtee/xtee';
import { sektorid } from '../lahteinfo/sectors';
import { koostis } from './koosnemine';

//import { products } from '../products';

@Component({
  selector: 'lahteinfoback-component',
  templateUrl: './lahteinfoback.component.html',
  styleUrls: ['./lahteinfoback.component.scss']
})
export class LahteinfobackComponent implements OnInit{


  title = "Siin on toodud ära informatsioon analüüsitava kaasuse kohta...";
  content1 = "Ettevõtte põhitegevusala (EMTAK): ";
  content2 = "Sinu ettevõtte puhul võeti aluseks tegevussektor: ";
  content3 = "Sellesse sektorisse on analüüsil paigutatud järgmised tegevusalad: ";
  content4 = "Ettevõtte suurusgrupp: ";
  content5 = "Ettevõtte tegevuspiirkond (maakond): ";
  content6 = "Majandusaasta aruande aasta, millel prognoosid põhinevad: ";

  content1a: string;
  content1b: string;
  sectorNo: string;
  elujouEnnustus: string;
  elujouEnnustus2: string;
  elujouEnnustus3: string;
  elastsusEnnustus: string;
  raudteeEnnustus: string;
  majandusEnnustus: string;

  varvikood = 1;

  constructor() { 
    this.content1a = JSON.stringify(xtee.EMTAK);
    this.content1b = this.content1+this.content1a;
    this.sectorNo = JSON.stringify(xtee.sektorNo);
    this.elujouEnnustus = localStorage.getItem("ennustusElujoud");
    this.elastsusEnnustus = localStorage.getItem("ennustusElastsus");
    this.raudteeEnnustus = localStorage.getItem("ennustusRaudtee");
    this.majandusEnnustus = localStorage.getItem("ennustusMajandus");
  }

  hinnangElujoule: string;

  annaHinnangElujoule() {

    this.hinnangElujoule = "laheda elujõulisusega"
    //this.elujouEnnustus2 = localStorage.getItem("ennustusElujoud");
    //this.elujouEnnustus3 = "0";

    if (this.elujouEnnustus == '1') {
      this.hinnangElujoule = "ettevõte on kõrge elujõulisusega, suudab suuremaid kulusid taluda."
    }
    else if (this.elujouEnnustus == '0') {
      this.hinnangElujoule = "ettevõte on madala elujõulisusega, ei suuda kulude tõusu taluda."
    }
    return this.hinnangElujoule;
  }

  hinnangElastsusele: string;

  annaHinnangElastsusele() {
    this.hinnangElastsusele = "vinge elastsus"

    if (this.elastsusEnnustus == '1') {
      this.hinnangElastsusele = "turg on kõrge elastsusega, kaubad võivad raudteelt ära minna"
    }

    else if (this.elastsusEnnustus == '0') {
      this.hinnangElastsusele = "turg on madala elastsusega, kaubad pigem ei lähe raudteelt ära"
    }
    return this.hinnangElastsusele;

  }
  
  hinnangRaudteele: string;

  annaHinnangRaudteele() {

    this.hinnangRaudteele = "lahe raudtee"
    //this.elujouEnnustus2 = localStorage.getItem("ennustusElujoud");
    //this.elujouEnnustus3 = "0";

    if (this.raudteeEnnustus == '1') {
      this.hinnangRaudteele = "Raudtee hooldus on kallis, kui kasutustasu mõttes olla kahevahel, kas tõsta või mitte, siis tuleb tõsta."
    }
    else if (this.raudteeEnnustus == '0') {
      this.hinnangRaudteele = "Raudtee hooldus on odav, kui kasutustasu mõttes olla kahevahel, kas tõsta või mitte, siis võib ka mitte tõsta."
    }
    return this.hinnangRaudteele;
  }

  hinnangMajandusele: string;

  annaHinnangMajandusele() {

    this.hinnangMajandusele = "lahe raudtee"
    //this.elujouEnnustus2 = localStorage.getItem("ennustusElujoud");
    //this.elujouEnnustus3 = "0";

    if (this.majandusEnnustus == '1') {
      this.hinnangMajandusele = "Majandusega on hästi ja läheb järjest paremini, see toetab kasutustasu tõstmist."
    }
    else if (this.majandusEnnustus == '0') {
      this.hinnangMajandusele = "Majandusega on pisut kehvad lood, kui muud asjaolud on kahevahel, siis pigem tasu mitte tõsta."
    }
    return this.hinnangMajandusele;
  }


  soovitusekene: string;

  teeSoovitus() {
    this.soovitusekene = "mõtle ise";

    if (this.elastsusEnnustus == '1' && this.elujouEnnustus == '0') {
      this.soovitusekene = "Kasutustasusid tõsta ei ole võimalik."
      this.varvikood = 2;
    }

    else if (this.elastsusEnnustus == '0' && this.elujouEnnustus == '1') {
      this.soovitusekene = "Kasutustasusid võib tõsta."
      
    }
    else if (this.elastsusEnnustus == '0' && this.elujouEnnustus == '0') {
      this.soovitusekene = "Kasutustasusid võib tõsta võib olla ja ettevaatlikult, vaata kolmandaid asjaolusid."
    }
    else if (this.elastsusEnnustus == '1' && this.elujouEnnustus == '1') {
      this.soovitusekene = "Kasutustasusid võib tõsta võib olla ja ettevaatlikult, vaata kolmandaid asjaolusid."
    }
    return this.soovitusekene;

  }

  lapkok() {
    this.soovitusekene = "mõtle ise";

    if (this.elastsusEnnustus == '1' && this.elujouEnnustus == '0') {
      //this.soovitusekene = "Kasutustasusid tõsta ei ole võimalik."
      this.varvikood = 2;
    }

    else if (this.elastsusEnnustus == '0' && this.elujouEnnustus == '1') {
      //this.soovitusekene = "Kasutustasusid võib tõsta."
      this.varvikood = 1;
    }
    else if (this.elastsusEnnustus == '0' && this.elujouEnnustus == '0') {
      //this.soovitusekene = "Kasutustasusid võib tõsta võib olla ja ettevaatlikult, vaata kolmandaid asjaolusid."
      this.varvikood = 3;
    }
    else if (this.elastsusEnnustus == '1' && this.elujouEnnustus == '1') {
      //this.soovitusekene = "Kasutustasusid võib tõsta võib olla ja ettevaatlikult, vaata kolmandaid asjaolusid."
      this.varvikood = 3;
    }
    return this.varvikood;

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
   
  }

  koostisArray: any = [];
  oigeSector: any;

  koostis() {
    for (let key in koostis) {
      if (koostis.hasOwnProperty(key)) {
        this.koostisArray.push(koostis[key]);
      }
    }
        this.oigeSector= this.koostisArray.filter(e=>{
        return e.sektorNo === this.sectorNo;
      
    })
    
  }

  ngOnInit() {

    this.keerukam();
    this.koostis();

  }


}