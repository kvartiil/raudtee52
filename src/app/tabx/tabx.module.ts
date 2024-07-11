import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxGaugeModule } from 'ngx-gauge';


import { Koondind7Component } from '../koondind7/koondind7.component';
import { Yld1Component } from '../yld1/yld1.component';

@NgModule({
  imports: [
    BrowserModule,
    NgxGaugeModule,
    ReactiveFormsModule
      ],
  declarations: [
    
    Koondind7Component
   
    
    
  ]
})
export class TabxModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/