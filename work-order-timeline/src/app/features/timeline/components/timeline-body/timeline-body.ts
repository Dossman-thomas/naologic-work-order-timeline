import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderService } from '../../../../shared/seeds/work-order.seeds';
import { WorkCenterDocument } from '../../../../shared/models/work-center.model';
import { TimelineCell } from '../../../../shared/models/timeline-cell.model';
import { Timescale } from '../../../../shared/models/timeline.types';
import { generateMonthCells } from '../../../../shared/utils';

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

  ngOnInit() {
    this.generateTimeline();
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
