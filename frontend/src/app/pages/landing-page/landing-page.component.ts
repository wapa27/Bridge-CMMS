import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrgencyStatus } from 'src/app/model/urgency-status';
import { WorkOrder } from 'src/app/model/work-order';
import { WorkOrderStatus } from 'src/app/model/work-order-status';

@Component({
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  testAnnouncements: string[] = [];
  testWorkOrders: WorkOrder[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.testAnnouncements = [
      'Fix Header at terminal C, berth 4, door 2',
      'All Hands Meeting featuring president of DIA',
      'Replace Transformer at terminal C, berth 4, door 2'
    ];

    // Work Orders should be an object with details like:
    // * Title
    // * OrderID (unique identifier to retrieve specific info related to Work Order)
    // etc.
    this.testWorkOrders = [
      new WorkOrder('Install Door at terminal A, berth 1, door 1', WorkOrderStatus.pending, UrgencyStatus.medium, new Date(), [], '1234'),
      new WorkOrder('Install Door at terminal A, berth 1, door 2', WorkOrderStatus.pending, UrgencyStatus.medium, new Date(), [], '2345'),
      new WorkOrder('Install Door at terminal A, berth 1, door 3', WorkOrderStatus.pending, UrgencyStatus.medium, new Date(), [], '2351'),
      new WorkOrder('Maintenance Header 1 at terminal B', WorkOrderStatus.pending, UrgencyStatus.medium, new Date(), [], '123512'),
      new WorkOrder('Maintenance Header 2 at terminal B', WorkOrderStatus.pending, UrgencyStatus.medium, new Date(), [], '1235235jdf'),
      new WorkOrder('Maintenance Header 3 at terminal B', WorkOrderStatus.pending, UrgencyStatus.medium, new Date(), [], 'jsdf1934'),
    ]
  }

  goToWorkOrderInfo(workOrder: string): void {
    // Route this with the Order ID as the parameter instead
    this.router.navigate(['work-order-info', workOrder]);
  }

}
