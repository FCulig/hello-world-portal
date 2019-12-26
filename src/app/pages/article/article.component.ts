import { Component, OnInit, Input } from "@angular/core";
import { ArticleService } from "src/app/services/article.service";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {
  image: any;
  @Input() article: any;
  id: string;

  constructor(
    private articleService: ArticleService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getImage(this.id);
    this.getArticle(this.id);
  }

  isLoading() {
    return this.article;
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
