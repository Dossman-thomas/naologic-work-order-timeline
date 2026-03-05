// function for ensuring proper bar placement on timeline
export function getMonthOffset(baseDate: Date, targetDate: Date): number {
  return (
    (targetDate.getFullYear() - baseDate.getFullYear()) * 12 +
    (targetDate.getMonth() - baseDate.getMonth())
  );
}

// function to calculate bar length on timeline
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
