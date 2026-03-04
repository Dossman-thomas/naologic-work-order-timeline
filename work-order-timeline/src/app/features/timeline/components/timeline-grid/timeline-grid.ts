import { Component } from '@angular/core';
import { TimelineHeader } from '../timeline-header/timeline-header';
import { WorkCenterColumn } from '../work-center-column/work-center-column';
import { TimelineBody } from '../timeline-body/timeline-body';

@Component({
  selector: 'app-timeline-grid',
  imports: [TimelineHeader, WorkCenterColumn, TimelineBody],
  templateUrl: './timeline-grid.html',
  styleUrl: './timeline-grid.scss',
})
export class TimelineGrid {}
