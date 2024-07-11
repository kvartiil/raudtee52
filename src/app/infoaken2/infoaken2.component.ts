import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'infoaken2-component',
  templateUrl: './infoaken2.component.html',
  styleUrls: ['./infoaken2.component.scss']
})
export class Infoaken2Component {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Item 1',
      content:
        'Tabelis toodud mudelid ei ole sellisel kujul praegusel hetkel treenitud ja olemas. Selle lahenduse realiseerimisel võib tekkida vajadus mudelite loogikat muuta, mõnda mudelit asendada teisega jne. Siinkohal on esitatud kontseptuaalne prototüübi loogika, millest juhinduda edasiste arengute kavandamisel, mitte valmislahendus.',
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