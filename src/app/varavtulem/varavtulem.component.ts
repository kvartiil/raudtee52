import { Component } from '@angular/core';

@Component({
  selector: 'varavtulem',
  templateUrl: './varavtulem.component.html',
  styleUrls: ['./varavtulem.component.scss']
}) 
export class VaravtulemComponent {
  currentIndex;

  sections = [
    {
      name: 'Mudelite töö',
      content: 'x',
    },
    {
      name: 'Koondindikaator',
      content:
        'Kratt on tehisintellekti tehnoloogial põhinev praktiline rakearvutiprogramm. See on küll võimeline suure hulga informatsiooni abil prognoosima teie ettevõtte elujõulisust, kuid sel puudub võime näha tulevikku ning arvestada kõiki asjaolusid, sündmusi ja ettevõtte tegutsemise konteksti. <b>Arvestada tuleb teatava veamääraga.</b>',
      }, 
    {
      name: 'Mudelite kasutamise algoritm',
      content:
        'Ettevõtte elujõulisuse indeksi metoodika aluseks on üldtunnustatud majandusanalüütika näitajad ja põhimõtted. Peamiselt kasutatakse analüüsil finantssuhtarve. Kratt hindab viit tüüpi elujõulisust: maksevõimet, efektiivsust, finantsvõimendust, tasuvust ja tööjõukulude tootlikkust. ',
    }
    
    
  ];




  showComponent0: boolean = false;
  showComponent1: boolean = false;
  showComponent2: boolean = false;
  showComponent3: boolean = false;
  showComponent4: boolean = false;
  showComponent5: boolean = false;
  showComponent6: boolean = false;
  showComponent7: boolean = false;
  showComponent8: boolean = false;
  showComponent9: boolean = false;
  showComponent10: boolean = false;
  showComponent11a: boolean = false;
  showComponent11: boolean = false;
  showComponent12: boolean = false;


  
  expand(index) {
    if(this.currentIndex === index) {
      this.currentIndex = null;
      return;
    }
    this.currentIndex = index;
    //alert(this.currentIndex);
    
    if ( this.currentIndex === 0) {
      this.showComponent0 = true;
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11a = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
    }
    else if ( this.currentIndex === 1) {
      this.showComponent0 = false;
      this.showComponent1 = true;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11a = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
    }
    else if ( this.currentIndex === 2) {
      this.showComponent0 = false;
      this.showComponent1 = false;
      this.showComponent2 = true;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11a = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
    }
    else if ( this.currentIndex === 3) {
      this.showComponent0 = false;
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = true;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11a = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
    }
    else if ( this.currentIndex === 4) {
      this.showComponent0 = false;
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = true;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11a = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
    }
    else if ( this.currentIndex === 5) {
      this.showComponent0 = false;
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = true;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11a = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
    }
    else if ( this.currentIndex === 6) {
      this.showComponent0 = false;
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = true;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11a = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
    }
    else if ( this.currentIndex === 7) {
      this.showComponent0 = false;
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = true;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11a = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
    }
    else if ( this.currentIndex === 8) {
      this.showComponent0 = false;
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = true;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11a = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
    }
    else if ( this.currentIndex === 9) {
      this.showComponent0 = false;
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = true;
      this.showComponent10 = false;
      this.showComponent11a = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
    }
    else if ( this.currentIndex === 10) {
      this.showComponent0 = false;
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = true;
      this.showComponent11a = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
    }
    else if ( this.currentIndex === 11) {
      this.showComponent0 = false;
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11a = true;
      this.showComponent11 = false;
      this.showComponent12 = false;
    }
    else if ( this.currentIndex === 12) {
      this.showComponent0 = false;
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11a = false;
      this.showComponent11 = true;
      this.showComponent12 = false;
    }
    else if ( this.currentIndex === 13) {
      this.showComponent0 = false;
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11a = false;
      this.showComponent11 = false;
      this.showComponent12 = true;
    }
  }

}