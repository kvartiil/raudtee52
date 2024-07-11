import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'infoaken6-component',
  templateUrl: './infoaken6.component.html',
  styleUrls: ['./infoaken6.component.scss']
})
export class Infoaken6Component {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Item 1',
      content:
        'Elujõu ja elastsuse mudelid on põhimudelid, annavad analüüsile põhisisu. Majandusmudel on taustamudel, mis annab üldise otsustusfooni, kui kasutustasu tõstmise otsus on n.ö. kahevahel või riskantne. Raudtee mudel ütleb, kas antud asjaolude (s.t. kasutustasu ja selle muutuse) juures on võimalik raudteed ära majandada, ehk siis on tegemist kontrollimudeliga.',
      html: true,
      css: true,
      js: true
    }
  ];

  PopUp(event: Event, element: HTMLDivElement) {
    // element.classList.remove('popup');
    // element.classList.add('test');
    // console.log(element.classList);
    element.classList.toggle('is-visible');
  }
  
}