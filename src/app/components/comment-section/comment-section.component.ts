import { Component, OnInit, Input } from "@angular/core";

import {
  faThumbsUp,
  faThumbsDown,
  faKey
} from "@fortawesome/free-solid-svg-icons";
import { ArticleService } from "src/app/services/article.service";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { AuthenticationService } from "src/app/auth/authentication.service";

@Component({
  selector: "app-comment-section",
  templateUrl: "./comment-section.component.html",
  styleUrls: ["./comment-section.component.scss"]
})
export class CommentSectionComponent implements OnInit {
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faKey = faKey;

  @Input() articleId;

  @Input() articleLikes: any[];
  @Input() articleDislikes: any[];
  @Input() articleComments: any[];

  @Input() liked = false;
  @Input() disliked = false;

  addComment: FormGroup;

  constructor(
    private articleService: ArticleService,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.createForm();
    this.setBooleans();
  }

  private createForm() {
    this.addComment = this.formBuilder.group({
      comment: [null, [Validators.required]]
    });
  }

  like() {
    this.articleService
      .likeArticle(this.articleId, localStorage.getItem("user-id"))
      .subscribe(val => {
        this.updateReactions(val);
      });
  }

  dislike() {
    this.articleService
      .dislikeArticle(this.articleId, localStorage.getItem("user-id"))
      .subscribe(val => {
        this.updateReactions(val);
      });
  }

  isLiked() {
    return this.liked;
  }

  isDisliked() {
    return this.disliked;
  }

  postComment() {
    this.articleService
      .commentArticle(
        this.articleId,
        localStorage.getItem("user-id"),
        this.comment
      )
      .subscribe(val => {
        this.updateComments(this.articleId);
      });

    this.addComment.reset();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  parseDate(date: string) {
    let finalDate = "";

    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);

    let hour = date.substring(11, 13);
    let minutes = date.substring(14, 16);

    finalDate =
      hour + ":" + minutes + " " + day + "." + month + "." + year + ".";

    return finalDate;
  }

  private updateComments(articleId: string) {
    this.articleService.getCommentsOnArticle(articleId).subscribe(comments => {
      this.setComments(comments);
    });
  }

  private setComments(comments) {
    this.articleComments = comments;
  }

  private updateReactions(aritcle: any) {
    this.setReacions(aritcle);
    this.setBooleans();
  }

  private setReacions(aritcle: any) {
    this.articleLikes = aritcle.likes;
    this.articleDislikes = aritcle.dislikes;
  }

  private setBooleans() {
    this.setLiked();
    this.setDisliked();
  }

  private setLiked() {
    this.articleLikes.forEach(val => {
      if (val._id === localStorage.getItem("user-id")) {
        this.liked = true;
      }
    });
  }

  private setDisliked() {
    this.articleDislikes.forEach(val => {
      if (val._id === localStorage.getItem("user-id")) {
        this.disliked = true;
      }
    });
  }

  get comment() {
    return this.addComment.value.comment;
  }
}
