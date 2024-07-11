
import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "disain1-component",
  templateUrl: "./disain1.component.html",
  styleUrls: ["./disain1.component.css"]
})
export class AppComponent {
  title = "angular-material-tab-router";
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: "First",
        link: "./first",
        index: 0
      },
      {
        label: "Second",
        link: "./second",
        index: 1
      },
      {
        label: "Third",
        link: "./third",
        index: 2
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe(res => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find(tab => tab.link === "." + this.router.url)
      );
    });
  }
}