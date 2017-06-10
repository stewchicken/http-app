import { Component, OnInit } from '@angular/core';
import { RestService } from "app/rest.service";
import { Router } from "@angular/router";
import { Parcel } from "app/dhl/parcel";

@Component({
  selector: 'app-bpost',
  templateUrl: './bpost.component.html',
  styleUrls: ['./bpost.component.css']
})
export class BpostComponent implements OnInit {
  bposts: Parcel[];
  bpost: Parcel;
  constructor(private restService: RestService, private router: Router) {
  }
  onSelect(bpost: Parcel) {
    this.router.navigate(['/bpost', bpost.number]);
  }

  ngOnInit() {
    console.log("ngOnInit is called ");
    this.restService.getBposts().subscribe(
      (data: any) => {
        console.log("data in ngOnInit ###### " + data);
        this.bposts = data;
      }
    )
  }

  goBack(): void {
    //if(this.navigated){
    window.history.back();
    //}

  }
}
