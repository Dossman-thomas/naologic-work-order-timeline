import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineBody } from './timeline-body';

describe('TimelineBody', () => {
  let component: TimelineBody;
  let fixture: ComponentFixture<TimelineBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineBody],
    }).compileComponents();

    fixture = TestBed.createComponent(TimelineBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
