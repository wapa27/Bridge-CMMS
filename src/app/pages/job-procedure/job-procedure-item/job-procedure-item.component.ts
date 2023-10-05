import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { JobProcedureTask } from 'src/app/model/job-procedure-task';
import { JobProcedureDialogComponent } from '../job-procedure-dialog/job-procedure-dialog.component';
import { UserComment } from 'src/app/model/user-comment';

@Component({
  selector: 'app-job-procedure-item',
  templateUrl: './job-procedure-item.component.html',
  styleUrls: ['./job-procedure-item.component.scss']
})
export class JobProcedureItemComponent implements OnInit {
  public isPass = false;
  public isFlag = false;
  public isFail = false;
  public isAddComment = false;

  @Input()
  task: JobProcedureTask;

  constructor(private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(currentStatus: string, newStatus: string): void {
    const dialogRef = this.dialog.open(JobProcedureDialogComponent, {
      data: {
        currentStatus: currentStatus,
        newStatus: newStatus
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        switch (newStatus) {
          case 'PASS':
            this.changeToPass();
            break;
          case 'FLAG':
            this.changeToFlag();
            break;
          case 'FAIL':
            this.changeToFail();
            break;
        }
      }
    });
  }

  private resolveCurrentStatus(): string {
    if (this.isPass) {
      return 'PASS';
    } else if (this.isFlag) {
      return 'FLAG';
    } else if (this.isFail) {
      return 'FAIL';
    } else {
      return 'NONE';
    }
  }

  private deselectAllStatuses() {
    this.isPass = false;
    this.isFlag = false;
    this.isFail = false;
  }


  private changeToPass() {
    this.deselectAllStatuses();
    this.isPass = true;
  }
  private changeToFlag() {
    this.deselectAllStatuses();
    this.isFlag = true;
  }
  private changeToFail() {
    this.deselectAllStatuses();
    this.isFail = true;
  }


  public togglePass(): void {
    this.openDialog(this.resolveCurrentStatus(), 'PASS');
  }
  public toggleFlag(): void {
    this.openDialog(this.resolveCurrentStatus(), 'FLAG');
  }
  public toggleFail(): void {
    this.openDialog(this.resolveCurrentStatus(), 'FAIL');
  }


  public addComment() {
    this.isAddComment = true;
  }
  public cancelComment() {
    this.isAddComment = false;
  }

  public pushComment(userComment: string) {
    console.log(userComment);
    this.task.comments.push(new UserComment('TBD User', new Date(), userComment));
    this.cancelComment();
  }

}
