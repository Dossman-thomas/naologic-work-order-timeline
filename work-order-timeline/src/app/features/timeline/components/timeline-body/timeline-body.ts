import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderService } from '../../../../shared/seeds/work-order.seeds';
import { WorkCenterDocument } from '../../../../shared/models/work-center.model';

@Component({
  selector: 'app-timeline-body',
  imports: [CommonModule],
  templateUrl: './timeline-body.html',
  styleUrl: './timeline-body.scss',
})
export class TimelineBody {
  private workOrderService = inject(WorkOrderService);

  workCenters: WorkCenterDocument[] = this.workOrderService.workCenters;

  // add key tracking for performance
  trackById(_: number, item: WorkCenterDocument) {
    return item.docId;
  }
}
