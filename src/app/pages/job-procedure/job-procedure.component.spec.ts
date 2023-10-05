import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobProcedureComponent } from './job-procedure.component';

describe('JobProcedureComponent', () => {
  let component: JobProcedureComponent;
  let fixture: ComponentFixture<JobProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobProcedureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
