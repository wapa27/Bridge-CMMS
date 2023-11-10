import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-announcement-page',
  templateUrl: './announcement-page.component.html',
  styleUrls: ['./announcement-page.component.scss']
})
export class AnnouncementPageComponent implements OnInit {
  announcementId: string = '';


  constructor(private route: ActivatedRoute, private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.announcementId = params['id'];
    });
  }


  backClicked() {
    this.location.back();
  }

}
