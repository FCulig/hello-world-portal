import { Component, OnInit, Input } from "@angular/core";
import { ArticleService } from "src/app/services/article.service";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { NotifierService } from 'angular-notifier';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {
  faTrash = faTrash;
  image: any;
  @Input() article: any;
  id: string;

  constructor(
    private articleService: ArticleService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private notifierService: NotifierService,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getImage(this.id);
    this.getArticle(this.id);
  }

  isLoading() {
    return this.article;
  }

  deleteArticle(){
    this.articleService.deleteArticle(this.id).subscribe(val=>{
      this.notifierService.notify("success", "Article deleted!");
      this.router.navigate(['/']);
    })
  }

  canDelete(){
    if(this.authService.isLoggedIn()){
      if(this.article.author._id === localStorage.getItem('user-id')){
        return true;
      }

      if(this.authService.getRole() === "ADMIN"){
        return true;
      }
    }

    return false;
  }

  private downloadFile(data) {
    let objectURL = URL.createObjectURL(data);
    this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  private getImage(id: string) {
    this.articleService.getImage(id).subscribe(result => {
      this.downloadFile(result);
    });
  }

  private getArticle(id: string) {
    this.articleService.getArticle(id).subscribe(art => {
      this.article = art;
    });
  }
}
