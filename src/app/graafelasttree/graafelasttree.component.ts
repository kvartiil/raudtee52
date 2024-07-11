import { Component, VERSION, OnInit } from '@angular/core';
import { xtee } from '../../xtee/xtee';

@Component({
  selector: 'graafelasttree',
  templateUrl: './graafelasttree.component.html',
  styleUrls: [ './graafelasttree.component.scss' ]
})
export class GraafElastTreeComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;


  data = {
    name: 'HEL',
    children: [
      {
        name: 'Hinnad',
        children: [
          {
            name: 'Lähtehinnad',
            value: 'x'
            
          },
          {
            name: 'Lõpphinnad',
            value: 'x'
          }
        ] 
      },
      {
        name: 'Kogused',
        children: [
          { name: 'Lähtekogused', value: 'x' },
          { name: 'Lõppkogused', value: 'x' }
          
        ]
      }
      
    
     
    ]
  };



  ngOnInit(): void {
    

    this.options = {
  
 

      
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: [
          {
            type: 'tree',
  
            data: [this.data],
  
            top: '1%',
            left: '7%',
            bottom: '1%',
            right: '20%',
  
            symbolSize: 7,
  
            label: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right',
              fontSize: 16,
              textStyle: {
                color: 'red',
                fontWeight: '700'
              }
            },
  
            leaves: {
              label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
              }
            },
  
            emphasis: {
              focus: 'descendant'
            },
  
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      






    };
    } 
}

