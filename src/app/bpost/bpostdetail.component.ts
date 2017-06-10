import { Component, OnInit } from '@angular/core';
import { RestService } from "app/rest.service";
import { Parcel } from "app/dhl/parcel";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-bpostdetail',
  templateUrl: './bpostdetail.component.html',
  styleUrls: ['./bpostdetail.component.css']
})
export class BpostdetailComponent implements OnInit {

  bpost :Parcel;
  constructor(private restService: RestService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    let number = this.route.snapshot.params['id'];
    this.restService.getBpost(number).subscribe(
      (data: any) => {
        this.bpost = data[0];
      }
    );
  }

  goBack(): void {
    //if(this.navigated){
    window.history.back();
    //}

  }

}
