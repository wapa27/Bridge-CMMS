import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderStatusDialogComponent } from './work-order-status-dialog.component';

describe('WorkOrderStatusDialogComponent', () => {
  let component: WorkOrderStatusDialogComponent;
  let fixture: ComponentFixture<WorkOrderStatusDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkOrderStatusDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrderStatusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
