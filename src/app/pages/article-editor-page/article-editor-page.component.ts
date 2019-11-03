import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-article-editor-page',
  templateUrl: './article-editor-page.component.html',
  styleUrls: ['./article-editor-page.component.scss']
})
export class ArticleEditorPageComponent implements OnInit {
  articleForm = new FormGroup({

  });

  constructor() { }

  ngOnInit() {
  }

}
