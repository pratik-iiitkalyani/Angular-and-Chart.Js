import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';


const routes: Routes = [
  {path: 'bar-chart', component: BarChartComponent},
  {path: 'pie-chart', component: PieChartComponent},
  {path: 'doughnut-chart', component: DoughnutChartComponent},
  {path: 'radar-chart', component: RadarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
