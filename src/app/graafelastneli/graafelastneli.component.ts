import { Component, VERSION, OnInit } from '@angular/core';
import { xtee } from '../../xtee/xtee';

@Component({
  selector: 'graafelastneli',
  templateUrl: './graafelastneli.component.html',
  styleUrls: [ './graafelastneli.component.scss' ]
})
export class GraafElastNeliComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;


  elujouEnnustus: string;
  elujouEnnustus2: number;
  elastsusEnnustus: string;
  elastsusEnnustus2: number;
  raudteeEnnustus: string;
  raudteeEnnustus2: number;
  majandusEnnustus: string;
  majandusEnnustus2: number;

  mudeliinfo () {
    this.elujouEnnustus = localStorage.getItem("ennustusElujoud");
    this.elujouEnnustus2=Number(this.elujouEnnustus);

    this.elastsusEnnustus = localStorage.getItem("ennustusElastsus");
    this.elastsusEnnustus2=Number(this.elastsusEnnustus);

    this.raudteeEnnustus = localStorage.getItem("ennustusRaudtee");
    this.raudteeEnnustus2=Number(this.raudteeEnnustus);

    this.majandusEnnustus = localStorage.getItem("ennustusMajandus");
    this.majandusEnnustus2=Number(this.majandusEnnustus);
    
  }


  ngOnInit(): void {
    
    this.mudeliinfo();

    this.options = {
  
      title: [
        {
          text: 'Mudelite tulemused',
          left: 'center'
        }
      ],
      polar: {
        radius: [30, '80%']
      },
      radiusAxis: {
        max: 1
      },
      angleAxis: {
        type: 'category',
        data: ['elujouMudel', 'elastsusMudel', 'majandusMudel', 'raudteeMudel'],
        startAngle: 75
      },
      tooltip: {
        trigger: 'item',
       confine: true,
      // formatter: function(params, callback) {
      //  return  "Sinu maakonnas " + params.value + "vaattta" + params.value[1] + "veel" + params.value[0] + "nimeke" + params.seriesName + "lsdjk aldkj aldkdfj aldfjk ldkj asdlfjk aldfj dlfkj aldfkj aldfj as";
      //  }, 
       //trigger: 'axis',
       // axisPointer: {
       //   type: 'shadow'

       // }
       formatter: "<span style='font-weight: 400; font-size: 18px; color: #005AA3'> Sinu {b} näitab tulemust: {c} </span>"+ "<br>" + "<span style='font-size: 12px; color: red; font-style: italic'>1 tähendab, et mudel hindas kõrgelt; 0 tähendab, et mudel hindas madalalt </span>"

      },
      series: {
        type: 'bar',
        data: [this.elujouEnnustus2, this.elastsusEnnustus2, this.majandusEnnustus2, this.raudteeEnnustus2],
        coordinateSystem: 'polar',
        label: {
          show: true,
          position: 'middle', // or 'start', 'insideStart', 'end', 'insideEnd'
          formatter: '{b}: {c}'
        }
      },
      animation: true
      
  
  
    };
    } 
}

