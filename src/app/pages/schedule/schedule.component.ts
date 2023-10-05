import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  selected: Date | null = new Date();
  testWorkOrders: string[] = [];


  constructor() { }

  ngOnInit(): void {
    this.testWorkOrders = [
      'Install Door at terminal A, berth 1, door 1',
      'Install Door at terminal A, berth 1, door 2',
      'Install Door at terminal A, berth 1, door 3',
      'Maintenance Header 1 at terminal B',
      'Maintenance Header 2 at terminal B',
      'Maintenance Header 2 at terminal B',
    ]
  }

}
