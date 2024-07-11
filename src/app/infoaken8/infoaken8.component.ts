import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'infoaken8-component',
  templateUrl: './infoaken8.component.html',
  styleUrls: ['./infoaken8.component.scss']
})
export class Infoaken8Component {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Item 1',
      content:
        'Siit tabelist on näha, et käesolev prototüüp kasutab elastsuse puhul kahte varianti: (a) elastne - kaubad võivad raudteelt ära minna ja (b) mitteelastne - kaubad ei lähe raudteelt ära.',
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