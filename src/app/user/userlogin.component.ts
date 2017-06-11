import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from "app/auth.service";
import { AlertService } from "app/alert.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})

export class UserloginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private alertService: AlertService) {

  }

  ngOnInit() {
    console.log("LogIn ngOnInit is called......");
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        // how to get this Error Message
        console.log("here is error "+  error);
        this.alertService.error(error);
        this.loading = false;
      });
  }
}
