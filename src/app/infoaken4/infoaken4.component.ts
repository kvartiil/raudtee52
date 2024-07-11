import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'infoaken4-component',
  templateUrl: './infoaken4.component.html',
  styleUrls: ['./infoaken4.component.scss']
})
export class Infoaken4Component {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Item 1',
      content:
        'Kuna kasutustasude määramise tehisintellektne lahendus on mõeldud töötama masinõppe ja tehisnärvivõrkude mudelitel, siis käesolevas alajaotuses antakse põhimõtteline ülevaade sellest, millised need mudelid on ja kuidas neid käesolevas lahenduses kasutatakse - s.t. kuidas need mudelid potentsiaalselt panustavad kasutustasu määramise kvaliteedi tõusu.',
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