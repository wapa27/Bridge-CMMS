import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  isEditUserDetails: boolean;
  name: string;
  email: string;
  number: string;

  // @ViewChild(MatAccordion) accordion: MatAccordion;
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
    this.isEditUserDetails = false;
    this.name = 'Warren Payne';
    this.email = '30545WarrenPayne@gmail.com';
    this.number = '714-337-3176';
  }

  toggleUserEdit() {
    this.isEditUserDetails = !this.isEditUserDetails;
  }

}
