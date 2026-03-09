// functions for creating timeline cells
import { TimelineCell } from '../models/timeline-cell.model';

// generate day view
export function generateDayCells(
  timelineLength: number,
  range: number,
  includeLabel = true,
): TimelineCell[] {
  const today = new Date();
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const cells: TimelineCell[] = [];

  for (let i = -range; i <= timelineLength; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);

    cells.push({
      date: d,
      label: includeLabel
        ? d.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          })
        : '',
    });
  }

  return cells;
}

// helper for week view
function getStartOfWeek(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();

  const diff = d.getDate() - day + (day === 0 ? -6 : 1);

  d.setDate(diff);

  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

// generate week view
export function generateWeekCells(
  timelineLength: number,
  range: number,
  includeLabel = true,
): TimelineCell[] {
  const today = new Date();
  const start = getStartOfWeek(today);

  const cells: TimelineCell[] = [];

  for (let i = -range; i <= timelineLength; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i * 7);

    cells.push({
      date: d,
      label: includeLabel
        ? `Week of ${d.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          })}`
        : '',
    });
  }

  return cells;
}

// generate month view
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
