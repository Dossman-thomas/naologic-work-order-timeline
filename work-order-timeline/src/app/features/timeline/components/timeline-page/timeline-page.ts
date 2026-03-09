import { Component } from '@angular/core';
import { TimelineGrid } from '../timeline-grid/timeline-grid';

@Component({
  selector: 'app-timeline-page',
  standalone: true,
  imports: [TimelineGrid],
  templateUrl: './timeline-page.html',
  styleUrl: './timeline-page.scss',
})
export class TimelinePage {
  onTimescaleChange(event: Event) {
    // const scale = (event.target as HTMLSelectElement).value as Timescale;
    // this.timescale = scale;
    // this.generateTimeline();
  }
}
