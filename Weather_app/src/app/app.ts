import { Component, signal, ChangeDetectorRef } from '@angular/core';
import { WeatherService } from './services/Weather.Service';
import { CommonModule } from '@angular/common';
import { WeatherDashboard } from './features/weather-dashboard/weather-dashboard';

@Component({
  selector: 'app-root',
  imports: [CommonModule, WeatherDashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  weather: any;
  error: string | null = null;

  constructor(private weatherService: WeatherService, private cdr: ChangeDetectorRef) {
    this.weatherService.getWeather().subscribe({
      next: (data) => {
        this.weather = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.error = 'Failed to load weather';
      },
    });
  }
}
