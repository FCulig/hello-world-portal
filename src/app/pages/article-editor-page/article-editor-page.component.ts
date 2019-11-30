import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { ArticleService } from "src/app/services/article.service";
import { Category } from "src/app/entities/category";

@Component({
  selector: "app-article-editor-page",
  templateUrl: "./article-editor-page.component.html",
  styleUrls: ["./article-editor-page.component.scss"]
})
export class ArticleEditorPageComponent implements OnInit {
  articleForm: FormGroup;

  categories = [];

  constructor(
    private articleService: ArticleService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getCategories();
    this.createForm();
  }

  private getCategories() {
    this.articleService.getAllCategories().subscribe((data: any[]) => {
      this.categories = data;
    });
  }

  onFileSelect(event) {
    if (event.target.files.length == 1) {
      const file = event.target.files[0];
      this.articleForm.get("img").setValue(file);
    }
  }

  private createForm() {
    this.articleForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      shortDesc: [null, [Validators.required]],
      fullArticle: [null, [Validators.required]],
      category: [null, [Validators.required]],
      img: [null, [Validators.required]]
    });
  }

  onSubmit() {
    let formData = new FormData();
    formData.append("image", this.articleForm.get("img").value);
    formData.append("title", this.articleForm.get("title").value);
    formData.append("categoryId", this.articleForm.get("category").value);
    formData.append("shortDescription", this.articleForm.get("shortDesc").value);
    formData.append("article", this.articleForm.get("fullArticle").value);
    formData.append("authorId", localStorage.getItem("user-id"));
    console.log(this.articleForm.get("category").value)
    this.articleService.addArticle(formData).subscribe(val=>{
      console.log(val);
    })
  }
}
