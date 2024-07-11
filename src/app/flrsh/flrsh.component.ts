import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'flrsh',
  templateUrl: './flrsh.component.html',
  styleUrls: ['./flrsh.component.scss'],
})
export class FlrshComponent {
  name = 'Angular Iframe Src';
  url: string = 'https://interstat.info/Elujoud/Disain/Florish/florish3.html';
  urlSafe:any;
  //this.urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}