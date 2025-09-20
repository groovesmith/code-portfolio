import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { weatherIconMap } from '../../../../core/weather-icon-map';

@Component({
  selector: 'app-forcast',
  imports: [CardModule, CommonModule],
  templateUrl: './forcast.html',
  styleUrl: './forcast.scss',
})
export class Forcast {
  getWeatherIcon(weatherCode: number): string {
    return '/images/animated/' + (weatherIconMap[weatherCode] || 'day.svg');
  }
  @Input() weather: any;
}
