import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component'

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
