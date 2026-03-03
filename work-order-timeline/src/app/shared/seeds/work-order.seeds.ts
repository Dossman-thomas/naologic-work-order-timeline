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
        workCenterId: 'wc-1',
        status: 'open',
        startDate: '2026-02-27',
        endDate: '2026-03-03',
      },
    },
    {
      docId: 'wo-3',
      docType: 'workOrder',
      data: {
        name: 'Order Gamma',
        workCenterId: 'wc-2',
        status: 'in-progress',
        startDate: '2026-03-01',
        endDate: '2026-03-08',
      },
    },
    {
      docId: 'wo-4',
      docType: 'workOrder',
      data: {
        name: 'Order Delta',
        workCenterId: 'wc-3',
        status: 'blocked',
        startDate: '2026-02-24',
        endDate: '2026-03-02',
      },
    },
    {
      docId: 'wo-5',
      docType: 'workOrder',
      data: {
        name: 'Order Epsilon',
        workCenterId: 'wc-3',
        status: 'complete',
        startDate: '2026-03-04',
        endDate: '2026-03-10',
      },
    },
    {
      docId: 'wo-6',
      docType: 'workOrder',
      data: {
        name: 'Order Zeta',
        workCenterId: 'wc-4',
        status: 'open',
        startDate: '2026-03-02',
        endDate: '2026-03-06',
      },
    },
    {
      docId: 'wo-7',
      docType: 'workOrder',
      data: {
        name: 'Order Eta',
        workCenterId: 'wc-5',
        status: 'in-progress',
        startDate: '2026-02-28',
        endDate: '2026-03-07',
      },
    },
    {
      docId: 'wo-8',
      docType: 'workOrder',
      data: {
        name: 'Order Theta',
        workCenterId: 'wc-2',
        status: 'complete',
        startDate: '2026-03-10',
        endDate: '2026-03-15',
      },
    },
  ];
}
