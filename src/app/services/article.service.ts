import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  public getArticles(n?: number): Observable<any> {
    if (n) {
      return this.http.get("http://localhost:3000/api/articles?n=" + n);
    } else {
      return this.http.get("http://localhost:3000/api/articles");
    }
  }

  public getAllCategories(): Observable<any> {
    return this.http.get("http://localhost:3000/api/categories");
  }

  public addArticle(formData: FormData): Observable<any> {
    return this.http.post<any>("http://localhost:3000/api/articles", formData);
  }

  public getArticle(articleId: string): Observable<any> {
    return this.http.get("http://localhost:3000/api/articles/" + articleId);
  }

  public deleteArticle(articleId: string): Observable<any> {
    return this.http.delete("http://localhost:3000/api/articles/" + articleId);
  }

  public getUsersArticles(userId: string): Observable<any> {
    return this.http.get("http://localhost:3000/api/articles/user/" + userId);
  }

  public getArticlesFromCategory(
    categoryId: string,
    n?: number
  ): Observable<any> {
    if (n) {
      return this.http.get(
        "http://localhost:3000/api/articles/category/" + categoryId + "?n=" + n
      );
    } else {
      return this.http.get(
        "http://localhost:3000/api/articles/category/" + categoryId
      );
    }
  }

  public getPopularArticles(categoryId: string, n: number): Observable<any> {
    return this.http.get(
      "http://localhost:3000/api/articles/bestarticles/" +
        categoryId +
        "?n=" +
        n
    );
  }

  public getImage(articleId: string): Observable<Blob> {
    return this.http.get(
      "http://localhost:3000/api/articles/img/" + articleId,
      { responseType: "blob" }
    );
  }

  public likeArticle(articleId: string, userId: string): Observable<any> {
    return this.http.post<any>(
      "http://localhost:3000/api/articles/" + userId + "/like/" + articleId,
      ""
    );
  }

  public dislikeArticle(articleId: string, userId: string): Observable<any> {
    return this.http.post<any>(
      "http://localhost:3000/api/articles/" + userId + "/dislike/" + articleId,
      ""
    );
  }

  public commentArticle(
    articleId: string,
    userId: string,
    usersComment: string
  ): Observable<any> {
    return this.http.post<any>(
      "http://localhost:3000/api/articles/" + userId + "/comment/" + articleId,
      { comment: usersComment }
    );
  }

  public getCommentsOnArticle(articleId: string): Observable<any> {
    return this.http.get<any>(
      "http://localhost:3000/api/articles/" + articleId + "/comments/"
    );
  }
}
