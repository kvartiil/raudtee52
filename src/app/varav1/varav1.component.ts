import { Component, HostListener, Directive, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'varav1',
  templateUrl: './varav1.component.html',
  styleUrls: ['./varav1.component.scss']
})
export class Varav1Component {
  name = 'Angular';
}


@Directive({ selector: '[accordion]' })
export class AccordionDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
  
  

  @HostListener('click', ['$event']) onClick($event) {
    console.info($event);

    this.el.nativeElement.classList.toggle('is-open');

    var content = this.el.nativeElement.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";

    }
  }
}