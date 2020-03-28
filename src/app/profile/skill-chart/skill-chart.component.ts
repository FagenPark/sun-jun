import {Component, OnInit} from '@angular/core';
// @ts-ignore
import Chart = require('chart.js');

@Component({
  selector: 'app-skill-chart',
  templateUrl: './skill-chart.component.html',
  styleUrls: ['./skill-chart.component.scss']
})
export class SkillChartComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.drawRadar();
  }

  private drawRadar() {
    // radar
    // @ts-ignore
    const ctxR = document.getElementById('skillChart').getContext('2d');
    const myRadarChart = new Chart(ctxR, {
      type: 'radar',
      data: {
        labels: ['CSS', 'HTML', 'Angular', 'JavaScript', 'React', 'Node.js', '.Net'],
        datasets: [{
          label: 'Skill Metrics',
          data: [75, 80, 85, 85, 70, 70, 70],
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
}
