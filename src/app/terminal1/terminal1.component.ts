import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'terminal1-component',
  templateUrl: './terminal1.component.html',
  styleUrls: ['./terminal1.component.scss']
})
export class Terminal1Component {

  tekst1 = 'Ettevõtte efektiivsus on teiste ettevõtetega võrreldes ';
  tekst2 = '. See tähendab, et võrreldes teiste ettevõtetega kasutatakse varadesse investeeritud vahendeid ';
  tekst3 = '. Efektiivsust aitab suurendada see, kui müügitulu kasvab rohkem (või kahaneb vähem) kui keskmine vara, lühiajalised nõuded ja/või varud.';

  muutuja1 = '';
  muutuja2 = '';
  
  koondEfektTekst = '';

  key: string = 'efektMadal';
  localValue: string = '';
  madalString: string;
  madalNumber: number;

getEfektMadal() {
    this.madalString = localStorage.getItem(this.key);
    this.madalNumber=Number(this.madalString);
    return this.madalNumber;
  }

  key2: string = 'efektKeskmine';
  keskmineString: string;
  keskmineNumber: number;

  getEfektKeskmine() {
    this.keskmineString = localStorage.getItem(this.key2);
    this.keskmineNumber=Number(this.keskmineString);
    return this.keskmineNumber;
  }

  key3: string = 'efektKorge';
  korgeString: string;
  korgeNumber: number;

  getEfektKorge() {
    this.korgeString = localStorage.getItem(this.key3);
    this.korgeNumber=Number(this.korgeString);
    return this.korgeNumber;
  }

  efektiivsusTekst() {
    this.getEfektMadal();
    this.getEfektKeskmine();
    this.getEfektKorge();

    if (this.madalNumber>this.keskmineNumber && this.madalNumber>this.korgeNumber) {
      this.muutuja1 = 'väiksem';       
      this.muutuja2 = 'ebaefektiivsemalt';
    }

    else if (this.keskmineNumber>this.madalNumber && this.keskmineNumber>this.korgeNumber) {
      this.muutuja1='sama suur';
      this.muutuja2 = 'sama efektiivselt';
    }

    else if (this.korgeNumber>this.madalNumber && this.korgeNumber>this.keskmineNumber) {
      this.muutuja1='suurem';
      this.muutuja2 = 'efektiivsemalt';
    }

    else if (this.keskmineNumber===this.madalNumber && this.keskmineNumber===this.korgeNumber) {
      this.muutuja1='sama suur';
      this.muutuja2 = 'sama efektiivselt';
    }

    
  this.koondEfektTekst = this.tekst1+this.muutuja1+this.tekst2+this.muutuja2+this.tekst3;

  localStorage.setItem("efektTekst", this.koondEfektTekst);
  
  return this.koondEfektTekst;
}
n = 1;
n2:number;
myFunctionOne(){
  this.n2=this.n+1;
  console.log('Kaivitas',this.n2);
  //this.n=this.n+1;
  //alert("kaivitas");
  return 'called'
}

}