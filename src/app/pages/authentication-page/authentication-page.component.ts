import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.scss']
})
export class AuthenticationPageComponent implements OnInit {

  type: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(val => {
      this.type = val.type;
    });
  }

  changeType() {
    if (this.type === 'login') {
      this.type = 'register';
    } else {
      this.type = 'login';
    }
  }
}
