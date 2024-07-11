import { Component } from '@angular/core';

@Component({
  selector: 'varav10',
  templateUrl: './varav10.component.html',
  styleUrls: ['./varav10.component.scss']
})
export class Varav10Component {
  currentIndex;

  sections = [
    {
      name: 'Maakondlike arenduskeskuste võrgustik', //https://www.arenduskeskused.ee/
      content: 'Content 1'
    },
    {
      name: 'Harju Ettevõtlus- ja Arenduskeskus', //https://www.heak.ee/
      content: '<progn1-component></progn1-component>'
    },
    {
      name: 'Hiiumaa Arenduskeskus',  //https://hiiumaaarenduskeskus.ee/
      content: ''
    },
    {
      name: 'Ida-Viru Ettevõtluskeskus', //https://ivek.ee/
      content: ''
    },
    {
      name: 'Jõgevamaa Arendus- ja Ettevõtluskeskus',  //https://www.jaek.ee/
      content: ''
    }

  ];
  showComponent1: boolean = false;
  showComponent2: boolean = false;
  showComponent3: boolean = false;
  showComponent4: boolean = false;
  showComponent5: boolean = false;

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
      this.showComponent4 = false;
      this.showComponent5 = false;
    }
    else if ( this.currentIndex === 1) {
      this.showComponent1 = false;
      this.showComponent2 = true;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
    }
    else if ( this.currentIndex === 2) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = true;
      this.showComponent4 = false;
      this.showComponent5 = false;
    }
    else if ( this.currentIndex === 3) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = true;
      this.showComponent5 = false;
    }
    else if ( this.currentIndex === 4) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = true;
    }
  }

}