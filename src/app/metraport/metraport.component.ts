import { Component } from '@angular/core';
//import { FileSaverService } from 'ngx-filesaver';
//import FileSaver from "file-saver";
//import { products } from '../products';

@Component({
  selector: 'metraport-component',
  templateUrl: './metraport.component.html',
  styleUrls: ['./metraport.component.scss']
})
export class MetraportComponent {

//  constructor(private _httpClient: HttpClient, private _FileSaverService: FileSaverService) {
//  }

//constructor(private _FileSaverService: FileSaverService) {

//}

  downloadPdf() {
    const pdfUrl = "http://185.174.163.35/metoodika/mraport.pdf";


    //  "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
    // const pdfUrl =
    //   "https://staging.safegold.com/display/sales-invoice/da771e90-aa8f-4147-bc7c-805b73bb1283";
    const pdfName = "invoice.pdf";
    //FileSaver.saveAs(pdfUrl, pdfName);
   // this._FileSaverService.save(pdfUrl, pdfName);
  }
  
}