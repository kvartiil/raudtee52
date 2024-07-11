import { Component, VERSION, OnInit } from '@angular/core';
import { xtee } from '../../xtee/xtee';

@Component({
  selector: 'graaf12',
  templateUrl: './graaf12.component.html',
  styleUrls: [ './graaf12.component.scss' ]
})
export class Graaf12Component implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;


  effpsect: number;  
  effpsize: number;
  effpcount: number;
  liqpsect: number;
  liqpsize: number;
  liqpcount: number;
  levpsect: number;
  levpsize: number;
  levpcount: number;
  retpsect: number;
  retpsize: number;
  retpcount: number;
  emppsect: number;
  emppsize: number;
  emppcount: number;
  
    constructor() { 
      this.effpsect = (xtee.EffpSect)*100;
      this.effpsize = (xtee.EffpSize)*100;
      this.effpcount = (xtee.EffpCount)*100;
      this.liqpsect = (xtee.LiqpSect)*100;
      this.liqpsize = Math.round((xtee.LiqpSize)*100*10)/10;
      this.liqpcount = (xtee.LiqpCount)*100;
      this.levpsect = (xtee.LevpSect)*100;
      this.levpsize = (xtee.LevpSize)*100;
      this.levpcount = (xtee.LevpCount)*100;
      this.retpsect = (xtee.RetpSect)*100;
      this.retpsize = Math.round((xtee.RetpSize)*100*10)/10;
      this.retpcount = (xtee.RetpCount)*100;
      this.emppsect = (xtee.EmppSect)*100;
      this.emppsize = (xtee.EmppSize)*100;
      this.emppcount = (xtee.EmppCount)*100;
    
    }
  




  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

   

    this.options = {
      legend: {orient: 'horizontal',
      right: 66,
      top: 'bottom'},
      color: ['#005AA3', '#004277', '#00213C'],
     
     tooltip: {

       //formatter: params => {
       //    return '<div style="width:300px; height: 400px">working j</div>';
       //  },
       //formatter: 'Sinu {a} onb {b} onc {c} ettevõtetest',
       // confine: true
       trigger: 'item',
       confine: true,
      // formatter: function(params, callback) {
      //  return  "Sinu maakonnas " + params.value + "vaattta" + params.value[1] + "veel" + params.value[0] + "nimeke" + params.seriesName + "lsdjk aldkj aldkdfj aldfjk ldkj asdlfjk aldfj dlfkj aldfkj aldfj as";
      //  }, 
       //trigger: 'axis',
       // axisPointer: {
       //   type: 'shadow'

       // }


       formatter: function(params) {
        return "<div style='width:50%; height: 100px; word-break: break-word;'><span style='font-weight: 700'>" + params.value[0]+ "</span><br><span>"  + "Sinu ettevõte on paremas seisus, kui" + "</span><br><span>" + params.value[1] + "% ettevõtteid sinu maakonnas, " + "</span><br><span>" + params.value[2] + "% tegevusvaldkonnas ja" + "</span><br><span>" +params.value[3] + "% suurusgrupis." +"</span></div>"
      }

      //Sinu ettevõte on paremas seisus kui 
      //23% ettevõtteid sinu maakonnas, 
      //33% tegevusvaldkonnas ja 
      //99% suurusgrupis.
      
      
      //formatter: function(params) {
      //  return "<div class='tooltip-key'><span>" + "Sinu maakonnas on " + params.value[1] + " %, " + "tegevusvaldkonnas " + params.value[2] +"</span></div>"
     // }

       //formatter: params => {
       //    return '<div style="width:300px; height: 400px">working<span>" + params.value[1] + {a} "</span></div>';
        //}, 

    
//      },
      
      //tooltip: {formatter: 'Sinu {a} on {c}% ettevõtetest'},
     // tooltip: {formatter: 'Sinu {a} on , {b}, {c}, {d} and {e}'},
      //tooltip: {
      //  formatter: function(params, callback) {
      //    return  "Sinu {a} "  + params.seriesName + " on " + params.data.value + "lsdfjs" + params.value + "veel" + params.value[0] + "nimeke" + params.seriesName;
      //  } 
      //formatter: function(params, callback) {
      //  return  "my text {a}, value: " + params.value + "vaattta" + params.value[1] + "veel" + params.value[0] + "nimeke" + params.seriesName;
      //}
      // wrap https://github.com/apache/echarts/issues/16699
           
      },

      
      title: {
        text: 'Kui paljudest on sinu ettevõte paremas seisus',
        left: 'center'
      },
      dataset: {
        source: [
          ['indikaator', 'Maakonnas', 'Tegevusvaldkonnas', 'Suurusgrupis'],
          ['Efektiivsus', this.effpcount, this.effpsect, this.effpsize],
          ['Maksevõime', this.liqpcount, this.liqpsect, this.liqpsize],
          ['Finantsvõimendus', this.levpcount, this.levpsect, this.levpsize],
          ['Tasuvus', this.retpcount, this.retpsect, this.retpsize],
          ['Tööjõu tootlikkus', this.emppcount, this.emppsect, this.emppsize]
        ]
      },
      xAxis: { type: 'category',
      axisLabel: { interval: 0, rotate: 0 } },
      yAxis: {},
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      
    };
    } 
}

