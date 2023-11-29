import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Item } from '../../model/item';
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
      new Item('123', 'Header Unit', 'T3 N4 Phx', ['asd8f1', '8jgfajn'], ['123298'], []),
      new Item('234', 'Header Unit', 'T4 S1 Phx', ['asd8f1', '8jgfajn'], ['123298'], []),
      new Item('456', 'Header Unit', 'RCC N4 Phx', ['asd8f1', '8jgfajn'], ['123298'], []),
      new Item('768', 'Header Unit', 'RCC N2 Phx', ['asd8f1', '8jgfajn'], ['123298'], []),
      new Item('333', 'Header Unit', 'RCC N1 Phx', ['asd8f1', '8jgfajn'], ['123298'], []),
      new Item('444', 'Header Unit', 'RCC S4 Phx', ['asd8f1', '8jgfajn'], ['123298'], []),
      new Item('567', 'Header Unit', 'RCC S3 Phx', ['asd8f1', '8jgfajn'], ['123298'], []),
      new Item('909', 'Header Unit', 'RCC S2 Phx', ['asd8f1', '8jgfajn'], ['123298'], []),
    ];
  }

  goToItemInfo(componentId: string): void {
    this.router.navigate(['component-info', componentId]);
  }

}
