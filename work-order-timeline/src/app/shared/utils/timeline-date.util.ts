import { TimelineCell } from '../models/timeline-cell.model';

export function generateMonthCells(
  timelineLength: number,
  range: number,
  includeLabel = true,
): TimelineCell[] {
  const today = new Date();
  const start = new Date(today.getFullYear(), today.getMonth(), 1);

  const cells: TimelineCell[] = [];

  for (let i = -range; i <= timelineLength; i++) {
    const d = new Date(start);
    d.setMonth(start.getMonth() + i);

    cells.push({
      date: d,
      label: includeLabel
        ? d.toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric',
          })
        : '',
    });
  }

  return cells;
}
