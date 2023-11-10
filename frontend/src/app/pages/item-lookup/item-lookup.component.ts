import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Component as Item } from '../../model/component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-item-lookup',
  templateUrl: './item-lookup.component.html',
  styleUrls: ['./item-lookup.component.scss']
})
export class ItemLookupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // dataSource = this.components;
  }

  searchItem: string[] = [
    'Phoneix Sky Harbor',
    'Denver International Airport',
    'Raleigh-Durham International',
    'Reagan International',
    'Oakland International',
    'San Fransisco International',
    'Hartfield Jackson International',
  ];

    displayedColumns: string[] = ['name', 'location', 'id']

   dataSource: Item[] = [];

  public getItems(inputLocation: any, inputComponentId: any) {
    this.dataSource = [
      new Item('123', 'T3 N4', 'Phx', ['asd8f1', '8jgfajn'], ['123298'], []),
      new Item('234', 'T4 S1', 'Phx', ['asd8f1', '8jgfajn'], ['123298'], []),
      new Item('456', 'RCC N4', 'Phx', ['asd8f1', '8jgfajn'], ['123298'], []),
      new Item('768', 'RCC N2', 'Phx', ['asd8f1', '8jgfajn'], ['123298'], []),
      new Item('333', 'RCC N1', 'Phx', ['asd8f1', '8jgfajn'], ['123298'], []),
      new Item('444', 'RCC S4', 'Phx', ['asd8f1', '8jgfajn'], ['123298'], []),
      new Item('567', 'RCC S3', 'Phx', ['asd8f1', '8jgfajn'], ['123298'], []),
      new Item('909', 'RCC S2', 'Phx', ['asd8f1', '8jgfajn'], ['123298'], []),
    ];
  }

  goToWorkOrderInfo(workOrderId: string): void {
    this.router.navigate(['work-order-info', workOrderId]);
  }

}
