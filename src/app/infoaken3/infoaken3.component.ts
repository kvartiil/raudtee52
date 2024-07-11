import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'infoaken3-component',
  templateUrl: './infoaken3.component.html',
  styleUrls: ['./infoaken3.component.scss']
})
export class Infoaken3Component {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Item 1',
      content:
        'Statistikaametis on välja töötatud väga põhjalik elujõulisuse leidmise metoodika masinõppe meetodite abil. See metoodika saab lisada olulist väärtust raudtee kasutustasude määramisele ja seetõttu on käesolevas alajaotuses antud põgus ülevaade selle metoodika alustugedest.',
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