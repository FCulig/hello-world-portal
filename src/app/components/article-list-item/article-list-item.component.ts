import { Component, OnInit, Input } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: "app-article-list-item",
  templateUrl: "./article-list-item.component.html",
  styleUrls: ["./article-list-item.component.scss"]
})
export class ArticleListItemComponent implements OnInit {
  @Input() item;
  image: any;

  constructor(
    private sanitizer: DomSanitizer,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.getImage(this.item._id)
  }

  downloadFile(data) {
    let objectURL = URL.createObjectURL(data);
    this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  getImage(id: string) {
    this.articleService.getImage(id).subscribe(
      result => {
        this.downloadFile(result);
      },
      error => {
        console.log(error);
      }
    );
  }
}
