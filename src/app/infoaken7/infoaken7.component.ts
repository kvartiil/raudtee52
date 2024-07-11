import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'infoaken7-component',
  templateUrl: './infoaken7.component.html',
  styleUrls: ['./infoaken7.component.scss']
})
export class Infoaken7Component {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Item 1',
      content:
        'See tabel annab põhimõttelise ülevaate, kuidas elastsus toimib ja kuidas peaks sellest juhinduma. Käesolevas prototüübis päris kõike siit kasutatud ei ole, käesoleva prototüübi kontekstis vaata allpool järgnevat tabelit.',
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