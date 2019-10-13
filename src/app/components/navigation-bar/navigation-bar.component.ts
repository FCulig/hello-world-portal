import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.scss"]
})
export class NavigationBarComponent implements OnInit {
  scrolled: boolean = false;

  constructor() {}

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    let element = document.querySelector(".menu-bar");

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 80) {
      element.classList.add("scroll");
      this.scrolled = true;
    }else {
      element.classList.remove("scroll");
      this.scrolled = false
    }
  }
}
