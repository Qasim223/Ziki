import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  effect,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-dashboard',
  imports: [ChartModule, CardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  salesData: any;
  salesOptions: any;

  stockData: any;
  stockOptions: any;

  platformId = inject(PLATFORM_ID);

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.salesChart();
    this.stockChart();
  }

  salesChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue(
        '--p-text-muted-color'
      );
      const surfaceBorder = documentStyle.getPropertyValue(
        '--p-content-border-color'
      );

      this.salesData = {
        labels: [
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '10',
          '11',
          '12',
        ],
        datasets: [
          {
            label: 'Sales for the last 12 months',
            data: [
              540, 325, 702, 620, 425, 788, 765, 892, 930, 1201, 967, 1067,
            ],
            backgroundColor: documentStyle.getPropertyValue('--p-sky-500'),
            borderColor: documentStyle.getPropertyValue('--p-sky-500'),
            borderWidth: 1,
          },
        ],
      };

      this.salesOptions = {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
        },
      };
      this.cd.markForCheck();
    }
  }

  stockChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue(
        '--p-text-muted-color'
      );
      const surfaceBorder = documentStyle.getPropertyValue(
        '--p-content-border-color'
      );

      this.stockData = {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],

        datasets: [
          {
            type: 'bar',
            backgroundColor: documentStyle.getPropertyValue('--p-sky-100'),
            data: [50, 25, 12, 48, 90, 76, 42],
          },
          {
            type: 'bar',
            backgroundColor: documentStyle.getPropertyValue('--p-sky-500'),
            data: [21, 84, 24, 75, 37, 65, 34],
          },
          {
            type: 'bar',
            backgroundColor: documentStyle.getPropertyValue('--p-sky-950'),
            data: [41, 52, 24, 74, 23, 21, 32],
          },
        ],
      };

      this.stockOptions = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false,
          },
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
          y: {
            stacked: true,
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
        },
      };
      this.cd.markForCheck();
    }
  }
}
