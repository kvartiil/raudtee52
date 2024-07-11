import { Component, VERSION, OnInit } from '@angular/core';
import { xtee } from '../../xtee/xtee';

@Component({
  selector: 'graafdouble',
  templateUrl: './graafdouble.component.html',
  styleUrls: [ './graafdouble.component.scss' ]
})
export class GraafDoubleComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;
  myChart: string;


data: any;


  ngOnInit(): void {
    
    this.options = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        data: [
          'Toormekulud',
          'Tööjõukulud',
          'Tulud',
          'Hinnatundlikkus',
          'Inflatsioon',
          'GDP',
          'Asendustooted',
          'Juurdepääs kapitalile',
          'Ettevõte',
          'Turg',
          'Makro',
          'Kliendid'
        ]
      },
      series: [
        {
          name: 'Jaotus',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '30%'],
          label: {
            position: 'inner',
            fontSize: 14
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1548, name: 'Ettevõte' },
            { value: 775, name: 'Turg' },
            { value: 775, name: 'Kliendid' },
            { value: 679, name: 'Makro', selected: true }
          ]
        },
        {
          name: 'Sisend',
          type: 'pie',
          radius: ['45%', '60%'],
          labelLine: {
            length: 30
          },
          label: {
            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
            backgroundColor: '#F6F8FC',
            borderColor: '#8C8D8E',
            borderWidth: 1,
            borderRadius: 4,
    
            rich: {
              a: {
                color: '#6E7079',
                lineHeight: 22,
                align: 'center'
              },
              hr: {
                borderColor: '#8C8D8E',
                width: '100%',
                borderWidth: 1,
                height: 0
              },
              b: {
                color: '#4C5058',
                fontSize: 14,
                fontWeight: 'bold',
                lineHeight: 33
              },
              per: {
                color: '#fff',
                backgroundColor: '#4C5058',
                padding: [3, 4],
                borderRadius: 4
              }
            }
          },
          data: [
            { value: 1048, name: 'Toormekulud' },
            { value: 335, name: 'Tööjõukulud' },
            { value: 310, name: 'Tulud' },
            { value: 251, name: 'Hinnatundlikkus' },
            { value: 234, name: 'Inflatsioon' },
            { value: 147, name: 'GDP' },
            { value: 135, name: 'Asendustooted' },
            { value: 102, name: 'Juurdepääs kapitalile' }
          ]
        }
      ]
    };
    
    



    } 
}

