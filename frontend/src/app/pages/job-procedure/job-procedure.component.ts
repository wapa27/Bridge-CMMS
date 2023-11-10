import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobProcedureTask } from 'src/app/model/job-procedure-task';
import { TaskStatus } from 'src/app/model/task-status';
import { TaskType } from 'src/app/model/task-type';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { WorkOrderStatusDialogComponent } from '../work-order-info/work-order-status-dialog/work-order-status-dialog.component';
import { JobProcedureDialogComponent } from './job-procedure-dialog/job-procedure-dialog.component';
import { UserComment } from 'src/app/model/user-comment';
import {Location} from '@angular/common';





@Component({
  selector: 'app-job-procedure',
  templateUrl: './job-procedure.component.html',
  styleUrls: ['./job-procedure.component.scss']
})
export class JobProcedureComponent implements OnInit {
  orderId: string = '';
  testTasks: JobProcedureTask[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.orderId = params['id'];
      this.setProcedureTasks();
      let testkType: TaskType = TaskType.commentTask;
    });
  }

  backClicked() {
    this.location.back();
  }

  private setProcedureTasks(): void {
    this.testTasks = [
      new JobProcedureTask(TaskType.instructionTask, 'Install Threshold', TaskStatus.passed, [
        new UserComment('Warren Payne', new Date, 'The header condition is good overall, but there is a scratch on the interior near the transformer')
      ]),
      new JobProcedureTask(TaskType.photoTask, 'Photograph Threshold', TaskStatus.passed, []),
      new JobProcedureTask(TaskType.instructionTask, 'Inspect Header out of the Box', TaskStatus.passed, []),
      new JobProcedureTask(TaskType.photoTask, 'Photograph Header', TaskStatus.passed, []),
      new JobProcedureTask(TaskType.instructionTask, 'Install Header', TaskStatus.passed, []),
      new JobProcedureTask(TaskType.photoTask, 'Photograph Header', TaskStatus.passed, []),
    ]
  }

  takePhoto() {
    console.log('click!')
  }


}
