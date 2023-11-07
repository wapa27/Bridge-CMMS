import { TaskStatus } from "./task-status";
import { UserComment } from "./user-comment";
import { TaskType } from "./task-type";

export class JobProcedureTask {
  public taskType: TaskType;
  public taskName: string = '';
  public taskStatus: TaskStatus;
  public comments: UserComment[] = [];

  constructor(taskType: TaskType, taskName: string, taskStatus: TaskStatus, comments: UserComment[]) {
    this.taskType = taskType;
    this.taskName = taskName;
    this.taskStatus = taskStatus;
    this.comments = comments;
  }
}
