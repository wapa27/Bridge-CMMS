import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { WorkOrder } from 'src/app/model/work-order';
import { WorkOrderStatus } from 'src/app/model/work-order-status';
import { UrgencyStatus } from 'src/app/model/urgency-status';
import { AnnouncementType } from 'src/app/model/announcementType';
import { Router } from '@angular/router';
import { UserComment } from 'src/app/model/user-comment';


@Component({
  selector: 'app-component-info',
  templateUrl: './component-info.component.html',
  styleUrls: ['./component-info.component.scss'],
})
export class ComponentInfoComponent implements OnInit {
  itemId: string = '';
  maintenanceDataSource: WorkOrder[] = [];
  scheduledMaintenanceDataSource: WorkOrder[] = [];
  displayedColumns: string[] = ['title', 'status', 'dueDate']
  userComments: UserComment[] = [];

  constructor(private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.itemId = params['id'];
    });
    this.maintenanceDataSource = [
     {title: 'Install Header', status: WorkOrderStatus.complete, urgency: UrgencyStatus.medium, dueDate: new Date('2022-04-25'), comments: [], type: AnnouncementType.fix, orderID: '1818'},
     {title: 'Maintenance Header', status: WorkOrderStatus.complete, urgency: UrgencyStatus.medium, dueDate: new Date('2022-08-25'), comments: [], type: AnnouncementType.fix, orderID: '2198'},
     {title: 'Maintenance Header', status: WorkOrderStatus.complete, urgency: UrgencyStatus.medium, dueDate: new Date('2022-12-25'), comments: [], type: AnnouncementType.fix, orderID: '1911'},
     {title: 'Maintenance Header', status: WorkOrderStatus.complete, urgency: UrgencyStatus.medium, dueDate: new Date('2023-04-25'), comments: [], type: AnnouncementType.fix, orderID: '4147'},
     {title: 'Maintenance Header', status: WorkOrderStatus.complete, urgency: UrgencyStatus.medium, dueDate: new Date('2023-08-25'), comments: [], type: AnnouncementType.fix, orderID: '8818'}
    ];
    this.scheduledMaintenanceDataSource = [
     {title: 'Maintenance Header', status: WorkOrderStatus.pending, urgency: UrgencyStatus.medium, dueDate: new Date('2023-12-25'), comments: [], type: AnnouncementType.fix, orderID: '2198'},
     {title: 'Maintenance Header', status: WorkOrderStatus.pending, urgency: UrgencyStatus.medium, dueDate: new Date('2024-04-25'), comments: [], type: AnnouncementType.fix, orderID: '2198'},
    ]
    this.userComments = [
      new UserComment('John Jackson', new Date('01-01-2021'), 'Testing Comment 1'),
      new UserComment('Jack Johnson', new Date('10-10-2021'), 'Testing Comment 2'),
    ];
  }

  backClicked() {
    this.location.back();
  }

  goToWorkOrder(orderId: string){
    this.router.navigate(['work-order-info', orderId]);
  }

}
