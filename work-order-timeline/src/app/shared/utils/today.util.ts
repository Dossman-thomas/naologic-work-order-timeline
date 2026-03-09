import { getDatePixelPosition } from './timeline-bar.util';

export function getTodayLinePosition(timelineStart: Date, cellWidth: number) {
  return getDatePixelPosition(new Date(), timelineStart, cellWidth);
}
