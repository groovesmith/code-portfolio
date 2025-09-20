import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';

import { weatherIconMap } from '../../core/weather-icon-map';

import { DateTime } from './components/date-time/date-time';
import { CurrentWeather } from './components/current-weather/current-weather';
import { ForcastHourly } from './components/forcast-hourly/forcast-hourly';
import { Forcast } from './components/forcast/forcast';

@Component({
  selector: 'app-weather-dashboard',
  standalone: true,
  imports: [CommonModule, ImageModule, CurrentWeather, DateTime, Forcast, ForcastHourly],
  templateUrl: './weather-dashboard.html',
  styleUrl: './weather-dashboard.scss',
})
export class WeatherDashboard {
  @Input() weather: any;
  cityName: string = 'Rosenkrantzgade 12D, Aarhus C';

  getWeatherIcon(weatherCode: number): string {
    return '/images/animated/' + (weatherIconMap[weatherCode] || 'day.svg');
  }
}
