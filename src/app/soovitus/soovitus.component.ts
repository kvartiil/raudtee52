import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'soovitus-component',
  templateUrl: './soovitus.component.html',
  styleUrls: ['./soovitus.component.scss']
})
export class SoovitusComponent {

    
  koondSoovitus = '';
  koondSoovitusm = '';
  koondSoovitusv = '';
  koondSoovitust = '';
  koondSoovitusj = '';
  muutujaBlanco = ' ';
  muutujaEfekt = '';
  muutujaMaks = 'maksuke';
  muutujaVoim = 'voimuke';
  muutujaTasuv = 'tasuvuseke';
  muutujaToojoud = 'toojouke';

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


  soovitusTekst() {
    this.getEfektMadal();
    this.getEfektKeskmine();
    this.getEfektKorge();
    
    if (this.madalNumber>this.keskmineNumber && this.madalNumber>this.korgeNumber) {
      this.muutujaEfekt = 'Efektiivsus on väike, seega on oluline müügitulu kasvatamine varade suhtes. Praegu kasutatakse varadesse investeeritud vahendeid ebaefektiivselt.';       
    }

    else if (this.keskmineNumber>this.madalNumber && this.keskmineNumber>this.korgeNumber) {
      this.muutujaEfekt='Efektiivsus on keskpärane, abi oleks sellest, kui müügitulu varade suhtes kasvab, kuid see ei ole ilmtingimata vajalik suund.';
      //this.muutuja2 = 'sama efektiivselt';
    }

    else if (this.korgeNumber>this.madalNumber && this.korgeNumber>this.keskmineNumber) {
      this.muutujaEfekt='Efektiivsusega on hetkehinnangu kohaselt kõik korras, see tähendab, et varadesse investeeritud vahendeid kasutatakse efektiivselt.';
      //this.muutuja2 = 'efektiivsemalt';
    }

    else if (this.keskmineNumber===this.madalNumber && this.keskmineNumber===this.korgeNumber) {
      this.muutujaEfekt='Efektiivsus on keskpärane, abi oleks sellest, kui müügitulu varade suhtes kasvab, kuid see ei ole ilmtingimata vajalik suund.';
      //this.muutuja2 = 'sama efektiivselt';
    }

   
    
  this.koondSoovitus = this.muutujaEfekt;
  
  return this.koondSoovitus;
}


  keym: string = 'makseMadal';
  localValuem: string = '';
  madalStringm: string;
  madalNumberm: number;

  getMakseMadal() {
    this.madalStringm = localStorage.getItem(this.keym);
    this.madalNumberm=Number(this.madalStringm);
    return this.madalNumberm;
  }

  key2m: string = 'makseKeskmine';
  keskmineStringm: string;
  keskmineNumberm: number;

  getMakseKeskmine() {
    this.keskmineStringm = localStorage.getItem(this.key2m);
    this.keskmineNumberm=Number(this.keskmineStringm);
    return this.keskmineNumberm;
  }

  key3m: string = 'makseKorge';
  korgeStringm: string;
  korgeNumberm: number;

  getMakseKorge() {
    this.korgeStringm = localStorage.getItem(this.key3m);
    this.korgeNumberm=Number(this.korgeStringm);
    return this.korgeNumberm;
  }

  soovitusTekstm () {

    this.getMakseMadal();
    this.getMakseKeskmine();
    this.getMakseKorge();

    if (this.madalNumberm>this.keskmineNumberm && this.madalNumberm>this.korgeNumberm) {
      this.muutujaMaks = 'Maksevõime on väike, ettevõttel ei ole piisavalt raha võlgnevuste tasumiseks. Oluline oleks likviidsete varade suurendamine lühiajaliste kohustuste suhtes.';       
    }

    else if (this.keskmineNumberm>this.madalNumberm && this.keskmineNumberm>this.korgeNumberm) {
      this.muutujaMaks='Maksevõime on keskpärane, ettevõte tuleb oma võlgnevuste tasumisega toime, kuid tuleb mõelda likviidsete varade suurendamisele.';
      //this.muutuja2 = 'sama efektiivselt';
    }

    else if (this.korgeNumberm>this.madalNumberm && this.korgeNumberm>this.keskmineNumberm) {
      this.muutujaMaks='Maksevõimega ettevõttel probleeme ei ole, lühiajalise kohustuste tasumisega tullakse edukalt toime.  Maksevõime osas muudatusi ette võtta ei ole vaja.';
      //this.muutuja2 = 'efektiivsemalt';
    }

    else if (this.keskmineNumberm===this.madalNumberm && this.keskmineNumberm===this.korgeNumberm) {
      this.muutujaMaks='Maksevõime on keskpärane, ettevõte tuleb oma võlgnevuste tasumisega toime, kuid tuleb mõelda likviidsete varade suurendamisele.';
      //this.muutuja2 = 'sama efektiivselt';
    }

    this.koondSoovitusm = this.muutujaBlanco+this.muutujaMaks;
  
    return this.koondSoovitusm;

  }

