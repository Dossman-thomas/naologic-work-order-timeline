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

export function getDatePixelPosition(date: Date, timelineStart: Date, cellWidth: number) {
  const monthOffset =
    (date.getFullYear() - timelineStart.getFullYear()) * 12 +
    (date.getMonth() - timelineStart.getMonth());

  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const dayOfMonth = date.getDate() - 1;

  const dayWidth = cellWidth / daysInMonth;

  return monthOffset * cellWidth + dayOfMonth * dayWidth;
}

// calculate bar length by pixels
export function calculateTimelineBars(
  workOrders: WorkOrderDocument[],
  timelineStart: Date,
  cellWidth: number,
): TimelineBar[] {
  return workOrders.map((order) => {
    const start = new Date(order.data.startDate);
    const end = new Date(order.data.endDate);
    const endPlusOne = new Date(end);
    endPlusOne.setDate(endPlusOne.getDate() + 1);

    const startPixel = getDatePixelPosition(start, timelineStart, cellWidth);

    const endPixel = getDatePixelPosition(endPlusOne, timelineStart, cellWidth);

    return {
      id: order.docId,
      name: order.data.name,
      status: order.data.status,
      left: startPixel,
      width: endPixel - startPixel,
    };
  });
}
