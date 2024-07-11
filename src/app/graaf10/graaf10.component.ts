import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'graaf10',
  templateUrl: './graaf10.component.html',
  styleUrls: [ './graaf10.component.scss' ]
})
export class Graaf10Component implements OnInit  {
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


  EfMadalValue: number;
  EfKorgeValue: number;

  korgevaart(){
    //setInterval (() => {
            //this.value = Math.floor((Math.random() * 2000) + 1);
            this.EfKorgeValue =this.getEfektKorge();
      //}, 7000);
      return this.EfKorgeValue;
  }


  keym: string = 'makseMadal';
  localValuem: string = '';
  madalStringm: string;
  madalNumberm: number;

getMakseMadal() {
    this.madalStringm = localStorage.getItem(this.keym);
    this.madalNumberm=Number(this.madalStringm);
    return this.madalNumberm;
  }

  key2m: string = 'makseKeskmine';
  keskmineStringm: string;
  keskmineNumberm: number;

  getMakseKeskmine() {
    this.keskmineStringm = localStorage.getItem(this.key2m);
    this.keskmineNumberm=Number(this.keskmineStringm);
    return this.keskmineNumberm;
  }

  key3m: string = 'makseKorge';
  korgeStringm: string;
  korgeNumberm: number;

  getMakseKorge() {
    this.korgeStringm = localStorage.getItem(this.key3m);
    this.korgeNumberm=Number(this.korgeStringm);
    return this.korgeNumberm;
  }


  keyv: string = 'voimMadal';
  localValuev: string = '';
  madalStringv: string;
  madalNumberv: number;

  getVoimMadal() {
    this.madalStringv = localStorage.getItem(this.keyv);
    this.madalNumberv=Number(this.madalStringv);
    return this.madalNumberv;
  }

  key2v: string = 'voimKeskmine';
  keskmineStringv: string;
  keskmineNumberv: number;

  getVoimKeskmine() {
    this.keskmineStringv = localStorage.getItem(this.key2v);
    this.keskmineNumberv=Number(this.keskmineStringv);
    return this.keskmineNumberv;
  }

  key3v: string = 'voimKorge';
  korgeStringv: string;
  korgeNumberv: number;

  getVoimKorge() {
    this.korgeStringv = localStorage.getItem(this.key3v);
    this.korgeNumberv=Number(this.korgeStringv);
    return this.korgeNumberv;
  }


  keyt: string = 'tasuvMadal';
  localValuet: string = '';
  madalStringt: string;
  madalNumbert: number;

  getTasuvMadal() {
    this.madalStringt = localStorage.getItem(this.keyt);
    this.madalNumbert=Number(this.madalStringt);
    return this.madalNumbert;
  }

  key2t: string = 'tasuvKeskmine';
  keskmineStringt: string;
  keskmineNumbert: number;

  getTasuvKeskmine() {
    this.keskmineStringt = localStorage.getItem(this.key2t);
    this.keskmineNumbert=Number(this.keskmineStringt);
    return this.keskmineNumbert;
  }

  key3t: string = 'tasuvKorge';
  korgeStringt: string;
  korgeNumbert: number;

  getTasuvKorge() {
    this.korgeStringt = localStorage.getItem(this.key3t);
    this.korgeNumbert=Number(this.korgeStringt);
    return this.korgeNumbert;
  }


  keyj: string = 'toojoudMadal';
  localValuej: string = '';
  madalStringj: string;
  madalNumberj: number;

  getToojoudMadal() {
    this.madalStringj = localStorage.getItem(this.keyj);
    this.madalNumberj=Number(this.madalStringj);
    return this.madalNumberj;
  }

  key2j: string = 'toojoudKeskmine';
  keskmineStringj: string;
  keskmineNumberj: number;

  getToojoudKeskmine() {
    this.keskmineStringj = localStorage.getItem(this.key2j);
    this.keskmineNumberj=Number(this.keskmineStringj);
    return this.keskmineNumberj;
  }

  key3j: string = 'toojoudKorge';
  korgeStringj: string;
  korgeNumberj: number;

  getToojoudKorge() {
    this.korgeStringj = localStorage.getItem(this.key3j);
    this.korgeNumberj=Number(this.korgeStringj);
    return this.korgeNumberj;
  }











  update() {
    this.ngOnInit();
} 
  

  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    //for (let i = 0; i < 100; i++) {
    //  xAxisData.push('category' + i);
    //  data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    //  data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    //}

    this.options = {
      legend: {
        data: ['Madal', 'Keskmine', 'Kõrge'],
        align: 'left',
      },
      tooltip: {},
      label: {
        show: true,
        //formatter: '(params)+ %'
        formatter: (params) => Math.round(params.value * 10) / 10 + ' %'
      },
      
      xAxis: {
        //data: xAxisData,
        //data: ['A', 'B', 'C', 'D', 'E'],
        silent: false,
        type: 'value',
        //label: {
        //  show: true,
          //formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
        //},
        //position: 'top',
        splitLine: {
          show: false,
        },
        axisLabel: {
          formatter: '{value} %',
          align: 'center'
          // ...
        },
        axisLine: {onZero: false},
      },
      yAxis: {
        type: 'category',
        data: ['Efektiivsus', 'Maksevõime', 'Võimendus', 'Tasuvus', 'Tööjõud'],
        inverse: true
        
      },
      series: [
        {
          name: 'Madal',
          type: 'bar',
          //stack: 'total',
          //stack: '1',
          stack: 'x',
          //data: data1,
          data: [
            (this.getEfektMadal()*100),
            (this.getMakseMadal()*100),
            (this.getVoimMadal()*100),
            (this.getTasuvMadal()*100),
            (this.getToojoudMadal()*100) 
            ],
        //  markLine: {
        //    data: [{
        //            name: 'Maksimum',
        //            type: 'max'
         //       },
        //        {
        //            name: 'Miinimum',
        //            type: 'min'
        //        }
        //    ]
        //},
          color: ['#EFB2B2'],
          animationDelay: (idx) => idx * 1000,
        },
        {
          name: 'Keskmine',
          type: 'bar',
          stack: 'x',
          //stack: '1',
          data: [
            (this.getEfektKeskmine()*100), 
            (this.getMakseKeskmine()*100),
            (this.getVoimKeskmine()*100),
            (this.getTasuvKeskmine()*100),
            (this.getToojoudKeskmine()*100)
            ],
        //  markLine: {
        //    data: [{
        //            name: 'Maksimum',
        //            type: 'max',
        //        },
        //        {
        //            name: 'Miinimum',
        //            type: 'min',
        //        }
        //    ]
        //},
          color: ['#FFE1A0'],
          //data: data2,
          animationDelay: (idx) => idx * 1000 + 1000,
        },

        {
          name: 'Kõrge',
          type: 'bar',
          stack: 'x',
          //stack: '1',
          data: [
            (this.getEfektKorge()*100),            
            (this.getMakseKorge()*100),
            (this.getVoimKorge()*100),
            (this.getTasuvKorge()*100),
            (this.getToojoudKorge()*100)
            ],
        //  markLine: {
        //    data: [{
        //            name: 'Maksimum',
        //            type: 'max',
        //        },
        //        {
        //            name: 'Miinimum',
        //            type: 'min',
        //        }
        //    ]
        //},
          color: ['#ACCFBA'],
          //data: data2,
          animationDelay: (idx) => idx * 1000 + 1000,
        },





5      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  }









}