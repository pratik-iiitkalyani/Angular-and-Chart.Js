import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { LineChartWithScrollableYAxisComponent } from './components/line-chart-with-scrollable-y-axis/line-chart-with-scrollable-y-axis.component';
import { BarChartFilterComponent } from './components/bar-chart-filter/bar-chart-filter.component'

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    LineChartComponent,
    LineChartWithScrollableYAxisComponent,
    BarChartFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
