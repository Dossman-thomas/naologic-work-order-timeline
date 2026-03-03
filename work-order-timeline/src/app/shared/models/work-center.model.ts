// Work centers represent production lines, machines, or work areas where work orders are scheduled

// define acceptable work-center-document types and structure
export interface WorkCenterDocument {
  docId: string;
  docType: 'workCenter';
  data: {
    name: string;
  };
}
