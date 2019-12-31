import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { ArticleService } from "src/app/services/article.service";

@Component({
  selector: "app-profile-page",
  templateUrl: "./profile-page.component.html",
  styleUrls: ["./profile-page.component.scss"]
})
export class ProfilePageComponent implements OnInit {
  userId: string;

  user;

  userArticles;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get("id");
    this.getUser(this.userId);
    this.getUsersArticles(this.userId);
  }

  private getUser(id: string) {
    this.userService.getUser(id).subscribe(val => {
      this.user = val;
    });
  }

  private getUsersArticles(id: string) {
    this.articleService.getUsersArticles(id).subscribe(val => {
      this.userArticles = val;
    });
  }

  isLoading() {
    return this.user && this.userArticles;
  }
}
