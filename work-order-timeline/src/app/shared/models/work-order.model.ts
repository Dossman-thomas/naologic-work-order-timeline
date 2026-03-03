// define acceptable work-order-statuses
export type WorkOrderStatus = 'open' | 'in-progress' | 'complete' | 'blocked';

// define acceptable work-order types and structure
export interface WorkOrderDocument {
  docId: string;
  docType: 'workOrder';
  data: {
    name: string;
    workCenterId: string;
    status: WorkOrderStatus;
    startDate: string;
    endDate: string;
  };
}
