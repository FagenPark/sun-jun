import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
// @ts-ignore
import Chart = require('chart.js');
import {skillChartLabels, skillsData} from '../../app.constants';

@Component({
  selector: 'app-skill-chart',
  templateUrl: './skill-chart.component.html',
  styleUrls: ['./skill-chart.component.scss']
})
export class SkillChartComponent implements  OnChanges {
  @Input() chartLabel: string;
  axisLabels = skillChartLabels;
  skillsData = skillsData;
  constructor() {
  }

  private drawRadar(lbl) {
    if (!lbl) { return; }
    // @ts-ignore
    const ctxR = document.getElementById('skillChart').getContext('2d');
    const myRadarChart = new Chart(ctxR, {
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
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            boxWidth: 0,
            fontSize: 18,
            fontStyle: 'bold'
          }
        },
        scale: {
          angleLines: {
            display: true,
          },
          pointLabels: {
            fontSize: 16,
            lineHeight: 25
          },
          ticks: {
            suggestedMin: 20,
            suggestedMax: 100,
            stepSize: 20,
            backdropColor: 'transparent'
          }
        },
        responsive: true,
      }
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.drawRadar(this.chartLabel);
  }
}
