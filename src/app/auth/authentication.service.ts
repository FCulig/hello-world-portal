import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import { UserService } from "../services/user.service";
import { User } from '../entities/user';

export interface UserDetails {
  _id: string;
  expires: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  _id: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private token: string;
  user: User;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
  ) {}

  public login(email, password) {
    this.userService.login(email, password).subscribe(val => {
      this.saveToken(val.token);
      const usr = new User(val.username, val.email, val.id);
      this.user = usr;
      localStorage.setItem("user-id", val.id);
      localStorage.setItem("username", val.username);
      localStorage.setItem("role", val.role);
      this.router.navigate(["/"]);
    });
  }

  public getRole(){
    return localStorage.getItem("role");
  }

  private saveToken(token: string): void {
    localStorage.setItem("mean-token", token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("mean-token");
    }
    return this.token;
  }

  public logout(): void {
    this.token = "";
    window.localStorage.removeItem("mean-token");
    this.router.navigateByUrl("/");
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split(".")[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.expires > Date.now() / 1000;
    } else {
      return false;
    }
  }
}
