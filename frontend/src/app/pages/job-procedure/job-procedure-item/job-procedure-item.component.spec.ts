import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobProcedureItemComponent } from './job-procedure-item.component';

describe('JobProcedureItemComponent', () => {
  let component: JobProcedureItemComponent;
  let fixture: ComponentFixture<JobProcedureItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobProcedureItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobProcedureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
