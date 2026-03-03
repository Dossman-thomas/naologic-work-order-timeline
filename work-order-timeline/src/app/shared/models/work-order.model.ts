// define acceptable work-order-statuses
export type WorkOrderStatus = 'open' | 'in-progress' | 'complete' | 'blocked';

// define acceptable work-order types and structure
export interface WorkOrderDocument {
  docId: string;
  docType: 'workOrder';
  data: {
    name: string;
    workCenterId: string; // References workCenterDocument.docId
    status: WorkOrderStatus;
    startDate: string; // ISO format (e.g., "2025-01-15")
    endDate: string; // ISO format
  };
}
