import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineCell } from '../../../../shared/models/timeline-cell.model';
import { Timescale } from '../../../../shared/models/timeline.types';
import { generateMonthCells } from '../../../../shared/utils';

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

  ngOnInit() {
    this.generateTimeline();
  }

  private generateTimeline() {
    switch (this.timescale) {
      case 'month':
        this.cells = generateMonthCells(12, 1, true);
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
