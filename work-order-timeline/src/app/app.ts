import { Component, signal } from '@angular/core';
import { TimelinePage } from './features/timeline/components/timeline-page/timeline-page';

@Component({
  selector: 'app-root',
  imports: [TimelinePage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('work-order-timeline');
}
