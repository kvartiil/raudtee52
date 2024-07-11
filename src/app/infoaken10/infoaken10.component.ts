import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'infoaken10-component',
  templateUrl: './infoaken10.component.html',
  styleUrls: ['./infoaken10.component.scss']
})
export class Infoaken10Component {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Item 1',
      content:
        'Siin alajaotuses on toodud eksperimentaalne lähtenurk, kuidas erinevad lahendused kokku viia saamaks ühest vastust kasutustasu suuruse ja tõstmise võimalikkuse osas.',
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