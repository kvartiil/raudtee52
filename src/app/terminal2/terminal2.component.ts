import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'terminal2-component',
  templateUrl: './terminal2.component.html',
  styleUrls: ['./terminal2.component.scss']
})
export class Terminal2Component {

  tekst1 = 'Ettevõtte maksevõime on teiste ettevõtetega võrreldes ';
  tekst2 = '. Lühiajalise maksevõime ehk likviidsuse suhtarvud näitavad ettevõtte võimet katta oma lühiajalisi kohustusi. Teisisõnu seda, kas ettevõttel on piisavalt raha võlgnevuste tasumiseks. Maksevõimet aitab suurendada see, kui lühiajalisi kohustusi vähendatakse rohkem (või suurendatakse vähem) kui käibevara, sh raha, likviidseid väärtpabereid ja/või laekumata arveid.';
//  tekst3 = '. Efektiivsust aitab suurendada see, kui müügitulu kasvab rohkem (või kahaneb vähem) kui keskmine vara, lühiajalised nõuded ja/või varud.';

  muutuja1 = '';
//  muutuja2 = '';
  
  koondEfektTekst = '';



  key: string = 'makseMadal';
  localValue: string = '';
  madalString: string;
  madalNumber: number;

getMakseMadal() {
    this.madalString = localStorage.getItem(this.key);
    this.madalNumber=Number(this.madalString);
    return this.madalNumber;
  }

  key2: string = 'makseKeskmine';
  keskmineString: string;
  keskmineNumber: number;

  getMakseKeskmine() {
    this.keskmineString = localStorage.getItem(this.key2);
    this.keskmineNumber=Number(this.keskmineString);
    return this.keskmineNumber;
  }

  key3: string = 'makseKorge';
  korgeString: string;
  korgeNumber: number;

  getMakseKorge() {
    this.korgeString = localStorage.getItem(this.key3);
    this.korgeNumber=Number(this.korgeString);
    return this.korgeNumber;
  }

  maksevoimeTekst() {
    this.getMakseMadal();
    this.getMakseKeskmine();
    this.getMakseKorge();

    if (this.madalNumber>this.keskmineNumber && this.madalNumber>this.korgeNumber) {
      this.muutuja1 = 'väiksem';       
      //this.muutuja2 = 'ebaefektiivsemalt';
    }

    else if (this.keskmineNumber>this.madalNumber && this.keskmineNumber>this.korgeNumber) {
      this.muutuja1='sama suur';
      //this.muutuja2 = 'sama efektiivselt';
    }

    else if (this.korgeNumber>this.madalNumber && this.korgeNumber>this.keskmineNumber) {
      this.muutuja1='suurem';
      //this.muutuja2 = 'efektiivsemalt';
    }

    else if (this.keskmineNumber===this.madalNumber && this.keskmineNumber===this.korgeNumber) {
      this.muutuja1='sama suur';
      //this.muutuja2 = 'sama efektiivselt';
    }

    

    
  this.koondEfektTekst = this.tekst1+this.muutuja1+this.tekst2;

  localStorage.setItem("makseTekst", this.koondEfektTekst);



  return this.koondEfektTekst;
}

}