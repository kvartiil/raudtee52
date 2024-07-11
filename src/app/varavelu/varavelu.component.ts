import { Component } from '@angular/core';

@Component({
  selector: 'varavelu',
  templateUrl: './varavelu.component.html',
  styleUrls: ['./varavelu.component.scss']
})
export class VaraveluComponent {
  currentIndex;

  sections = [
    {
      name: 'Mis on ettevõtte elujõulisuse indeks?',
      content: 'x',
    },
    {
      name: 'Mis on Kratt?',
      content:
        'Kratt on tehisintellekti tehnoloogial põhinev praktiline rakendus. Kratt põhineb tarkvaralisel algoritmil, mis on õppimisvõimeline ning täidab traditsiooniliselt inimese poolt tehtavaid ülesandeid. Tegemist on kitsa tehisintellektiga (narrow AI), mis tähendab masina võimet tegutseda intelligentselt ühes kitsas valdkonnas.         Elujõulisuse krati supervõime on masinõppel põhineva prognoosi tegemise oskus, mis lisaks ettevõtte enda majandusnäitajatele arvestab teiste Eesti majanduses tegutsevate ettevõtete tegevust, finantsnäitajaid ja laiemat majanduskonteksti. Kratt on õppinud väga suurelt andmekogumilt, millele ükski ettevõte tavapäraselt ligi ei pääse. Samas tuleb arvestada, et tegu on siiski masinaga, täpsemalt on kratt oma sisult arvutiprogramm. See on küll võimeline suure hulga informatsiooni abil prognoosima teie ettevõtte elujõulisust, kuid sel puudub võime näha tulevikku ning arvestada kõiki asjaolusid, sündmusi ja ettevõtte tegutsemise konteksti. <b>Arvestada tuleb teatava veamääraga.</b>',
      }, 
    {
      name: 'Mis on elujõulisus?',
      content:
        'Ettevõtte elujõulisuse indeksi metoodika aluseks on üldtunnustatud majandusanalüütika näitajad ja põhimõtted. Peamiselt kasutatakse analüüsil finantssuhtarve. Kratt hindab viit tüüpi elujõulisust: maksevõimet, efektiivsust, finantsvõimendust, tasuvust ja tööjõukulude tootlikkust. ',
    },
    {
      name: 'Finantssuhtarvud',
      content:
        'Finantssuhtarve või ka raamatupidamise suhtarve kasutatakse ettevõtte või muu organisatsiooni üldise finantsseisundi hindamiseks ning need aitavad muuta finantsaruanded paremini loetavaks. Suhtarvud annavad kasulikku teavet nii ettevõtte juhtkonnale, omanikele kui ka võlausaldajatele. Finantsanalüüsides kasutatakse finantssuhtarve selleks, et võrrelda omavahel eri ettevõtete tugevaid ja nõrku külgi.'         
    },
    {
      name: 'Efektiivsuse suhtarvud',
      content: 
        'Efektiivsuse suhtarvud (activity ratios) näitavad, kui efektiivselt ettevõte juhib eri varadesse investeeritud vahendeid.',
    },
    {
      name: 'Maksevõime suhtarvud',
      content: 
        'Efektiivsuse suhtarvud (activity ratios) näitavad, kui efektiivselt ettevõte juhib eri varadesse investeeritud vahendeid.',
    },
    {
      name: 'Finantsvõimenduse suhtarvud',
      content:
        'Finantsvõimenduse ehk kapitali struktuuri suhtarvud (financial leverage ratios; debt ratios) näitavad, kui palju ettevõte kasutab laenukapitali ehk ettevõtte võimet tasuda lühi- ja pikaajalisi kohustusi.',
    },
    {
      name: 'Tasuvuse suhtarvud',
      content:
        'Tasuvuse suhtarvud (profitability ratios) näitavad ettevõtte rentaablust ehk seda, kui palju toodab ettevõttesse investeeritud kapital kasumit.',
    },
    {
      name: 'Tööjõu tootlikkus',
      content:
        'Tööjõukulude tootlikkus käibe alusel näitab, mitu eurot käivet saadakse ühe euro tööjõukulude kohta.',
    },
    
    
    
    {
      name: 'Tegevussektorite määramine',
      content:
        'Ettevõtluse elujõulisuse indeksi jaoks on defineeritud ettevõtete ja majandusüksuste tegevussektorid. Sektorid on moodustatud tegevusalade (EMTAK) kombineerimisel. Aluseks on sarnane põhitegevusala, mis eelduslikult tähendab sarnasust tehingute kajastuses bilanssides/kasumiaruannetes; sarnasust tehingute loogikas; sarnast majandusmudelit. Mudelite treenimiseks kasutatavate sisendandmete kokkupanekul kontrolliti iga sektori kohta, et sinna kuuluks piisav arv ettevõtteid, et masinõppemudel saaks toimida ja vajaliku tulemi tagada.',
    },
    {
      name: 'Ettevõtete grupp (Klaster)',
      content:
        'Ettevõtted on oma olemuselt, tegevustelt ja bilansinäitajatelt mitmekesised ning see muudab masinõppe keeruliseks. Seetõttu jagati ettevõtete tegevusalad (EMTAKi järgi) klasteranalüüsiga nelja homogeensemasse tegevusalade gruppi. Ettevõtted saavad elujõulisuse prognoosi võrdluses teiste sama klastri ettevõtetega. See võimaldab suurendada hinnangu täpsust ning vähendada olukordi, kus omavahel võrdlusesse satuvad äärmiselt erinevad ettevõtted. Need ettevõtted, mida ei saa seostada ühegi tegevusalade grupiga, jäävad elujõulisuse prognoosimisest kõrvale.',
    },
    {
      name: 'Kuidas prognoos kujuneb?',
      content: 'x',
    },
    {
      name: 'Prognooside kriitiline tõlgendamine',
      content:
        'Krati prognooside tõlgendamisel tuleb olla ettevaatlik.         •	Elujõulisuse indeksi rakenduse tulemuste ja soovituste puhul tuleb silmas pidada, et tegemist on masinõppemudelil põhineva prognoosiga. Tulevikuperspektiivide ennustamisel kasutatakse tehisnärvivõrke ja tulemused sõltuvad sellest, milliseid andmeid ja parameetreid on mudelite treenimisel kasutatud. Tegu on üldistusega, mis ei oska arvestada iga ettevõtte eripärasid, konteksti, erakordseid sündmusi ning majandustegevuse omapärasid, mis ei kajastu peamistes finantsnäitajates. Näiteks ei oska indeks arvesse võtta eriolukordi, nagu varade jagunemist osanike vahel.         •	Masinõppemudel suudab suure hulga minevikuinformatsiooni põhjal teatava veamääraga tulevikku prognoosida, kuid masinal puudub selgeltnägemisvõime. Kuna kratt on eelmiste aastate andmete põhjal treenitud mudelite süsteem, ei oska see arvesse võtta eelnevast olukorrast väga erinevaid arenguid, ootamatuid sündmusi ja muutusi ettevõtte tegevussektori keskkonnas. Sellisel juhul võib süsteem ettevõtte andmetest nähtuvat (ja tegelikult muutuvast makrokeskkonnast tulenevat) majandusseisu muutust tõlgendada ebakorrektselt.         •	Kratt ei pruugi osata anda usaldusväärset prognoosi juhul, kui ettevõte on analüüsitava perioodi jooksul teinud läbi olulise restruktureerimise ja/või majandustegevuse olemuse olulise muutuse, mille tulemusena perioodi kirjeldavad majandusaasta aruanded on väga erinevad. Kui ettevõte on viimastel aastatel muutnud põhitegevusala (EMTAKi järgi), siis ei ole võimalik prognoosi koostada.         •	Masinõppemudelite analüütilised tulemid on ainult osaliselt selgitatavad. Mudelid kasutavad  keerukaid matemaatilisi algoritme. Algoritmide olemusest tulenevalt ei ole alati tavaloogikat või majandusanalüütika loogikat kasutades võimalik lahti mõtestada, miks üks või teine mudel on teinud mõne konkreetse järelduse.         •	Elujõulisuse indeks kasutab analüüsiks ettevõtte majandusaasta aruande, maksudeklaratsioonide, töötamise registri ja majandusüksuste statistilise registri andmeid. Seega sõltub hinnangute täpsus sellest, kui täpsed on ettevõtte edastatud andmed.         •	Juhul, kui ettevõte ei ole esitanud eelnevalt kirjeldatud perioodide kohta majandusaasta aruandeid ja/või maksudeklaratsioone, siis ei saa rakendus ettevõtte kohta hinnangut anda.         •	Kui ettevõtte tegevus ja bilanss erinevad oluliselt teistest sama EMTAKi koodiga ettevõtetest, ei pruugi saadud prognoos usaldusväärne olla. ',
    },
    {
      name: 'Soovitused',
      content:
        'Lähtuvalt majandusteooriast ja suhtarvude analüüsist annab kratt ettevõttele tavapäraseid tegevussuuna soovitusi vastavalt hinnangule igas elujõulisuse tüübis. Kuna rakendusel pole piisavalt detailset teavet iga ettevõtte kohta, siis ei saa see anda konkreetset nõu, vaid pigem suunata ettevõtet edasist olukorda analüüsima. Krati soovitusi ilma nende sisu ja asjakohasust analüüsimata ellu viia ei ole õige. Edasiste tegevusplaanide tegemisse on soovitav kaasata ekspert või eriteadmistega konsultant. Täpsema metoodika leiab siit: …link metoodikaraportile…',
    },
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