import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
// @ts-ignore
import Chart = require('chart.js');
import {skillChartLabels, skillsData} from '../../app.constants';

@Component({
  selector: 'app-skill-chart',
  templateUrl: './skill-chart.component.html',
  styleUrls: ['./skill-chart.component.scss']
})
export class SkillChartComponent implements OnChanges {
  @Input() chartLabel: string;
  axisLabels = skillChartLabels;
  skillsData = skillsData;

  constructor() {
  }

  private drawRadar(lbl) {
    if (!lbl) {
      return;
    }
    // @ts-ignore
    const ctxR = document.getElementById('skillChart').getContext('2d');
    const myChart = new Chart(ctxR, {
      type: 'radar',
      data: {
        labels: this.axisLabels,
        datasets: [{
          label: lbl,
          data: this.skillsData,
          backgroundColor: [
            'rgba(105, 0, 132, .2)',
          ],
          borderColor: [
            'rgba(200, 99, 132, .3)',
          ],
          borderWidth: 1
        }
        ]
      },
      options: {
        layout: {
          padding: 10
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            boxWidth: 0,
            fontSize: 24,
            fontStyle: 'bold'
          }
        },
        scale: {
          angleLines: {
            lineWidth: 2,
          },
          gridLines: {
            circular: true,
            lineWidth: 2,
            borderDash: [12, 8]
          },
          pointLabels: {
            fontSize: 16,
          },
          ticks: {
            suggestedMin: 20,
            suggestedMax: 100,
            stepSize: 20,
            backdropColor: 'transparent',
            fontSize: 16
          }
        },
        responsive: true,
        aspectRatio: 1
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.drawRadar(this.chartLabel);
  }
}
