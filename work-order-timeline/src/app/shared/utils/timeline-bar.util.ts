import { WorkOrderDocument, TimelineBar } from '../models';

// ensuring proper bar placement on timeline
export function getMonthOffset(baseDate: Date, targetDate: Date): number {
  return (
    (targetDate.getFullYear() - baseDate.getFullYear()) * 12 +
    (targetDate.getMonth() - baseDate.getMonth())
  );
}

// calculate bar length on timeline
export function calculateBarStyle(
  startDate: Date,
  endDate: Date,
  timelineStart: Date,
  cellWidth: number,
) {
  const startOffset = getMonthOffset(timelineStart, startDate);
  const endOffset = getMonthOffset(timelineStart, endDate);

  const left = startOffset * cellWidth;
  const width = (endOffset - startOffset + 1) * cellWidth;

  return {
    left: `${left}px`,
    width: `${width}px`,
  };
}

// calculate bar
export function calculateTimelineBars(
  workOrders: WorkOrderDocument[],
  timelineStart: Date,
  cellWidth: number,
): TimelineBar[] {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  const daysInMonth = new Date(
    timelineStart.getFullYear(),
    timelineStart.getMonth() + 1,
    0,
  ).getDate();

  const dayWidth = cellWidth / daysInMonth;

  return workOrders.map((order) => {
    const start = new Date(order.data.startDate);
    const end = new Date(order.data.endDate);

    const daysFromStart = (start.getTime() - timelineStart.getTime()) / MS_PER_DAY;

    const durationDays = (end.getTime() - start.getTime()) / MS_PER_DAY + 1;

    return {
      id: order.docId,
      name: order.data.name,
      status: order.data.status,
      left: daysFromStart * dayWidth,
      width: durationDays * dayWidth,
    };
  });
}
