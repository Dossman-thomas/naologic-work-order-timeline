import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderService } from '../../../../shared/seeds/work-order.seeds';
import {
  WorkCenterDocument,
  TimelineCell,
  Timescale,
  TimelineBar,
} from '../../../../shared/models';
import { generateMonthCells, calculateTimelineBars } from '../../../../shared/utils';

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
  barsByWorkCenter: Record<string, TimelineBar[]> = {};

  ngOnInit() {
    // generate timeline grid
    this.generateTimeline();

    // render timeline bars on grid
    const timelineStart = this.cells[0].date;

    const bars = calculateTimelineBars(this.workOrderService.workOrders, timelineStart, 160);

    bars.forEach((bar) => {
      const order = this.workOrderService.workOrders.find((o) => o.docId === bar.id);

      if (!order) return;

      const wcId = order.data.workCenterId;

      if (!this.barsByWorkCenter[wcId]) {
        this.barsByWorkCenter[wcId] = [];
      }

      this.barsByWorkCenter[wcId].push(bar);
    });
  }

  private generateTimeline() {
    if (this.timescale === 'month') {
      this.cells = generateMonthCells(12, 1, true);
    }
  }

  private workOrderService = inject(WorkOrderService);

  workCenters: WorkCenterDocument[] = this.workOrderService.workCenters;
  remainingWorkCenters = this.workCenters.slice(1);

  // add key tracking for performance
  trackById(_: number, item: WorkCenterDocument) {
    return item.docId;
  }

  trackByDate(index: number, item: TimelineCell) {
    return item.date.toISOString();
  }
}
