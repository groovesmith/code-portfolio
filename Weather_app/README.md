# Local Weather Dashboard (Better Developers task)

![](/Weather_app/Weather-app-screenshot.png)

This Angular app is a Local Weather Dashboard for a fixed office location:
**Rosenkrantzgade 19B, 8000 Aarhus** (lat: `56.1518`, lon: `10.2064`).

It uses the public **Open-Meteo API** to fetch:

- Current weather (temperature, wind speed, humidity)
- 7-day forecast (daily min/max, precipitation summary)

## Demo / Features

- Clean dashboard showing time, current conditions, 7-day forecast, and 5-hourly forecast.

## Tech

- Node v22.19.0
- Angular v20.3.0
- TypeScript
- PrimeNG (UI)
- Open-Meteo API (no API key required)

## Run locally

1. Clone:

```bash
git clone https://github.com/groovesmith/code-portfolioe.git
cd code-portfolio/weather-app
```

2. Install node and angular CLI

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`.
