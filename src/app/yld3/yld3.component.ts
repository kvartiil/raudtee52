import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'yld3-component',
  templateUrl: './yld3.component.html',
  styleUrls: ['./yld3.component.scss']
})
export class Yld3Component {

  //localStorage.setItem("efektVarv", '2');

  key: string = 'efektVarv';
  madalString: string;
  madalNumber: number;
  hinnangEfekt: string;

  efektVarv() {
    this.madalString = localStorage.getItem(this.key);
    this.madalNumber=Number(this.madalString);
    return this.madalNumber;
  }

  efektHinnang () {
        
    if (this.efektVarv() == 1) {
      this.hinnangEfekt = "Madal";
    }
    else if (this.efektVarv() == 2) {
      this.hinnangEfekt = "Keskmine";
    }
    else if (this.efektVarv() == 3) {
      this.hinnangEfekt = "Kõrge";
    }

    return this.hinnangEfekt;

  }

  keym: string = 'makseVarv';
  madalStringm: string;
  madalNumberm: number;
  hinnangMakse: string;

  makseVarv() {
    this.madalStringm = localStorage.getItem(this.keym);
    this.madalNumberm=Number(this.madalStringm);
    return this.madalNumberm;
  }

  makseHinnang () {
        
    if (this.makseVarv() == 1) {
      this.hinnangMakse = "Madal";
    }
    else if (this.makseVarv() == 2) {
      this.hinnangMakse = "Keskmine";
    }
    else if (this.makseVarv() == 3) {
      this.hinnangMakse = "Kõrge";
    }

    return this.hinnangMakse;

  }

  keyf: string = 'voimVarv';
  madalStringf: string;
  madalNumberf: number;
  hinnangVoim: string;

  voimVarv() {
    this.madalStringf = localStorage.getItem(this.keyf);
    this.madalNumberf=Number(this.madalStringf);
    return this.madalNumberf;
  }

  voimHinnang () {
        
    if (this.voimVarv() == 1) {
      this.hinnangVoim = "Madal";
    }
    else if (this.voimVarv() == 2) {
      this.hinnangVoim = "Keskmine";
    }
    else if (this.voimVarv() == 3) {
      this.hinnangVoim = "Kõrge";
    }

    return this.hinnangVoim;

  }

  keyt: string = 'tasuvVarv';
  madalStringt: string;
  madalNumbert: number;
  hinnangTasuv: string;

  tasuvVarv() {
    this.madalStringt = localStorage.getItem(this.keyt);
    this.madalNumbert=Number(this.madalStringt);
    return this.madalNumbert;
  }

  tasuvHinnang () {
        
    if (this.tasuvVarv() == 1) {
      this.hinnangTasuv = "Madal";
    }
    else if (this.tasuvVarv() == 2) {
      this.hinnangTasuv = "Keskmine";
    }
    else if (this.tasuvVarv() == 3) {
      this.hinnangTasuv = "Kõrge";
    }

    return this.hinnangTasuv;

  }

  keyj: string = 'toojoudVarv';
  madalStringj: string;
  madalNumberj: number;
  hinnangToojoud: string;

  toojoudVarv() {
    this.madalStringj = localStorage.getItem(this.keyj);
    this.madalNumberj=Number(this.madalStringj);
    return this.madalNumberj;
  }

  toojoudHinnang () {
        
    if (this.toojoudVarv() == 1) {
      this.hinnangToojoud = "Madal";
    }
    else if (this.toojoudVarv() == 2) {
      this.hinnangToojoud = "Keskmine";
    }
    else if (this.toojoudVarv() == 3) {
      this.hinnangToojoud = "Kõrge";
    }

    return this.hinnangToojoud;

  }

}