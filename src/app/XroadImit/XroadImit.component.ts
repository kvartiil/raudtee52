import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs'
import { xtee } from '../../xtee/xtee';

//import { products } from '../products';

@Component({
  selector: 'xroadimit-component',
  templateUrl: './XroadImit.component.html',
  styleUrls: ['./XroadImit.component.scss']
})
export class XroadImitComponent implements OnInit {
  


  numberValue = 0; //testnumber1
  numberValue2 = 0; //testnumber2
  numberValue3 = 0.40;

  //Elujõu mudel
  numberValuem = 0.60; //kohustuste osakaal
  numberValuem2 = 0.10; //raha osakaal
  numberValuem3 = 0.70; //kiirlaenude osakaal kohustustes

  //Elastsusmudel
  numberValuef = 0.90;
  numberValuef2 = 0.1;
  numberValuef3 = 0.15;

  //Raudteemudel
  numberValuet = 0.8;
  numberValuet2 = 0.9;
  numberValuet3 = 0.7;

  numberValuej = 0.9;
  numberValuej2 = 0.05;
  numberValuej3 = 0.05;
  maakond = "Harju maakond";


  constructor() { 
    //this.numberValue = xtee.model1y1;
    //this.numberValue2 = xtee.model1y2;
    //this.numberValue3 = xtee.model1y3;
    //this.numberValuem = xtee.model2y1;
    //this.numberValuem2 = xtee.model2y2;
    //this.numberValuem3 = xtee.model2y3;
    //this.numberValuef = xtee.model3y1;
    //this.numberValuef2 = xtee.model3y2;
    //this.numberValuef3 = xtee.model3y3;
    //this.numberValuet = xtee.model4y1;
    //this.numberValuet2 = xtee.model4y2;
    //this.numberValuet3 = xtee.model4y3;
    //this.numberValuej = xtee.model5y1;
    //this.numberValuej2 = xtee.model5y2;
    //this.numberValuej3 = xtee.model5y3;
  }


  name = new FormControl();
  dropdown = new FormControl();
  options = ['Harju maakond', 'Hiiu maakond', 'Ida-Viru maakond', 'Järva maakond', 'Jõgeva maakond', 'Lääne maakond', 'Lääne-Viru maakond', 'Pärnu maakond', 'Põlva maakond', 'Rapla maakond', 'Saare maakond', 'Tartu maakond', 'Valga maakond', 'Viljandi maakond', 'Võru maakond'];
  testSubscription: Subscription;

  sisendEsimene() {
    localStorage.setItem("sisendEsimene", JSON.stringify(this.numberValue));

  }

  sisendTeine() {
   localStorage.setItem("sisendTeine", JSON.stringify(this.numberValue2));

  }

  efektMadal() {
    localStorage.setItem("efektMadal", JSON.stringify(this.numberValue));
    if (this.numberValue > 0.33) {
        localStorage.setItem("efektVarv", '1');
    }
  }

  efektKeskmine() {
    localStorage.setItem("efektKeskmine", JSON.stringify(this.numberValue2));
    if (this.numberValue2 > 0.33) {
      localStorage.setItem("efektVarv", '2');
  }
  }

  efektKorge() {
    localStorage.setItem("efektKorge", JSON.stringify(this.numberValue3));
    if (this.numberValue3 > 0.33) {
      localStorage.setItem("efektVarv", '3');
  }
  }

  makseMadal() {
    localStorage.setItem("makseMadal", JSON.stringify(this.numberValuem));
    if (this.numberValuem > 0.33) {
      localStorage.setItem("makseVarv", '1');
  }
  }

  makseKeskmine() {
    localStorage.setItem("makseKeskmine", JSON.stringify(this.numberValuem2));
    if (this.numberValuem2 > 0.33) {
      localStorage.setItem("makseVarv", '2');
  }
  }

  makseKorge() {
    localStorage.setItem("makseKorge", JSON.stringify(this.numberValuem3));
    if (this.numberValuem3 > 0.33) {
      localStorage.setItem("makseVarv", '3');
  }
  }
  
  voimMadal() {
    localStorage.setItem("voimMadal", JSON.stringify(this.numberValuef));
    if (this.numberValuef > 0.33) {
      localStorage.setItem("voimVarv", '1');
  }
  }

  voimKeskmine() {
    localStorage.setItem("voimKeskmine", JSON.stringify(this.numberValuef2));
    if (this.numberValuef2 > 0.33) {
      localStorage.setItem("voimVarv", '2');
  }
  }

  voimKorge() {
    localStorage.setItem("voimKorge", JSON.stringify(this.numberValuef3));
    if (this.numberValuef3 > 0.33) {
      localStorage.setItem("voimVarv", '3');
  }
  }

  tasuvMadal() {
    localStorage.setItem("tasuvMadal", JSON.stringify(this.numberValuet));
    if (this.numberValuet > 0.33) {
      localStorage.setItem("tasuvVarv", '1');
  }
  }

  tasuvKeskmine() {
    localStorage.setItem("tasuvKeskmine", JSON.stringify(this.numberValuet2));
    if (this.numberValuet2 > 0.33) {
      localStorage.setItem("tasuvVarv", '2');
  }
  }

  tasuvKorge() {
    localStorage.setItem("tasuvKorge", JSON.stringify(this.numberValuet3));
    if (this.numberValuet3 > 0.33) {
      localStorage.setItem("tasuvVarv", '3');
  }
  }

  toojoudMadal() {
    localStorage.setItem("toojoudMadal", JSON.stringify(this.numberValuej));
    if (this.numberValuej > 0.33) {
      localStorage.setItem("toojoudVarv", '1');
  }
  }

  toojoudKeskmine() {
    localStorage.setItem("toojoudKeskmine", JSON.stringify(this.numberValuej2));
    if (this.numberValuej2 > 0.33) {
      localStorage.setItem("toojoudVarv", '2');
  }
  }

  toojoudKorge() {
    localStorage.setItem("toojoudKorge", JSON.stringify(this.numberValuej3));
    if (this.numberValuej3 > 0.33) {
      localStorage.setItem("toojoudVarv", '3');
  }
  }

  ngOnInit() {
  }
  
  laeMaakond() {
  this.testSubscription = this.dropdown.valueChanges
  // .pipe(debounceTime(100))
  //.subscribe(value => console.log(value));
  .subscribe (value => localStorage.setItem("maakond", value));
  //.subscribe (value => localStorage.setItem("maakond", JSON.stringify(value)));
  }

}