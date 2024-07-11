import { Component, VERSION, OnInit } from '@angular/core';
import { xtee } from '../../xtee/xtee';

@Component({
  selector: 'graafelasttotal',
  templateUrl: './graafelasttotal.component.html',
  styleUrls: [ './graafelasttotal.component.scss' ]
})
export class GraafElastTotalComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;


  data: number;
      
  sisend1: number;
  sisend2: number;

  setInterval () {
    const random = +(Math.random() * 100).toFixed(2);
    this.data = random;
  };

  suurNumber() {
    this.sisend1 = 45;
    return this.sisend1;
  }
 
  vaikeNumber() {
    this.sisend2 = 13;
    return this.sisend2;
  }

  constructor(){


    setInterval (() => {
            this.sisend1 = Math.floor((Math.random() * 100) + 1);
            this.sisend2 = Math.floor((Math.random() * 100) + 1);
            //this.value = (this.getEfektKorge()+this.getMakseKorge()+this.getVoimKorge()+this.getTasuvKorge()+this.//getToojoudKorge())/5;
      }, 7000);
  }
  
  



  ngOnInit(): void {
   
  setInterval (() => {  

    this.options = {
  
 
      
  series: [
    {
      type: 'gauge',
      center: ['50%', '60%'],
      startAngle: 200,
      endAngle: -20,
      min: 0,
      max: 100,
      splitNumber: 20,
      itemStyle: {
        color: '#004277'
      },
      progress: {
        show: true,
        width: 30
      },

      pointer: { 
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 30
        }
      },
      axisTick: {
        distance: -45,
        splitNumber: 5,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      splitLine: {
        distance: -52,
        length: 14,
        lineStyle: {
          width: 3,
          color: '#999'
        }
      },
      axisLabel: {
        distance: -20,
        color: '#999',
        fontSize: 20
      },
      anchor: {
        show: false
      },
      title: {
        show: false
      },
      detail: {
        valueAnimation: true,
        width: '60%',
        lineHeight: 40,
        borderRadius: 8,
        offsetCenter: [0, '-15%'],
        fontSize: 40,
        fontWeight: 'bolder',
        formatter: '{value} KTasu',
        color: 'inherit'
      },
      data: [
        {
          value: this.sisend1 //
          //setInterval (() => {this.sisend1}, 7000)//suurNumber()//this.setInterval()
        }
      ]
    },

    {
      type: 'gauge',
      center: ['50%', '60%'],
      startAngle: 200,
      endAngle: -20,
      min: 0,
      max: 60,
      itemStyle: {
        color: '#005AA3'
      },
      progress: {
        show: true,
        width: 8
      },
      pointer: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      detail: {
        show: false
      },
      data: [
        {
          value: this.sisend2
        }
      ]
    }
  ]



    };



    setInterval(function () {
      const random = +(Math.random() * 60).toFixed(2);
      this.data = random;
    }, 2000);

  }, 7000); //Koondintervalli lõpp


    } //ngInit lõpeb siin
}

