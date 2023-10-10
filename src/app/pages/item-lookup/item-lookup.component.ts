import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-item-lookup',
  templateUrl: './item-lookup.component.html',
  styleUrls: ['./item-lookup.component.scss']
})
export class ItemLookupComponent implements OnInit {

  searchItem: string[] = [
    'Phoneix Sky Harbor',
    'Denver International Airport',
    'Raleigh-Durham International',
    'Reagan International',
    'Oakland International',
    'San Fransisco International',
    'Hartfield Jackson International',
  ];

  // activeCategoryItem: Map<string, string[]> = new Map();
  // isActiveCategoryItem: Map<string, boolean> = new Map();

  constructor() { }

  ngOnInit(): void {
    // this.searchItem.forEach(element => {
    //   this.activeCategoryItem.set(element, ['Test Item']);
    //   this.isActiveCategoryItem.set(element, false);
    // });
  }

  // public getCategoryItems(selectedItem: string): string[] {
  //   this.isActiveCategoryItem.set(selectedItem, true);
  //   const subItems = this.activeCategoryItem.get(selectedItem);
  //   return subItems !== undefined ? subItems : [];
  // }

  // public isCategoryExpanded(category: string): boolean {
  //   const isActive = this.isActiveCategoryItem.get(category);
  //   return isActive !== undefined ? isActive : false;
  // }

}
