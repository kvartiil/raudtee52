import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'lahteturn-component',
  templateUrl: './lahteturn.component.html',
  styleUrls: ['./lahteturn.component.scss']
})
export class LahteturnComponent {

  flipped = false;
  //imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkL8GlKZ775j3f0VVgS1rU8L2LoX5UEM6fKv_eGLzeza27WYH"

  elujouEnnustus: string;
  elastsusEnnustus: string;
  naitaja = 2;

  constructor () {
    this.elujouEnnustus = localStorage.getItem("ennustusElujoud");
    this.elastsusEnnustus = localStorage.getItem("ennustusElastsus");
  }
  varvinaitaja: number;
  lapkok () {
    if (this.elujouEnnustus == '1' && this.elastsusEnnustus == '0') {
      this.varvinaitaja = 1; //Grupp1
      //this.hinnangElujoule = "ettevõte on kõrge elujõulisusega, suudab suuremaid kulusid taluda."
    }
    return this.varvinaitaja;
  }

  toggle() {
    this.flipped = !this.flipped;
  }

  
}