  keyf: string = 'voimMadal';
  localValuef: string = '';
  madalStringf: string;
  madalNumberf: number;

  getVoimMadal() {
    this.madalStringf = localStorage.getItem(this.keyf);
    this.madalNumberf=Number(this.madalStringf);
    return this.madalNumberf;
  }

  key2f: string = 'voimKeskmine';
  keskmineStringf: string;
  keskmineNumberf: number;

  getVoimKeskmine() {
    this.keskmineStringf = localStorage.getItem(this.key2f);
    this.keskmineNumberf=Number(this.keskmineStringf);
    return this.keskmineNumberf;
  }

  key3f: string = 'voimKorge';
  korgeStringf: string;
  korgeNumberf: number;

  getVoimKorge() {
    this.korgeStringf = localStorage.getItem(this.key3f);
    this.korgeNumberf=Number(this.korgeStringf);
    return this.korgeNumberf;
  }

  finantsvoimendusTekst() {
    this.getVoimMadal();
    this.getVoimKeskmine();
    this.getVoimKorge();

    if (this.madalNumberf>this.keskmineNumberf && this.madalNumberf>this.korgeNumberf) {
      this.muutujaVoim = 'Ettevõtte kohustuste hulk on suur, võib olla kriitiliselt suur, mis tähendab seda, et võib tekkida probleeme kohustuste katmisel. Oleks mõistlik mõelda sellele, kuidas tekitada juurde rahalisi vahendeid ja üldist likviidsust selleks, et vajadusel tuleks oma kohustustega toime.';       
      //this.muutuja2 = 'ohustatud';
    }

    else if (this.keskmineNumberf>this.madalNumberf && this.keskmineNumberf>this.korgeNumberf) {
      this.muutujaVoim='Ettevõtte kohustuste hulk on keskpärane, kuid puudub otsene oht, et ettevõte ei tule oma kohustuste täitmisega toime. Samas täiendava laenu või muude rahaliste kohustuste võtmisel tuleb olla väga ettevaatlik.';
      //this.muutuja2 = 'keskpärane';
    }

    else if (this.korgeNumberf>this.madalNumberf && this.korgeNumberf>this.keskmineNumberf) {
      this.muutujaVoim='Ettevõttel on vähe kohustusi, mis tähendab, et ettevõte saab tulla edukalt toime oma kohustuste katmisega. Olemas on reserv selleks, et ettevõte saaks kasutada täiendavat finantsvõimendust äritegevuse võimendamiseks.';
      //this.muutuja2 = 'tagatud';
    }

    else if (this.keskmineNumberf===this.madalNumberf && this.keskmineNumberf===this.korgeNumberf) {
      this.muutujaVoim='Ettevõtte kohustuste hulk on keskpärane, kuid puudub otsene oht, et ettevõte ei tule oma kohustuste täitmisega toime. Samas täiendava laenu või muude rahaliste kohustuste võtmisel tuleb olla väga ettevaatlik.';
      //this.muutuja2 = 'keskpärane';
    }
    

    
  this.koondSoovitusv = this.muutujaBlanco+this.muutujaVoim;
  
  return this.koondSoovitusv;
}

keyt: string = 'tasuvMadal';
  localValuet: string = '';
  madalStringt: string;
  madalNumbert: number;

  getTasuvMadal() {
    this.madalStringt = localStorage.getItem(this.keyt);
    this.madalNumbert=Number(this.madalStringt);
    return this.madalNumbert;
  }

  key2t: string = 'tasuvKeskmine';
  keskmineStringt: string;
  keskmineNumbert: number;

  getTasuvKeskmine() {
    this.keskmineStringt = localStorage.getItem(this.key2t);
    this.keskmineNumbert=Number(this.keskmineStringt);
    return this.keskmineNumbert;
  }

  key3t: string = 'tasuvKorge';
  korgeStringt: string;
  korgeNumbert: number;

  getTasuvKorge() {
    this.korgeStringt = localStorage.getItem(this.key3t);
    this.korgeNumbert=Number(this.korgeStringt);
    return this.korgeNumbert;
  }

