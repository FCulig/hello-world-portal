import { Component, OnInit, Input } from "@angular/core";
import { ArticleService } from "src/app/services/article.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-horizontal-article-list-item",
  templateUrl: "./horizontal-article-list-item.component.html",
  styleUrls: ["./horizontal-article-list-item.component.scss"]
})
export class HorizontalArticleListItemComponent implements OnInit {
  @Input() articleId: string;
  @Input() articleTitle: string;

  image;

  constructor(
    private articleService: ArticleService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.getImage(this.articleId);
  }

  private getImage(articleId: string) {
    this.articleService.getImage(articleId).subscribe(
      result => {
        this.downloadFile(result);
      },
      error => {
        console.log(error);
      }
    );
  }

  downloadFile(data) {
    let objectURL = URL.createObjectURL(data);
    this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }
}
