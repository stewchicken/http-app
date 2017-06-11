import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from "app/rest.service";
import { AlertService } from "app/alert.service";

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  model: any = {};
  loading = false;
  constructor(
    private router: Router,
    private restService: RestService,
    private alertService: AlertService
  ) {

    console.log("UserRegister constructor is called ");

  }

  ngOnInit() {
    console.log("UserRegister ngInit() is called ");
  }

  register() {
    this.loading = true;

    this.restService.getUser(this.model).subscribe(
      data => {
        if (data.length > 0) {
          console.log("##### user register duplicate error ###### ");
          this.alertService.error("user register duplicate error");
          this.loading = false;
        } else {
          this.restService.postUser(this.model)
            .subscribe(
            data => {
              console.log("##### user register data ###### " + data);
              console.log("##### user register ###### data[0] " + data[0]);
              this.alertService.success('Registration successful', true);
              this.router.navigate(['/login']);
            },
            error => {
              console.log("##### user register error ###### " + error);
              this.alertService.error(error);
              this.loading = false;
            });

        }

      }
    )



  }

}
