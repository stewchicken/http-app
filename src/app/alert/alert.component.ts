import { Component, OnInit } from '@angular/core';
import { AlertService } from "app/alert.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  message: any;
  constructor(private alertService: AlertService) {
    console.log("alert compoent construtor is called ......");
  }


  ngOnInit() {
    this.alertService.getMessage().subscribe(message => { this.message = message; });
  }

}
