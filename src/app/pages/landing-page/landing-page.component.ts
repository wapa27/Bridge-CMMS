import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  testAnnouncements: string[] = [];
  testWorkOrders: string[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.testAnnouncements = [
      'Fix Header at terminal C, berth 4, door 2',
      'All Hands Meeting featuring president of DIA',
      'Replace Transformer at terminal C, berth 4, door 2'
    ];

    this.testWorkOrders = [
      'Install Door at terminal A, berth 1, door 1',
      'Install Door at terminal A, berth 1, door 2',
      'Install Door at terminal A, berth 1, door 3',
      'Maintenance Header 1 at terminal B',
      'Maintenance Header 2 at terminal B',
      'Maintenance Header 2 at terminal B',
    ]
  }

  goToWorkOrderInfo(workOrder: string): void {
    this.router.navigate(['work-order-info', workOrder]);
  }

}
