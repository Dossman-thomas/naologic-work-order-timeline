import { Component } from '@angular/core';
import { WorkOrderService } from '../../../../shared/seeds/work-order.seeds';
import { WorkCenterDocument } from '../../../../shared/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-center-column',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-center-column.html',
  styleUrl: './work-center-column.scss',
})
export class WorkCenterColumn {
  // init workCenters array
  workCenters: WorkCenterDocument[] = [];

  constructor(private workOrderService: WorkOrderService) {
    this.workCenters = this.workOrderService.workCenters;
  }

  // add id key tracking for performance
  trackByDocId(_: number, item: WorkCenterDocument) {
    return item.docId;
  }
}
