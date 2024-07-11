import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'graafmudelmaks',
  templateUrl: './graafMudelMaks.component.html',
  styleUrls: [ './graafMudelMaks.component.scss' ]
})
export class GraafMudelMaksComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;

  
  key: string = 'makseMadal';
  localValue: string = '';
  madalString: string;
  madalNumber: number;

getMakseMadal() {
    this.madalString = localStorage.getItem(this.key);
    this.madalNumber=Number(this.madalString);
    return this.madalNumber;
  }

  key2: string = 'makseKeskmine';
  keskmineString: string;
  keskmineNumber: number;

  getMakseKeskmine() {
    this.keskmineString = localStorage.getItem(this.key2);
    this.keskmineNumber=Number(this.keskmineString);
    return this.keskmineNumber;
  }

  key3: string = 'makseKorge';
  korgeString: string;
  korgeNumber: number;

  getMakseKorge() {
    this.korgeString = localStorage.getItem(this.key3);
    this.korgeNumber=Number(this.korgeString);
    return this.korgeNumber;
  }






  ngOnInit(): void {
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
              value: this.getMakseMadal(),
              name: 'Madal'
            },
            {
              value: this.getMakseKeskmine(),
              name: 'Keskmine'
            },
            {
              value: this.getMakseKorge(),
              name: 'Kõrge'
            }
          ],
          radius: ['40%', '70%']
        }
      ]
        
    };
  }
}