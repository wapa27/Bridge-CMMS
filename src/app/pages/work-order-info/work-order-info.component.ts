import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { WorkOrderStatusDialogComponent } from './work-order-status-dialog/work-order-status-dialog.component';
import { Router } from '@angular/router';
import { UserComment } from 'src/app/model/user-comment';




@Component({
  selector: 'app-work-order-info',
  templateUrl: './work-order-info.component.html',
  styleUrls: ['./work-order-info.component.scss']
})
export class WorkOrderInfoComponent implements OnInit {
  orderId: string = '';
  isPending: boolean = false;
  isPaused: boolean = false;
  isOngoing: boolean = false;
  isDone: boolean = false;

  userComments: UserComment[] = [
    new UserComment('User 1', new Date(), 'Testing Comment 1'),
    new UserComment('User 2', new Date(), 'Testing Comment 2'),
    new UserComment('User 3', new Date(), 'Testing Comment 3'),
    new UserComment('User 4', new Date(), 'Testing Comment 4'),
    new UserComment('User 5', new Date(), 'Testing Comment 5'),
    new UserComment('User 6', new Date(), 'Testing Comment 6'),
    new UserComment('User 7', new Date(), 'Testing Comment 7')
  ];

  constructor(private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.orderId = params['id'];
    });
  }

  openDialog(currentStatus: string, newStatus: string): void {
    const dialogRef = this.dialog.open(WorkOrderStatusDialogComponent, {
      data: {
        currentStatus: currentStatus,
        newStatus: newStatus
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        switch (newStatus) {
          case 'PENDING':
            this.changeToPending();
            break;
          case 'PAUSED':
            this.changeToPaused();
            break;
          case 'ONGOING':
            this.changeToOngoing();
            break;
          case 'COMPLETE':
            this.changeToDone();
            break;
        }
      }
    });
  }

  private resolveCurrentStatus(): string {
    if (this.isPending) {
      return 'PENDING';
    } else if (this.isPaused) {
      return 'PAUSED';
    } else if (this.isOngoing) {
      return 'ONGOING';
    } else if (this.isDone) {
      return 'COMPLETE';
    } else {
      return 'NONE';
    }
  }

  private deselectAllStatuses() {
    this.isPending = false;
    this.isPaused = false;
    this.isOngoing = false;
    this.isDone = false;
  }

  public togglePending(): void {
    this.openDialog(this.resolveCurrentStatus(), 'PENDING');
  }

  private changeToPending(): void {
    this.deselectAllStatuses();
    this.isPending = true;
  }

  public togglePaused(): void {
    this.openDialog(this.resolveCurrentStatus(), 'PAUSED');

  }

  private changeToPaused(): void {
    this.deselectAllStatuses();
    this.isPaused = true;
  }

  public toggleOngoing(): void {
    this.openDialog(this.resolveCurrentStatus(), 'ONGOING');
  }

  private changeToOngoing(): void {
    this.deselectAllStatuses();
    this.isOngoing = true;
  }

  public toggleDone(): void {
    this.openDialog(this.resolveCurrentStatus(), 'COMPLETE');
  }

  private changeToDone(): void {
    this.deselectAllStatuses();
    this.isDone = true;
  }

  public goToJobProcedure() {
    this.router.navigate(['job-procedure', this.orderId]);
  }

}
