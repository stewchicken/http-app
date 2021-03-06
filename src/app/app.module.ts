//import modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { ToastModule } from "ng2-toastr";
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from "ng2-translate";

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
import { AlertService } from "app/alert.service";
import { AuthService } from "app/auth.service";
import { AuthGuard } from "app/auth.guard";
import { ChartComponent } from "app/chart/chart.component";

//import module for primeng 
import {TabViewModule} from 'primeng/primeng';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DhldetailComponent,
    BpostdetailComponent,
    UserloginComponent,
    UserregisterComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    TabViewModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    ToastModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AuthGuard, RestService, AlertService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
