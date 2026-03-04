import { Component } from '@angular/core';
import { TimelineGrid } from '../timeline-grid/timeline-grid';

@Component({
  selector: 'app-timeline-page',
  imports: [TimelineGrid],
  templateUrl: './timeline-page.html',
  styleUrl: './timeline-page.scss',
})
export class TimelinePage {}
