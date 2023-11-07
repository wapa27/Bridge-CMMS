import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobProcedureDialogComponent } from './job-procedure-dialog.component';

describe('JobProcedureDialogComponent', () => {
  let component: JobProcedureDialogComponent;
  let fixture: ComponentFixture<JobProcedureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobProcedureDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobProcedureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
