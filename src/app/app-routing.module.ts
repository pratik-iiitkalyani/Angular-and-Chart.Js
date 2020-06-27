import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { LineChartWithScrollableYAxisComponent } from './components/line-chart-with-scrollable-y-axis/line-chart-with-scrollable-y-axis.component';
import { BarChartFilterComponent } from "../app/components/bar-chart-filter/bar-chart-filter.component"
import { from } from 'rxjs';


const routes: Routes = [
  {path: 'bar-chart', component: BarChartComponent},
  {path: 'pie-chart', component: PieChartComponent},
  {path: 'doughnut-chart', component: DoughnutChartComponent},
  {path: 'radar-chart', component: RadarChartComponent},
  {path: 'line-chart', component: LineChartComponent},
  {path: 'line-chart-with-scrollable-y-axis',  component:LineChartWithScrollableYAxisComponent},
  {path: 'bar-chart-filter' ,component: BarChartFilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
