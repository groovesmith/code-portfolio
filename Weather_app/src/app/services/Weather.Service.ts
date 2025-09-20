import { Injectable } from '@angular/core';
import { from, map } from 'rxjs';
import { fetchWeatherApi } from 'openmeteo';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly url = 'https://api.open-meteo.com/v1/forecast';

  private readonly params = {
    latitude: 56.1518,
    longitude: 10.2064,
    wind_speed_unit: 'ms',
    daily: [
      'weather_code',
      'temperature_2m_max',
      'temperature_2m_min',
      'apparent_temperature_max',
      'apparent_temperature_min',
      'uv_index_clear_sky_max',
      'uv_index_max',
      'sunrise',
      'sunset',
      'rain_sum',
      'showers_sum',
      'precipitation_sum',
      'snowfall_sum',
      'precipitation_hours',
      'precipitation_probability_max',
      'wind_direction_10m_dominant',
      'wind_gusts_10m_max',
      'wind_speed_10m_max',
    ],
    hourly: [
      'weather_code',
      'temperature_2m',
      'precipitation',
      'wind_speed_10m',
      'wind_direction_10m',
    ],
    current: [
      'is_day',
      'apparent_temperature',
      'relative_humidity_2m',
      'temperature_2m',
      'weather_code',
      'wind_speed_10m',
      'wind_direction_10m',
      'wind_gusts_10m',
      'cloud_cover',
      'precipitation',
      'surface_pressure',
    ],
    timezone: 'auto',
  };

  getWeather() {
    return from(fetchWeatherApi(this.url, this.params)).pipe(
      map((responses) => {
        const response = responses[0];

        const current = response.current()!;
        const hourly = response.hourly()!;
        const daily = response.daily()!;

        // Define variables so they can be processed accordingly
        const sunrise = daily.variables(7)!;
        const sunset = daily.variables(8)!;

        // Generate all hourly timestamps
        const allHourlyTimes = [
          ...Array((Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval()),
        ].map((_, i) => Number(hourly.time()) + i * hourly.interval());

        const nowTimestamp = Math.floor(Date.now() / 1000);

        // Find the index of the current hour
        const startIndex = allHourlyTimes.findIndex((t) => t >= nowTimestamp);

        // Take next hour + next 4 hours for 5 hour forecast
        const endIndex = startIndex + 5;

        return {
          current: {
            time: new Date(Number(current.time()) * 1000),
            is_day: current.variables(0)!.value(),
            apparent_temperature: current.variables(1)!.value().toFixed(1),
            relative_humidity: current.variables(2)!.value(),
            temperature: current.variables(3)!.value().toFixed(1),
            weather_code: current.variables(4)!.value(),
            wind_speed: current.variables(5)!.value().toFixed(1),
            wind_direction: current.variables(6)!.value(),
            wind_gusts: current.variables(7)!.value().toFixed(1),
            cloud_cover: current.variables(8)!.value(),
            precipitation: current.variables(9)!.value().toFixed(1),
            surface_pressure: current.variables(10)!.value().toFixed(1),
          },
          hourly: {
            time: allHourlyTimes.slice(startIndex, endIndex).map((t) => new Date(t * 1000)),
            weather_code: hourly.variables(0)!.valuesArray()?.slice(startIndex, endIndex),
            temperature_2m: hourly.variables(1)!.valuesArray()?.slice(startIndex, endIndex),
            precipitation: hourly.variables(2)!.valuesArray()?.slice(startIndex, endIndex),
            wind_speed_10m: hourly.variables(3)!.valuesArray()?.slice(startIndex, endIndex),
            wind_direction_10m: hourly.variables(4)!.valuesArray()?.slice(startIndex, endIndex),
          },
          daily: {
            time: [
              ...Array((Number(daily.timeEnd()) - Number(daily.time())) / daily.interval()),
            ].map((_, i) => new Date((Number(daily.time()) + i * daily.interval()) * 1000)),
            weather_code: daily.variables(0)!.valuesArray(),
            temperature_2m_max: daily.variables(1)!.valuesArray(),
            temperature_2m_min: daily.variables(2)!.valuesArray(),
            apparent_temperature_max: daily.variables(3)!.valuesArray(),
            apparent_temperature_min: daily.variables(4)!.valuesArray(),
            uv_index_clear_sky_max: daily.variables(5)!.valuesArray(),
            uv_index_max: daily.variables(6)!.valuesArray(),
            sunrise: [...Array(sunrise.valuesInt64Length())].map(
              (_, i) => new Date(Number(sunrise.valuesInt64(i)) * 1000)
            ),
            sunset: [...Array(sunset.valuesInt64Length())].map(
              (_, i) => new Date(Number(sunset.valuesInt64(i)) * 1000)
            ),
            precipitation_sum: daily.variables(11)!.valuesArray(),
          },
        };
      })
    );
  }
}
