import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'infoaken-component',
  templateUrl: './infoaken.component.html',
  styleUrls: ['./infoaken.component.scss']
})
export class InfoakenComponent {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Item 1',
      content:
        'Siia saab nüüd lisada teksti, näiteks antud juhul sellest, et kui leiab aset protsentiilidel põhinev võrdlus maakondade, tegevusvaldkondade ja suurusgruppide lõikes. Siin oleks nüüd oluline, et siia kasti tuleks tõesti vaid tekst, mitte mingeid liigendusi, valemeid vms.',
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