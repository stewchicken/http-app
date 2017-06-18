
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DhlComponent } from './dhl/dhl.component';
import { BpostComponent } from './bpost/bpost.component';
import { DhldetailComponent } from "app/dhl/dhldetail.component";
import { BpostdetailComponent } from "app/bpost/bpostdetail.component";
import { UserloginComponent } from './user/userlogin.component';
import { UserregisterComponent } from './user/userregister.component';
import { AuthGuard } from "app/auth.guard";

const routes: Routes = [
    { path: 'dhl', component: DhlComponent },
    { path: 'bpost', component: BpostComponent },
    { path: 'dhl/:id', component: DhldetailComponent },
    { path: 'bpost/:id', component: BpostdetailComponent, canActivate: [AuthGuard] },
    {
        path: 'chart',
        loadChildren: './chart/chart.module#ChartModule'
    },
    { path: 'login', component: UserloginComponent },
    { path: 'register', component: UserregisterComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
export const routingComponents = [DhlComponent, BpostComponent, DhldetailComponent,
    BpostdetailComponent, UserloginComponent, UserregisterComponent]