  tasuvusTekst() {
    this.getTasuvMadal();
    this.getTasuvKeskmine();
    this.getTasuvKorge();

    if (this.madalNumbert>this.keskmineNumbert && this.madalNumbert>this.korgeNumbert) {
      this.muutujaTasuv = 'Ettevõtte tasuvus on probleemne, s.t. ettevõttel ei ole piisavat käivet selleks, et varadesse investeeritud rahalised vahendid tasuksid ennast ära. Oluline on mõelda käibe suurendamise võimalustele või ettevõtte varade suuruse vähendamisele.';       
      //this.muutuja2 = 'väike';
      //this.muutuja3 = 'väike';
    }

    else if (this.keskmineNumbert>this.madalNumbert && this.keskmineNumbert>this.korgeNumbert) {
      this.muutujaTasuv='Ettevõtte tasuvus on keskpärane, käive on turul püsimist ja varade rahalist taastootmist võimaldav, kuid samas oleks hea mõelda täiendava võimaliku turu peale.';
      //this.muutuja2 = 'keskpärane';
      //this.muutuja3 = 'keskpärane';
    }

    else if (this.korgeNumbert>this.madalNumbert && this.korgeNumbert>this.keskmineNumbert) {
      this.muutujaTasuv='Ettevõtte tasuvus on heal tasemel, s.t. et ettevõte suudab turult/klientidelt piisaval määral rahalisi vahendeid tekitada ja seega on ettevõte käive piisav arvestades ettevõtte tegevusvahenditesse paigutatud rahalisi vahendeid.';
      //this.muutuja2 = 'suur';
      //this.muutuja3 = 'suur';
    }

    else if (this.keskmineNumbert===this.madalNumbert && this.keskmineNumbert===this.korgeNumbert) {
      this.muutujaTasuv='Ettevõtte tasuvus on keskpärane, käive on turul püsimist ja varade rahalist taastootmist võimaldav, kuid samas oleks hea mõelda täiendava võimaliku turu peale.';
      //this.muutuja2 = 'keskpärane';
      //this.muutuja3 = 'keskpärane';
    }
    

    
  this.koondSoovitust = this.muutujaBlanco+this.muutujaTasuv;
  
  return this.koondSoovitust;
}

keyj: string = 'toojoudMadal';
  localValuej: string = '';
  madalStringj: string;
  madalNumberj: number;

  getToojoudMadal() {
    this.madalStringj = localStorage.getItem(this.keyj);
    this.madalNumberj=Number(this.madalStringj);
    return this.madalNumberj;
  }

  key2j: string = 'toojoudKeskmine';
  keskmineStringj: string;
  keskmineNumberj: number;

  getToojoudKeskmine() {
    this.keskmineStringj = localStorage.getItem(this.key2j);
    this.keskmineNumberj=Number(this.keskmineStringj);
    return this.keskmineNumberj;
  }

  key3j: string = 'toojoudKorge';
  korgeStringj: string;
  korgeNumberj: number;

  getToojoudKorge() {
    this.korgeStringj = localStorage.getItem(this.key3j);
    this.korgeNumberj=Number(this.korgeStringj);
    return this.korgeNumberj;
  }

  toojoudTekst() {
    this.getToojoudMadal();
    this.getToojoudKeskmine();
    this.getToojoudKorge();

    if (this.madalNumberj>this.keskmineNumberj && this.madalNumberj>this.korgeNumberj) {
      this.muutujaToojoud = 'Ettevõtte tööjõu tootlikkus on madal, mis tähendab seda, et palgad on võrreldes käibega liiga suured. Palgataseme määrab üldjuhul turg, seega on oluline kriitilise pilguga üle vaadata ärimudeli olemus, kas käesolevates tööturu tingimustes saab selliselt jätkata.';       
    //  this.muutuja2 = 'väike';
    //  this.muutuja3 = 'väike';
    }

    else if (this.keskmineNumberj>this.madalNumberj && this.keskmineNumberj>this.korgeNumberj) {
      this.muutujaToojoud='Ettevõtte tööjõu tootlikkus on keskmisel tasemel, mis ühelt poolt tähendab teatud palgasurvet ettevõtte tegevusele, kuid teiselt poolt on ka palgatõusuks teatavat ruumi.  On teatud rahalisi võimalusi heade inimeste tööl hoidmiseks.';
    //  this.muutuja2 = 'keskpärane';
    //  this.muutuja3 = 'keskpärane';
    }

    else if (this.korgeNumberj>this.madalNumberj && this.korgeNumberj>this.keskmineNumberj) {
      this.muutujaToojoud='Ettevõtte tööjõu tootlikkus on suur, ettevõttel on ruumi palkade tõusuks ja tööjõud jääb endiselt tootlikuks ja konkurentsivõimeliseks. Selles olukorras võib töötada selle nimel, et turult võimalusel täiendavat talenti kaasata.';
    //  this.muutuja2 = 'suur';
    //  this.muutuja3 = 'suur';
    }

    else if (this.keskmineNumberj===this.madalNumberj && this.keskmineNumberj===this.korgeNumberj) {
      this.muutujaToojoud='Ettevõtte tööjõu tootlikkus on keskmisel tasemel, mis ühelt poolt tähendab teatud palgasurvet ettevõtte tegevusele, kuid teiselt poolt on ka palgatõusuks teatavat ruumi.  On teatud rahalisi võimalusi heade inimeste tööl hoidmiseks.';
    //  this.muutuja2 = 'keskpärane';
    //  this.muutuja3 = 'keskpärane';
    }
    

    
  this.koondSoovitusj = this.muutujaBlanco+this.muutujaToojoud;
  //+this.muutuja2+this.tekst3+this.muutuja3+this.tekst4;
  
  return this.koondSoovitusj;
}









}