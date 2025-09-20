import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { weatherIconMap } from '../../../../core/weather-icon-map';
@Component({
  selector: 'app-forcast-hourly',
  imports: [CardModule, CommonModule],
  templateUrl: './forcast-hourly.html',
  styleUrl: './forcast-hourly.scss',
})
export class ForcastHourly {
  @Input() weather: any;
  getWeatherIcon(weatherCode: number): string {
    return '/images/animated/' + (weatherIconMap[weatherCode] || 'day.svg');
  }
}
