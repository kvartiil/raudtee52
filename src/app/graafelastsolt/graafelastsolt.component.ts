import { Component, VERSION, OnInit } from '@angular/core';
import { xtee } from '../../xtee/xtee';

@Component({
  selector: 'graafelastsolt',
  templateUrl: './graafelastsolt.component.html',
  styleUrls: [ './graafelastsolt.component.scss' ]
})
export class GraafElastSoltComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;


 


  ngOnInit(): void {
    

    this.options = {
  
      backgroundColor: '#fff',
  title: {
    subtext: 'Elastsust mõjutavad asjaolud',
    left: 'center'
  },
  series: [
    {
      type: 'sankey',
      left: 50.0,
      top: 20.0,
      right: 150.0,
      bottom: 25.0,
      data: [
                  
        {
          name: 'Kogused',
          itemStyle: {
            color: 'red'
          }
        },
        {
          name: 'Hinnad',
          itemStyle: {
            color: 'red'
          }
        },
        {
          name: 'Ettevõte',
          itemStyle: {
            color: 'blue'
          }
        },
        {
          name: 'Kliendid',
          itemStyle: {
            color: 'blue'
          }
        },
        {
          name: 'Turg',
          itemStyle: {
            color: 'blue'
          }
        },
        {
          name: 'Makro',
          itemStyle: {
            color: 'blue'
          }
        },
        {
          name: 'Üldnõudluse maht',
          itemStyle: {
            color: 'green'
          }
        },
        {
          name: 'Toormekulud',
          itemStyle: {
            color: 'green'
          }
          },
        {
          name: 'Adminkoorem',
          itemStyle: {
            color: 'green'
          }
          },
          {
            name: 'Tööjõukulud',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Turunduskulud',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Reservid',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Varad',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Tulud',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Sisenemisbarjäärid',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Kliendilojaalsus',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Õiguslik seis',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Nõudluse sügavus',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Hinnatundlikkus',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Arengufaas',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Muutuse kiirus',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Seadusloome',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Turuosaliste hulk',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Tulususe aste',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Riskimäär',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Kapitaliseerituse tase',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Inflatsioon',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'GDP',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Välisnõudlus',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Otsesed välisinvesteeringud',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Sisenõudlus',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Ohutase',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Ettevõtlusvabadus',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Keskkonna efektiivsus',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Juurdepääsetavus',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Energia hind',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Maksevõime',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Pretensioonikus',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Alternatiivsed tarnijad',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Lepingute pikkus/sidusus',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Toote olulisus',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Asendustooted',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Turupüsivus',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Turuulatus',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Juurdepääs kapitalile',
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: 'Asukoht',
            itemStyle: {
              color: 'green'
            }
          }

      ],
      links: [
        {
          source: 'Hinnad',
          target: 'Ettevõte',
          value: 10
        },
        {
          source: 'Hinnad',
          target: 'Kliendid',
          value: 10
        },
        {
          source: 'Hinnad',
          target: 'Turg',
          value: 10
        },
        {
          source: 'Hinnad',
          target: 'Makro',
          value: 10
        },
        {
          source: 'Kogused',
          target: 'Ettevõte',
          value: 10
        },
        {
          source: 'Kogused',
          target: 'Kliendid',
          value: 10
        },
        {
          source: 'Kogused',
          target: 'Turg',
          value: 10
        },
        {
          source: 'Kogused',
          target: 'Makro',
          value: 10
        },
       
        {
          source: 'Ettevõte',
          target: 'Toormekulud',
          value: 2
        },
        {
          source: 'Ettevõte',
          target: 'Tööjõukulud',
          value: 2
        },
        {
          source: 'Ettevõte',
          target: 'Adminkoorem',
          value: 2
        },
        {
          source: 'Ettevõte',
          target: 'Turunduskulud',
          value: 2
        },
        {
          source: 'Ettevõte',
          target: 'Reservid',
          value: 2
        },
        {
          source: 'Ettevõte',
          target: 'Varad',
          value: 2
        },
        {
          source: 'Ettevõte',
          target: 'Tulud',
          value: 2
        },
        {
          source: 'Ettevõte',
          target: 'Sisenemisbarjäärid',
          value: 2
        },
        {
          source: 'Ettevõte',
          target: 'Kliendilojaalsus',
          value: 2
        },
        {
          source: 'Ettevõte',
          target: 'Õiguslik seis',
          value: 2
        },
        {
          source: 'Turg',
          target: 'Üldnõudluse maht',
          value: 2
        },
        {
          source: 'Turg',
          target: 'Nõudluse sügavus',
          value: 2
        },
        {
          source: 'Turg',
          target: 'Hinnatundlikkus',
          value: 2
        },
        {
          source: 'Turg',
          target: 'Arengufaas',
          value: 2
        },
        {
          source: 'Turg',
          target: 'Muutuse kiirus',
          value: 2
        },
        {
          source: 'Turg',
          target: 'Seadusloome',
          value: 2
        },
        {
          source: 'Turg',
          target: 'Turuosaliste hulk',
          value: 2
        },
        {
          source: 'Turg',
          target: 'Tulususe aste',
          value: 2
        },
        {
          source: 'Turg',
          target: 'Riskimäär',
          value: 2
        },
        {
          source: 'Turg',
          target: 'Kapitaliseerituse tase',
          value: 2
        },
        {
          source: 'Makro',
          target: 'Inflatsioon',
          value: 2
        },
        {
          source: 'Makro',
          target: 'GDP',
          value: 2
        },
        {
          source: 'Makro',
          target: 'Välisnõudlus',
          value: 2
        },
        {
          source: 'Makro',
          target: 'Otsesed välisinvesteeringud',
          value: 2
        },
        {
          source: 'Makro',
          target: 'Sisenõudlus',
          value: 2
        },
        {
          source: 'Makro',
          target: 'Ohutase',
          value: 2
        },
        {
          source: 'Makro',
          target: 'Ettevõtlusvabadus',
          value: 2
        },
        {
          source: 'Makro',
          target: 'Keskkonna efektiivsus',
          value: 2
        },
        {
          source: 'Makro',
          target: 'Juurdepääsetavus',
          value: 2
        },
        {
          source: 'Makro',
          target: 'Energia hind',
          value: 2
        },
        {
          source: 'Kliendid',
          target: 'Maksevõime',
          value: 2
        },
        {
          source: 'Kliendid',
          target: 'Pretensioonikus',
          value: 2
        },
        {
          source: 'Kliendid',
          target: 'Alternatiivsed tarnijad',
          value: 2
        },
        {
          source: 'Kliendid',
          target: 'Lepingute pikkus/sidusus',
          value: 2
        },
        {
          source: 'Kliendid',
          target: 'Toote olulisus',
          value: 2
        },
        {
          source: 'Kliendid',
          target: 'Asendustooted',
          value: 2
        },
        {
          source: 'Kliendid',
          target: 'Turupüsivus',
          value: 2
        },
        {
          source: 'Kliendid',
          target: 'Turuulatus',
          value: 2
        },
        {
          source: 'Kliendid',
          target: 'Juurdepääs kapitalile',
          value: 2
        },
        {
          source: 'Kliendid',
          target: 'Asukoht',
          value: 2
        }
        
        
      ],
      lineStyle: {
        color: 'source',
        curveness: 0.5
      },
      itemStyle: {
        color: '#1f77b4',
        borderColor: '#1f77b4'
      },
      label: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Arial',
        fontSize: 10
      }
    }
  ],
  tooltip: {
    trigger: 'item'
  }




    };
    } 
}
