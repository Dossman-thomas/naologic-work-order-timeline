import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineCell } from '../../../../shared/models/timeline-cell.model';
import { Timescale } from '../../../../shared/models/timeline.types';

@Component({
  selector: 'app-timeline-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-header.html',
  styleUrl: './timeline-header.scss',
})
export class TimelineHeader implements OnInit {
  timescale: Timescale = 'month';

  cells: TimelineCell[] = [];

  readonly CELL_WIDTH = 160;
  readonly range = 1;
  readonly timelineLength = 12;

  ngOnInit() {
    this.generateTimeline();
  }

  private generateMonths() {
    const today = new Date();

    // Start at first day of current month
    const start = new Date(today.getFullYear(), today.getMonth(), 1);

    // const range = 1;

    // const timelineLength = 12;

    for (let i = -this.range; i <= this.timelineLength; i++) {
      const d = new Date(start);
      d.setMonth(start.getMonth() + i);

      this.cells.push({
        date: d,
        label: d.toLocaleDateString('en-US', {
          month: 'short',
          year: 'numeric',
        }),
      });
    }
  }

  private generateTimeline() {
    this.cells = [];

    switch (this.timescale) {
      case 'month':
        this.generateMonths();
        break;

      // future-ready
      // case 'week':
      // case 'day':
      //   this.generateMonths();
      //   break;
    }
  }

  trackByDate(_: number, item: TimelineCell) {
    return item.date.toISOString();
  }
}
