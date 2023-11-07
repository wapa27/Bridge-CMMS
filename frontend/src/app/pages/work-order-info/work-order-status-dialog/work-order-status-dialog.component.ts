import { Component, OnInit, Inject, EventEmitter, Optional } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-work-order-status-dialog',
  templateUrl: './work-order-status-dialog.component.html',
  styleUrls: ['./work-order-status-dialog.component.scss']
})
export class WorkOrderStatusDialogComponent implements OnInit {
  public currentStatus: string = '';
  public newStatus: string = '';


  constructor(public dialogRef: MatDialogRef<WorkOrderStatusDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.currentStatus = this.data.currentStatus;
    this.newStatus = this.data.newStatus;
  }

  changeStatus(): void {
    this.dialogRef.close(true);

  }

  cancelStatusChange(): void {
    this.dialogRef.close(false);
  }

}
