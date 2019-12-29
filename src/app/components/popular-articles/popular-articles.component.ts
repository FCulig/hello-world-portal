import { Component, OnInit, Input } from "@angular/core";
import { ArticleService } from "src/app/services/article.service";

@Component({
  selector: "app-popular-articles",
  templateUrl: "./popular-articles.component.html",
  styleUrls: ["./popular-articles.component.scss"]
})
export class PopularArticlesComponent implements OnInit {
  articles;
  images = new Map<string, any>();

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.getPopularArticles("all", 5);
  }

  private getPopularArticles(category: string, n: number) {
    this.articleService.getPopularArticles(category, n).subscribe(val => {
      this.setArticles(val);
    });
  }

  private setArticles(a){
    this.articles = a;
    this.getImages();
  }

  private getImages(){
    //console.log("Dohvacanje slika:")

    //console.log(this.articles)

    this.articles.forEach(e => {
      this.articleService.getImage(e._id).subscribe(val=>{
        this.images.set(e._id, val);
        //console.log(val)
      })
    });

    //console.log("Gotovo dohvacanje slika")
    //console.log(this.images.values[0]);
  }

  imgaaa(){
    
  }
}
