import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestService } from "app/rest.service";
import { Parcel } from "app/dhl/parcel";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dhl',
  templateUrl: './dhl.component.html',
  styleUrls: ['./dhl.component.css']
})
export class DhlComponent implements OnInit, OnDestroy {
  dhls: Parcel[];
  navigated=false;//true if navigated here
  constructor(private restService: RestService, private router: Router) {
  }

  ngOnInit() {
    console.log("ngOnInit DHL is called ");
    this.restService.getDHLs().subscribe(
      (data: any) => {
        console.log("data ###### " + data);
        this.dhls = data;
      }
    )
  }
  onSelect(dhl :Parcel) {
    this.router.navigate(['/dhl', dhl.number]);
  }
  ngOnDestroy() {

    console.log("DHL ngOnDestory##### is called ");
  }

  getDhls() {
    console.log("getDhls is called");
    this.restService.getDHLs().subscribe(
      (data: any) => {
        console.log("data ###### " + data);
        this.dhls = data;
      }
    )

  }

  goBack():void{
    console.log("goBack() "+this.navigated);
    //if(this.navigated){
      window.history.back();
    //}

  }
}
