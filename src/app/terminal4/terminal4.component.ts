import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'terminal4-component',
  templateUrl: './terminal4.component.html',
  styleUrls: ['./terminal4.component.scss']
})
export class Terminal4Component {
  
  tekst1 = 'Ettevõtte tasuvus on teiste ettevõtetega võrreldes ';
  tekst2 = '. Tasuvuse suhtarvud näitavad ettevõtte rentaablust ehk seda, kui efektiivselt suudab ettevõte oma vara kasutada ning kulusid kontrolli all hoida, et tagada oodatav tulusus. Ettevõtte käibe ärirentaablus on ';
  tekst3 = ' ja ettevõttesse investeeritud varade puhasrentaablus ';
  tekst4 = '. Tasuvuse suurendamiseks tuleb teatud müügitulu ja/või varade mahu juures luua suhteliselt enam kasumit.';

  muutuja1 = '';
  muutuja2 = '';
  muutuja3 = '';
  
  koondEfektTekst = '';

  key: string = 'tasuvMadal';
  localValue: string = '';
  madalString: string;
  madalNumber: number;

  getTasuvMadal() {
    this.madalString = localStorage.getItem(this.key);
    this.madalNumber=Number(this.madalString);
    return this.madalNumber;
  }

  key2: string = 'tasuvKeskmine';
  keskmineString: string;
  keskmineNumber: number;

  getTasuvKeskmine() {
    this.keskmineString = localStorage.getItem(this.key2);
    this.keskmineNumber=Number(this.keskmineString);
    return this.keskmineNumber;
  }

  key3: string = 'tasuvKorge';
  korgeString: string;
  korgeNumber: number;

  getTasuvKorge() {
    this.korgeString = localStorage.getItem(this.key3);
    this.korgeNumber=Number(this.korgeString);
    return this.korgeNumber;
  }

  tasuvusTekst() {
    this.getTasuvMadal();
    this.getTasuvKeskmine();
    this.getTasuvKorge();

    if (this.madalNumber>this.keskmineNumber && this.madalNumber>this.korgeNumber) {
      this.muutuja1 = 'väiksem';       
      this.muutuja2 = 'väike';
      this.muutuja3 = 'väike';
    }

    else if (this.keskmineNumber>this.madalNumber && this.keskmineNumber>this.korgeNumber) {
      this.muutuja1='sama suur';
      this.muutuja2 = 'keskpärane';
      this.muutuja3 = 'keskpärane';
    }

    else if (this.korgeNumber>this.madalNumber && this.korgeNumber>this.keskmineNumber) {
      this.muutuja1='suurem';
      this.muutuja2 = 'suur';
      this.muutuja3 = 'suur';
    }

    else if (this.keskmineNumber===this.madalNumber && this.keskmineNumber===this.korgeNumber) {
      this.muutuja1='sama suur';
      this.muutuja2 = 'keskpärane';
      this.muutuja3 = 'keskpärane';
    }
    

    
  this.koondEfektTekst = this.tekst1+this.muutuja1+this.tekst2+this.muutuja2+this.tekst3+this.muutuja3+this.tekst4;
  
  localStorage.setItem("tasuvusTekst", this.koondEfektTekst);

  return this.koondEfektTekst;
}





}