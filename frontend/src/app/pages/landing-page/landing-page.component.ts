import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Announcement } from 'src/app/model/announcement';
import { AnnouncementType } from 'src/app/model/announcementType';
import { UrgencyStatus } from 'src/app/model/urgency-status';
import { WorkOrder } from 'src/app/model/work-order';
import { WorkOrderStatus } from 'src/app/model/work-order-status';
import { WorkOrderService } from 'src/app/services/work-order.service';

@Component({
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  testAnnouncements: Announcement[] = [];
  testWorkOrders: WorkOrder[] = [];

  constructor(
    private workOrderService: WorkOrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('in landing page')
    this.workOrderService.getWorkOrdersByUserId();
    this.testAnnouncements = [
      new Announcement('All Hands Meeting featuring president of DIA', AnnouncementType.meeting, '234'),
      new Announcement('Fix found for people counter undercounts', AnnouncementType.install, '345'),
      new Announcement('Team Meeting', AnnouncementType.meeting, '123')
    ];

    // Work Orders should be an object with details like:
    // * Title
    // * OrderID (unique identifier to retrieve specific info related to Work Order)
    // etc.
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
    this.router.navigate(['work-order-info', workOrderId]);
  }

  goToAnnouncement(announcementId: string): void {
    this.router.navigate(['announcement-page', announcementId])
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
