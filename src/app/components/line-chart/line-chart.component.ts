import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

chart = <any>[];

  constructor() { }

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['26th Dec 0:00 GMT', '26th Dec 1:00 GMT', '26th Dec 2:00 GMT', '26th Dec 3:00 GMT', '26th Dec 4:00 GMT', '26th Dec 5:00 GMT', '26th Dec 6:00 GMT', '26th Dec 8:00 GMT', '26th Dec 9:00 GMT', '26th Dec 10:00 GMT','26th Dec 11:00 GMT', '26th Dec 12:00 GMT', '26th Dec 13:00 GMT', '26th Dec 14:00 GMT', '26th Dec 15:00 GMT', '26th Dec 16:00 GMT', '26th Dec 17:00 GMT', '26th Dec 18:00 GMT','26th Dec 19:00 GMT', '26th Dec 20:00 GMT','26th Dec 21:00 GMT', '26th Dec 22:00 GMT', '26th Dec 23:00 GMT'],
        datasets: [
          {
            label: 'Users',
            data: [0,0,0,1,3,2,1,7,9,8, 0,1,2,1,0,2,0,0,0,2,1,2,3,4],
            backgroundColor: 'red',
            borderColor: '#f54053',
            fill: 'true'
          },
          // {
          //   label: 'M',
          //   data: [0,0,0,1,3,2,1,7,9,8, 0].reverse(),
          //   backgroundColor: 'blue',
          //   borderColor: 'blue',
          //   fill: 'false'  
          // }
        ]
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                  max: 10,
                  min: 0,
                  stepSize: 1
                }
            }],
            xAxes: [{
              ticks: {
                autoSkip: false,
                maxRotation: 90,
                minRotation: 90
              }
            }]
        }
      },
    });
  }

}
