import { NgModule } from '@angular/core';
import { ChartComponent } from './chart.component';
import { RouterModule } from "@angular/router";
import { chartRoutes } from "./chart.route";
import { EChartOptionDirective1 } from "./echart-option.directive";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "ng2-translate";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild(chartRoutes)
  ],
  exports: [
    ChartComponent
  ],
  declarations: [ChartComponent, EChartOptionDirective1]
})
export class ChartModule { }
