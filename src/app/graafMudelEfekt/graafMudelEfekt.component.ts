import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'graafmudelefekt',
  templateUrl: './graafMudelEfekt.component.html',
  styleUrls: [ './graafMudelEfekt.component.scss' ]
})
export class GraafMudelEfektComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;


  key: string = 'efektMadal';
  localValue: string = '';
  myItem: string;
  myItem2: number;

getEfektMadal() {
    this.myItem = localStorage.getItem(this.key);
    this.myItem2=Number(this.myItem);
    return this.myItem2;
  }

  key2: string = 'efektKeskmine';
  keskmineString: string;
  keskmineNumber: number;

  getEfektKeskmine() {
    this.keskmineString = localStorage.getItem(this.key2);
    this.keskmineNumber=Number(this.keskmineString);
    return this.keskmineNumber;
  }

  key3: string = 'efektKorge';
  korgeString: string;
  korgeNumber: number;

  getEfektKorge() {
    this.korgeString = localStorage.getItem(this.key3);
    this.korgeNumber=Number(this.korgeString);
    return this.korgeNumber;
  }


//  loemestoragest2() {
    
//    return 33;
//  }

 // ngOnInit() {
    

    // Push JSON to options array
    
//  }

 // ngAfterViewInit() {
ngOnInit(): void {


//  this.loemestoragest();

    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
                
      title: {
        text: '',
        left: 'center',
        top: 'center'
      },
      color: ['#EFB2B2', '#FFE1A0', '#ACCFBA'],
      series: [
        {
          type: 'pie',
          data: [
            {
              value: this.getEfektMadal(),
              name: 'Madal'
            },
            {
              value: this.getEfektKeskmine(),
              name: 'Keskmine'
            },
            {
              value: this.getEfektKorge(),
              name: 'Kõrge'
            }
          ],
          radius: ['40%', '70%']
        }
      ]
        
    };
  }
}