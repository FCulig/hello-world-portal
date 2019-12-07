import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  public getAllCategories(): Observable<any> {
    return this.http.get("http://localhost:3000/api/categories");
  }

  public addArticle(formData: FormData): Observable<any> {
    return this.http.post<any>("http://localhost:3000/api/articles", formData);
  }

  public getArticle(articleId: string): Observable<any> {
    return this.http.get(
      "http://localhost:3000/api/articles/"+articleId,
    );
  }

  public getImage(articleId: string): Observable<Blob> {
    return this.http.get(
      "http://localhost:3000/api/articles/img/"+articleId,
      { responseType: "blob" }
    );
  }

  public getArticlesFromCategory(categoryId: string): Observable<any> {
    return this.http.get(
      "http://localhost:3000/api/articles/category/" + categoryId
    );
  }
}
