import { NavigationEnd, Router } from '@angular/router';
import { BottomNavigationBarService } from './bottom-navigation-bar.service';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators'; // Import the filter operator from 'rxjs/operators'


@Component({
  selector: 'app-bottom-navigation-bar',
  templateUrl: './bottom-navigation-bar.component.html',
  styleUrls: ['./bottom-navigation-bar.component.scss']
})
export class BottomNavigationBarComponent implements OnInit {

  tasksSelected: boolean = false;
  calendarSelected: boolean = false;
  lookupSelected: boolean = false;
  moreSelected: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.disableAllOptions();
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateSelectedIcon(event.url);
    });
  }

  updateSelectedIcon(newURL: string) {
    this.disableAllOptions();
    if (newURL === '/') {
      this.tasksSelected = true;
    } else if (newURL.startsWith('/schedule')) {
      this.calendarSelected = true;
    } else if (newURL.startsWith('/item-lookup')) {
      this.lookupSelected = true;
    }
  }

  disableAllOptions() {
    this.tasksSelected = false;
    this.calendarSelected = false;
    this.lookupSelected = false;
    this.moreSelected = false;
  }

}
