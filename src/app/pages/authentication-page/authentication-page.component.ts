import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
    password: new FormControl(),
    repeatedPassword: new FormControl()
  });

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  type: string;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private userService: UserService,
    private router: Router
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

  submitRegister(){
    if(this.registerForm.value.repeatedPassword === this.registerForm.value.password){
      this.userService.register(this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password).subscribe(val=>{
        if(val.success == 1){
          this.router.navigateByUrl("/authenticate?type=login");
        }
      });
    }else{
      //TODO: bacanje errora
    }
  }
}
