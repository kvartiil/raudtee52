import { Component } from '@angular/core';

@Component({
  selector: 'varav4',
  templateUrl: './varav4.component.html',
  styleUrls: ['./varav4.component.scss']
})
export class Varav4Component {
  currentIndex;

  sections = [
    {
      name: 'Mis on prototüüp?',
      content:
        'Prototüüp on varajane versioon tootest, mis kirjeldab, annab visiooni sellest, milline võiks toode välja näha. Prototüüp ei ole toode, mis annab lahenduse, küll aga selgitab, millised võiksid olla võimalused lahenduse saamiseks päristootest ning millised on võimalused (raskuskohad) päris tooteni jõudmisel.',
      }, 
    {
      name: 'Mida meie prototüüp teeb?',
      content:
        'Käesolev prototüüp näitab, kuidas põhitoode (kui see välja arendatakse) võiks töötada, milliseid andmeid, masinõppe mudeleid kasutada ning millisel viisil algoritmiselt jõuda õige tulemini kasutustasu määramise kontekstis.',
    },
    {
      name: 'Milliseid andmeid prototüüp kasutab?',
      content:
        'Prototüüp ei kasuta reaalseid andmeid ega peagi prototüübi definitsioonist tulenevalt seda tegema. Prototüübi roll on näidata, milliseid andmeid oleks vaja selleks, et pärissüsteem tööle hakkaks.'         
    },
    {
      name: 'Kas töös pärisandmeid ei kasutatudki?',
      content:
        'Pärisandmeid kasutati töö analüütilises osas, kus arvutati välja ettevõtete elujõulisuse koefitsiente, mida saab muuhulgas võtta aluseks kasutustasu määramisel.'
    },
    {
      name: 'Kui kõiki prototüübi andmeid pole?',
      content: 
        'Hiljem prototüübi lahendust reaalses elus realiseerides võib tekkida olukord, kus kõiki andmeid, mida prototüüp pakub välja, ei ole võimalik hankida. Polegi vaja. Osasid andmeallikaid on võimalik asendada teistega ja kohati on võrreldavat tulemust võimalik saada ka vähemate andmeallikate pealt.',
    },
    {
      name: 'Kuidas prototüüp arvamust avaldab?',
      content:
        'Prototüüp esitab hüpoteese, kuidas üks või teine asi võiks toimida. Hüpoteeside aluseks on mingid reaalsed loogikad, kogemused või seosed, kuid täiel määral antud toote kontekstis ei ole neid kontrollitud.',
    },
    
    {
      name: 'Kust saab täiendavat tausta prototüübi kohta?',
      content:
        'On palju variante prototüübi kohta üldise taustainfo lugemiseks, näitteks: https://www.techtarget.com/searcherp/definition/prototype; https://www.techopedia.com/definition/678/prototype; https://sparkbusinessworks.com/blog/prototyping-in-software-development/',
    }
  ];





  showComponent1: boolean = false;
  showComponent2: boolean = false;
  showComponent3: boolean = false;
  
  expand(index) {
    if(this.currentIndex === index) {
      this.currentIndex = null;
      return;
    }
    this.currentIndex = index;
    //alert(this.currentIndex);
    
    if ( this.currentIndex === 0) {
      this.showComponent1 = true;
      this.showComponent2 = false;
      this.showComponent3 = false;
    }
    else if ( this.currentIndex === 1) {
      this.showComponent1 = false;
      this.showComponent2 = true;
      this.showComponent3 = false;
    }
    else if ( this.currentIndex === 2) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = true;
    }
  }

}