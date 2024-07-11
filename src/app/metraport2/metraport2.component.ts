import { Component, OnInit } from '@angular/core';
import { PdfService } from './pdf.service';
//import * as PDFObject from 'pdfobject';
declare const PDFObject: any;

//import { products } from '../products';

@Component({
  selector: 'metraport2-component',
  templateUrl: './metraport2.component.html',
  styleUrls: ['./metraport2.component.scss']
})
export class Metraport2Component implements OnInit {
  
  pdfData;
  isLoading = false;
  constructor(private pdfService: PdfService) {}

  ngOnInit() {
    this.isLoading = true;
    this.pdfService.getPdf().subscribe({
      next: (res) => {
        this.pdfData = res;
        this.isLoading = false;
        if (this.pdfData) {
          this.handleRenderPdf(this.pdfData);
        }
      },
    });
  }

  handleRenderPdf(data) {
    const pdfObject = PDFObject.embed(data, '#pdfContainer');
  }

}