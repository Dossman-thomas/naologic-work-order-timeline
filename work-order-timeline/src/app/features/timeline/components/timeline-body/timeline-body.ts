import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderService } from '../../../../shared/seeds/work-order.seeds';
import { WorkCenterDocument } from '../../../../shared/models/work-center.model';
import { TimelineCell } from '../../../../shared/models/timeline-cell.model';
import { Timescale } from '../../../../shared/models/timeline.types';

@Component({
  selector: 'app-timeline-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-body.html',
  styleUrl: './timeline-body.scss',
})
export class TimelineBody implements OnInit {
  timescale: Timescale = 'month';

  cells: TimelineCell[] = [];

  // constructor(workOrderService: WorkOrderService) {
  //   this.workOrderService = workOrderService;
  // }

  readonly timelineLength = 12;
  readonly range = 1;
  // readonly workCenters = this.workOrderService.workCenters;

  ngOnInit() {
    this.generateTimeline();
  }

  private generateMonths() {
    const today = new Date();
    const start = new Date(today.getFullYear(), today.getMonth(), 1);

    for (let i = -this.range; i <= this.timelineLength; i++) {
      const d = new Date(start);
      d.setMonth(start.getMonth() + i);

      this.cells.push({
        date: d,
        label: '',
      });
    }
  }

  private generateTimeline() {
    this.cells = [];

    if (this.timescale === 'month') {
      this.generateMonths();
    }
  }

  trackByDate(index: number, item: TimelineCell) {
    return item.date.toISOString();
  }

  private workOrderService = inject(WorkOrderService);

  workCenters: WorkCenterDocument[] = this.workOrderService.workCenters;
  remainingWorkCenters = this.workCenters.slice(1);

  // add key tracking for performance
  trackById(_: number, item: WorkCenterDocument) {
    return item.docId;
  }
}
