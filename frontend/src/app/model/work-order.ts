import { UrgencyStatus } from "./urgency-status";
import { UserComment } from "./user-comment";
import { WorkOrderStatus } from "./work-order-status";

export class WorkOrder {
  constructor(title: string, status: WorkOrderStatus, urgency: UrgencyStatus, dueDate: Date, comments: UserComment[], orderID: string) {
    this.title = title;
    this.status = status;
    this.urgency = urgency;
    this.dueDate = dueDate;
    this.comments = comments;
    this.orderID = orderID;
  }

  title: string;
  status: WorkOrderStatus;
  urgency: UrgencyStatus;
  dueDate: Date;
  comments: UserComment[];
  orderID: string;
}
