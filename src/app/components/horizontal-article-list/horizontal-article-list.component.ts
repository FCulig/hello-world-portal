import { Component, OnInit, Input } from "@angular/core";
import { ArticleService } from "src/app/services/article.service";

@Component({
  selector: "app-horizontal-article-list",
  templateUrl: "./horizontal-article-list.component.html",
  styleUrls: ["./horizontal-article-list.component.scss"]
})
export class HorizontalArticleListComponent implements OnInit {
  @Input() categoryId: string;
  articles;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.getArticles();
  }

  private getArticles() {
    if (this.categoryId) {
      this.articleService.getArticlesFromCategory(this.categoryId, 5).subscribe(val=>{
        this.articles = val;
      })
    } else {
      this.articleService.getArticles(5).subscribe(val => {
        this.articles = val;
      });
    }
  }
}
