import { Component } from '@angular/core';

@Component({
  selector: 'progress1',
  templateUrl: './progress1.component.html',
  styleUrls: [ './progress1.component.scss' ]
})
export class Progress1Component  {
  progress = 0;
  constructor(){
    setInterval(()=> {
      if(this.progress < 40){
        this.progress = this.progress + 0.1;
      }
      else{
        this.progress = 40;
      }
    }, 50);
  }
  
}