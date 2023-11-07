import { Component, OnInit, Inject, EventEmitter, Optional } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-job-procedure-dialog',
  templateUrl: './job-procedure-dialog.component.html',
  styleUrls: ['./job-procedure-dialog.component.scss']
})
export class JobProcedureDialogComponent implements OnInit {
  public currentStatus: string = '';
  public newStatus: string = '';


  constructor(public dialogRef: MatDialogRef<JobProcedureDialogComponent>,
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
