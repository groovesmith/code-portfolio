import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { interval, startWith, map } from 'rxjs';

@Component({
  selector: 'app-date-time',
  imports: [CardModule, CommonModule],
  templateUrl: './date-time.html',
  styleUrl: './date-time.scss',
})
export class DateTime {
  @Input() curentCity: string = 'City';
  /** Observable that emits current Date every second; use async-pipe in template */
  current$ = interval(1000).pipe(
    startWith(0),
    map(() => new Date())
  );
}
