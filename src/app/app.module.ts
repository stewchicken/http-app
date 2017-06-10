//import modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { ToastModule } from "ng2-toastr";
//import component
import { AppComponent } from './app.component';
import { routingComponents } from './app-routing.module';
import { DhldetailComponent } from './dhl/dhldetail.component';
import { BpostdetailComponent } from './bpost/bpostdetail.component';
import { UserloginComponent } from './user/userlogin.component';
import { UserregisterComponent } from './user/userregister.component';
import { AlertComponent } from './alert/alert.component';
// import services
import { RestService } from "app/rest.service";
import { AlertService} from "app/alert.service";


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DhldetailComponent,
    BpostdetailComponent,
    UserloginComponent,
    UserregisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    FormsModule,
    ToastModule.forRoot(),
    AppRoutingModule
  ],
  providers: [RestService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
