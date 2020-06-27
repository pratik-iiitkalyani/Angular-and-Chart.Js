import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-line-chart-with-scrollable-y-axis',
  templateUrl: './line-chart-with-scrollable-y-axis.component.html',
  styleUrls: ['./line-chart-with-scrollable-y-axis.component.css']
})
export class LineChartWithScrollableYAxisComponent implements OnInit {
  chart;
  canvas: any;
  ctx: any;

  // chart = <any>[];
  constructor() { }

  ngOnInit() {
  this.chart = new Chart('myChart', {
    type: 'line',
    data: {
      labels: ['26th Dec 0:00 GMT', '26th Dec 1:00 GMT', '26th Dec 2:00 GMT', '26th Dec 3:00 GMT', '26th Dec 4:00 GMT', '26th Dec 5:00 GMT', '26th Dec 6:00 GMT', '26th Dec 8:00 GMT', '26th Dec 9:00 GMT', '26th Dec 10:00 GMT','26th Dec 11:00 GMT', '26th Dec 12:00 GMT', '26th Dec 13:00 GMT', '26th Dec 14:00 GMT', '26th Dec 15:00 GMT', '26th Dec 16:00 GMT', '26th Dec 17:00 GMT', '26th Dec 18:00 GMT','26th Dec 19:00 GMT', '26th Dec 20:00 GMT','26th Dec 21:00 GMT', '26th Dec 22:00 GMT', '26th Dec 23:00 GMT'],
      datasets: [{
        label: 'Users',
        backgroundColor: "rgba(255, 99, 132,0.4)",
        borderColor: "rgb(255, 99, 132)",
        fill: true,
        data: [0,0,0,1,3,2,1,7,9,8, 0,1,2,1,0,2,0,0,0,2,1,2,3,4],
        // data: [
        //   { x: 1, y: 2 },
        //   { x: 2500, y: 2.5 },
        //   { x: 3000, y: 5 },
        //   { x: 3400, y: 4.75 },
        //   { x: 3600, y: 4.75 },
        //   { x: 5200, y: 6 },
        //   { x: 6000, y: 12 },
        //   { x: 7100, y: 6 },
        // ],
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Höhenlinie'
      },
      scales: {
        xAxes: [{
          type: 'linear',
          position: 'bottom',
          ticks: {
          },
          scaleLabel: {
            labelString: 'Länge',
            display: true,
          }
        }],
        yAxes: [{
          type: 'linear',
          ticks: {
            // callback: function (tick) {
            //   return tick.toString();
            // }
          },
        }],
      }
    }
  });

  } 

}
