import {
  Component,
  OnInit,
  HostListener,
  Renderer2,
  ElementRef,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: "app-navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.scss"]
})
export class NavigationBarComponent implements OnInit {
  faUserCircle = faUserCircle;

  scrolled = false;
  loggedIn = false;

  userId: number;
  categories;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router,
    private authService: AuthenticationService,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.getCategories();
  }

  private getCategories(){
    this.articleService.getAllCategories().subscribe(cats=>{
      this.categories = cats;
    })
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
      const element = document.querySelector(".menu-bar");

      const number =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      if (number > 80) {
        element.classList.add("scroll");
        this.scrolled = true;
      } else {
        element.classList.remove("scroll");
        this.scrolled = false;
      }

  }

  isLoggedIn(): boolean{
      return this.authService.isLoggedIn();
  }

  logout(){
      this.authService.logout();
  }

  getUsername(){
    if(this.authService.isLoggedIn()){
      return localStorage.getItem('username');
    }
  }
}
