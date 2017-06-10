import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from "app/rest.service";
import { Parcel } from "app/dhl/parcel";

@Component({
  selector: 'app-dhldetail',
  templateUrl: './dhldetail.component.html',
  styleUrls: ['./dhldetail.component.css']
})
export class DhldetailComponent implements OnInit {
  dhl: Parcel;
  navigated = false;
  constructor(private restService: RestService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    let number = this.route.snapshot.params['id'];
    this.restService.getDHL(number).subscribe(
      (data: any) => {
        //console.log("##### data[0] ###### " + data[0]);
        this.dhl = data[0];
      }
    );
  }

  goBack(): void {
    console.log("goBack() " + this.navigated);
    //if(this.navigated){
    window.history.back();
    //}

  }

}
