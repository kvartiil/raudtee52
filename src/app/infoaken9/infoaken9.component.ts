import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'infoaken9-component',
  templateUrl: './infoaken9.component.html',
  styleUrls: ['./infoaken9.component.scss']
})
export class Infoaken9Component {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Item 1',
      content:
        'Siin alajaotuses on taustinfo, et anda esmast ülevaadet, mida on ettevõtte elujõulisuse indeksi raames tehtud ja millistest eeldustest on lähtutud. Käesoleva rakenduse kontekstis on see oluline sellepärast, et elujõulisuse indeksi sisend on üheks sisendiks kasutustasu määramise loogikas.',
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