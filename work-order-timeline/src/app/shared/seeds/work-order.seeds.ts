import { Injectable } from '@angular/core';
import { WorkCenterDocument } from '../models/work-center.model';
import { WorkOrderDocument } from '../models/work-order.model';

@Injectable({ providedIn: 'root' })
export class WorkOrderService {
  readonly workCenters: WorkCenterDocument[] = [
    {
      docId: 'wc-1',
      docType: 'workCenter',
      data: { name: 'Extrusion Line A' },
    },
    {
      docId: 'wc-2',
      docType: 'workCenter',
      data: { name: 'CNC Machine 1' },
    },
    {
      docId: 'wc-3',
      docType: 'workCenter',
      data: { name: 'Assembly Station' },
    },
    {
      docId: 'wc-4',
      docType: 'workCenter',
      data: { name: 'Quality Control' },
    },
    {
      docId: 'wc-5',
      docType: 'workCenter',
      data: { name: 'Packaging Line' },
    },
  ];

  readonly workOrders: WorkOrderDocument[] = [
    {
      docId: 'wo-1',
      docType: 'workOrder',
      data: {
        name: 'Order Alpha',
        workCenterId: 'wc-1',
        status: 'complete',
        startDate: '2026-02-20',
        endDate: '2026-02-25',
      },
    },
    {
      docId: 'wo-2',
      docType: 'workOrder',
      data: {
        name: 'Order Beta',
        workCenterId: 'wc-3',
        status: 'in-progress',
        startDate: '2026-02-26',
        endDate: '2026-03-05',
      },
    },
  ];
}
