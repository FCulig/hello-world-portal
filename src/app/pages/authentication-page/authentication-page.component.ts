import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: "app-authentication-page",
  templateUrl: "./authentication-page.component.html",
  styleUrls: ["./authentication-page.component.scss"]
})
export class AuthenticationPageComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    passowrd: new FormControl(),
    repeatedPassword: new FormControl()
  });

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  type: string;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(val => {
      this.type = val.type;
    });
  }

  changeType() {
    if (this.type === "login") {
      this.type = "register";
    } else {
      this.type = "login";
    }
  }

  submitLogin() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }

  submitRegister() {
    console.log("Submit register");
  }
}
