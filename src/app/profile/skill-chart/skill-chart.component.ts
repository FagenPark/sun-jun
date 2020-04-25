import {Component, OnDestroy, OnInit} from '@angular/core';
// @ts-ignore
import Chart = require('chart.js');
import {TranslateService} from '@ngx-translate/core';
import {map, take, takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-skill-chart',
  templateUrl: './skill-chart.component.html',
  styleUrls: ['./skill-chart.component.scss']
})
export class SkillChartComponent implements OnInit, OnDestroy {
private isComponentActive = true;
  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
    this.iniChart();
    this.updateChartOnLangChange();
  }

  private updateChartOnLangChange() {
    this.translate.onLangChange.pipe(
      takeWhile(() => this.isComponentActive),
      map(e => e.translations)
    ).subscribe(
      this.handleLang()
    );
  }

  private iniChart() {
    this.translate.getTranslation(this.translate.getDefaultLang()).pipe(
      take(1)
    ).subscribe(
      this.handleLang()
    );
  }

  private handleLang() {
    return translations => this.drawRadar(translations.chartLabel, translations.chartLabels);
  }

  private drawRadar(lbl, lbls) {
    // @ts-ignore
    const ctxR = document.getElementById('skillChart').getContext('2d');
    const myRadarChart = new Chart(ctxR, {
      type: 'radar',
      data: {
        labels: lbls,
        datasets: [{
          label: lbl,
          data: [90, 80, 85, 70, 85, 70, 70],
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

  ngOnDestroy(): void {
    this.isComponentActive = false;
  }
}
