import { Component } from '@angular/core';

@Component({
  selector: 'varav2',
  templateUrl: './varav2.component.html',
  styleUrls: ['./varav2.component.scss']
})
export class Varav2Component {
  currentIndex;

  sections = [
    {
      name: 'Section 1',
      content: 'Content 1'
    },
    {
      name: 'Section 2',
      content: '<progn1-component></progn1-component>'
    },
    {
      name: 'Section 3',
      content: '<progn2-component></progn2-component>'
    },
  ];
  showComponent1: boolean = false;
  showComponent2: boolean = false;
  showComponent3: boolean = false;
  
  expand(index) {
    if(this.currentIndex === index) {
      this.currentIndex = null;
      return;
    }
    this.currentIndex = index;
    //alert(this.currentIndex);
    
    if ( this.currentIndex === 0) {
      this.showComponent1 = true;
      this.showComponent2 = false;
      this.showComponent3 = false;
    }
    else if ( this.currentIndex === 1) {
      this.showComponent1 = false;
      this.showComponent2 = true;
      this.showComponent3 = false;
    }
    else if ( this.currentIndex === 2) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = true;
    }
  }

}