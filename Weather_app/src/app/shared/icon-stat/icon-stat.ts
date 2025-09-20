import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-stat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-stat.html',
  styleUrl: './icon-stat.scss',
})
export class IconStat {
  @Input() icon?: string; // either a path '/assets/...' or a CSS class for icon fonts
  @Input() label = '';
  @Input() value: string | number | null = null;
  @Input() unit?: string;

  isImg(src: string) {
    return (
      src &&
      (src.endsWith('.svg') ||
        src.endsWith('.png') ||
        src.startsWith('/') ||
        src.startsWith('http'))
    );
  }
}
