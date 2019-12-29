import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  categories;

  constructor(private articleService : ArticleService) { }

  ngOnInit() {
    this.getAllCategories();
  }

  private getAllCategories(){
    this.articleService.getAllCategories().subscribe(val=>{
      this.categories = val
    })
  }
}
