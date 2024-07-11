import { Component } from '@angular/core';

//declare var d3: any;

@Component({
  selector: 'koondind7-component',
  templateUrl: './koondind7.component.html',
  styleUrls: ['./koondind7.component.scss']
})
export class Koondind7Component {

  //value = 0.3;
  thick = 40;
  label = "Elujõud"
  gaugeAppendText=""
  max=1;
  min=0;
  gaugeDuration = 1000;
  gaugeAnimate = false;
  thresholdConfig = {
  '0': {color: '#EFB2B2'},
  '0.34': {color: '#FFE1A0'},
  '0.68': {color: '#ACCFBA'}
};
markers = { "0.5": { color: "#555", type: "triangle", size: 8, label: "Keskmine", font: "14px arial" }, "0.22": { color: "#555", type: "triangle", size: 8, label: "Madal", font: "14px arial" }, "0.78": { color: "#555", type: "triangle", size: 8, label: "Kõrge", font: "14px arial" } };

madalString: string;
key: string = 'efektMadal';
localValue: string = '';
madalNumber: number;

getEfektMadal() {
  this.madalString = localStorage.getItem(this.key);
  this.madalNumber=Number(this.madalString);
  return this.madalNumber;
}

value = this.getEfektMadal();

key3: string = 'efektKorge';
  korgeString: string;
  korgeNumber: number;

  getEfektKorge() {
    this.korgeString = localStorage.getItem(this.key3);
    this.korgeNumber=Number(this.korgeString);
    return this.korgeNumber;
  }

  key3m: string = 'makseKorge';
  korgeStringm: string;
  korgeNumberm: number;

  getMakseKorge() {
    this.korgeStringm = localStorage.getItem(this.key3m);
    this.korgeNumberm=Number(this.korgeStringm);
    return this.korgeNumberm;
  }  

  key3v: string = 'voimKorge';
  korgeStringv: string;
  korgeNumberv: number;

  getVoimKorge() {
    this.korgeStringv = localStorage.getItem(this.key3v);
    this.korgeNumberv=Number(this.korgeStringv);
    return this.korgeNumberv;
  }

  key3t: string = 'tasuvKorge';
  korgeStringt: string;
  korgeNumbert: number;

  getTasuvKorge() {
    this.korgeStringt = localStorage.getItem(this.key3t);
    this.korgeNumbert=Number(this.korgeStringt);
    return this.korgeNumbert;
  }

  key3j: string = 'toojoudKorge';
  korgeStringj: string;
  korgeNumberj: any;
  //vahenumber: any;

  getToojoudKorge() {
    this.korgeStringj = localStorage.getItem(this.key3j);
    this.korgeNumberj=Number(this.korgeStringj);
    this.korgeNumberj=this.korgeNumberj;
    //this.vahenumber = this.korgeNumberj.toFixed(2); 
    return this.korgeNumberj;
  }  

ww = 33.3435.toFixed(2);
www = (Math.round(0.2498347 * 100) / 100).toFixed(2);


constructor(){


  setInterval (() => {
          //this.value = Math.floor((Math.random() * 2000) + 1);
          this.value = (this.getEfektKorge()+this.getMakseKorge()+this.getVoimKorge()+this.getTasuvKorge()+this.getToojoudKorge())/5;
    }, 7000);
}


}