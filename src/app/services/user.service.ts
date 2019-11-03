import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  public login(email: string, password: string): Observable<any> {
    return this.http.post("http://localhost:3000/api/auth/login", {
      email: email,
      password: password
    });
  }

  public register(username: string, email: string, password: string): Observable<any>{
    return this.http.post("http://localhost:3000/api/auth/register", {
      name: username,
      email: email,
      password: password,
    });
  }
}
