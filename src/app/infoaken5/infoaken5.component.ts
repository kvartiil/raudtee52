import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'infoaken5-component',
  templateUrl: './infoaken5.component.html',
  styleUrls: ['./infoaken5.component.scss']
})
export class Infoaken5Component {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Item 1',
      content:
        'Sisendi andmine ei taga võimalust väga põhjalikuks analüüsiks, kuna tegemist on vaid ideed kuvava prototüübiga. Samas on sisendiga võimalik saavutada nelja kasutatava närvivõrgu mudeliga luua erinevaid olukordi ja näha, kuidas need võivad potentsiaalselt mõjutada kasutustasu otsust. Peale sisendi sisestamist ja enne sellelt alalehelt lahkumist on vajalik teha "Refresh", siis mudelid käivituvad ja saadud tulem liigub õigetesse kohtadesse. Mudelite töö, kuna kasutatakse browseri ressurssi, võib lehe ka natuke aeglaseks kohati muuta.',
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