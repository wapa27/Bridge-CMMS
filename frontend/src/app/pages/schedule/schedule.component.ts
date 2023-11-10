import { Component, OnInit } from '@angular/core';
import { AnnouncementType } from 'src/app/model/announcementType';
import { UrgencyStatus } from 'src/app/model/urgency-status';
import { WorkOrder } from 'src/app/model/work-order';
import { WorkOrderStatus } from 'src/app/model/work-order-status';
import { Router } from '@angular/router';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  selected: Date | null = new Date();
  testWorkOrders: WorkOrder[] = [];


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.testWorkOrders = [
      new WorkOrder('Install Door at terminal A, berth 1, door 1', WorkOrderStatus.pending, UrgencyStatus.medium, new Date(), [], AnnouncementType.fix, '1234'),
      new WorkOrder('Install Door at terminal A, berth 1, door 2', WorkOrderStatus.pending, UrgencyStatus.medium, new Date(), [], AnnouncementType.fix, '2345'),
      new WorkOrder('Install Door at terminal A, berth 1, door 3', WorkOrderStatus.pending, UrgencyStatus.medium, new Date(), [], AnnouncementType.fix, '2351'),
      new WorkOrder('Maintenance Header 1 at terminal B', WorkOrderStatus.pending, UrgencyStatus.medium, new Date(), [], AnnouncementType.fix, '123512'),
      new WorkOrder('Maintenance Header 2 at terminal B', WorkOrderStatus.pending, UrgencyStatus.medium, new Date(), [], AnnouncementType.fix, '1235235jdf'),
      new WorkOrder('Maintenance Header 3 at terminal B', WorkOrderStatus.pending, UrgencyStatus.medium, new Date(), [], AnnouncementType.fix, 'jsdf1934'),
    ]
  }

  goToWorkOrderInfo(workOrderId: string): void {
    // Route this with the Order ID as the parameter instead
    this.router.navigate(['work-order-info', workOrderId]);
  }

  getAnnouncementType(announcementType: AnnouncementType) {
    switch (announcementType) {
      case AnnouncementType.fix:
        return 'fix';
      case AnnouncementType.install:
        return 'install';
      case AnnouncementType.meeting:
        return 'meeting';
    }
  }
}
