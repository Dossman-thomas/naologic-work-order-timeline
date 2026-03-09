import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderService } from '../../../../shared/seeds/work-order.seeds';
import {
  WorkCenterDocument,
  TimelineCell,
  Timescale,
  TimelineBar,
} from '../../../../shared/models';
import {
  generateDayCells,
  generateWeekCells,
  generateMonthCells,
  calculateTimelineBars,
} from '../../../../shared/utils';

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

  TIMELINE_CONFIG = {
    day: { length: 24, range: 1 },
    week: { length: 7, range: 1 },
    month: { length: 12, range: 1 },
  };

  //timeline config
  timelineLength = 12;
  range = 1;
  cellWidth = 160;

  ngOnInit() {
    // generate timeline grid
    this.generateTimeline();
    // this.buildTimeline();

    // render timeline bars on grid
    const timelineStart = this.cells[0].date;

    const bars = calculateTimelineBars(
      this.workOrderService.workOrders,
      timelineStart,
      this.cellWidth,
    );

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

  onTimescaleChange(event: Event) {
    const scale = (event.target as HTMLSelectElement).value as Timescale;
    this.timescale = scale;
    this.generateTimeline();
  }

  private generateTimeline() {
    const config = this.TIMELINE_CONFIG[this.timescale];

    const generators = {
      day: generateDayCells,
      week: generateWeekCells,
      month: generateMonthCells,
    };

    this.cells = generators[this.timescale](config.length, config.range);
  }

  private buildTimeline() {
    this.generateTimeline();
    // this.renderBars();
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
