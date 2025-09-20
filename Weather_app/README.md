# Local Weather Dashboard (Better Developers task)

This Angular app is a Local Weather Dashboard for a fixed office location:
**Rosenkrantzgade 19B, 8000 Aarhus** (lat: `56.1518`, lon: `10.2064`).

It uses the public **Open-Meteo API** to fetch:
- Current weather (temperature, wind speed, humidity)
- 7-day forecast (daily min/max, precipitation summary)

## Demo / Features
- Clean dashboard showing current conditions and 7-day forecast
- PrimeNG UI components & theme
- Client-side caching (observable + shareReplay)
- Mocked fallback data available in `assets/mock-weather.json` so demo works offline
- Unit tests for service mapping + component rendering

## Tech
- Angular (latest)
- TypeScript
- PrimeNG (UI)
- Open-Meteo API (no API key required)

## Run locally
1. Clone:
```bash
git clone https://github.com/groovesmith/angular-showcase.git
cd angular-showcase/weather-app
```

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
