import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { weatherIconMap } from '../../../../core/weather-icon-map';
import { weatherTextMap } from '../../../../core/weather-text-map';
import { IconStat } from '../../../../shared/icon-stat/icon-stat';

@Component({
  selector: 'app-current-weather',
  imports: [CardModule, CommonModule, IconStat],
  templateUrl: './current-weather.html',
  styleUrl: './current-weather.scss',
})
export class CurrentWeather {
  @Input() weather: any;

  getWeatherIcon(weatherCode: number): string {
    return '/images/animated/' + (weatherIconMap[weatherCode] || 'day.svg');
  }
  getCurentWeatherText(weatherCode: number): string {
    return weatherTextMap[weatherCode] || 'Clear sky';
  }
  getUvIcon(uv_index: number): number {
    return uv_index;
  }
}
