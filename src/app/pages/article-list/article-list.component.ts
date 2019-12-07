import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { ArticleService } from "src/app/services/article.service";

@Component({
  selector: "app-article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.scss"]
})
export class ArticleListComponent implements OnInit {
  articles: any[];

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.getArticles(this.route.snapshot.paramMap.get("id"));
  }

  getArticles(id: string) {
    this.articleService.getArticlesFromCategory(id).subscribe(val => {
      this.setArticles(val);
    });
  }

  setArticles(articles) {
    this.articles = articles;
  }
}
