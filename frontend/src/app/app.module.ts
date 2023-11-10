import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BottomNavigationBarComponent } from './bottom-navigation-bar/bottom-navigation-bar.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { WorkOrderInfoComponent } from './pages/work-order-info/work-order-info.component';
import { WorkOrderStatusDialogComponent } from './pages/work-order-info/work-order-status-dialog/work-order-status-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { JobProcedureComponent } from './pages/job-procedure/job-procedure.component';
import { JobProcedureDialogComponent } from './pages/job-procedure/job-procedure-dialog/job-procedure-dialog.component';
import { JobProcedureItemComponent } from './pages/job-procedure/job-procedure-item/job-procedure-item.component';
import { ItemLookupComponent } from './pages/item-lookup/item-lookup.component';
import { ComponentInfoComponent } from './pages/component-info/component-info.component';
import { AnnouncementPageComponent } from './pages/announcement-page/announcement-page.component';
import { MatTableModule } from '@angular/material/table';
import { SettingsComponent } from './pages/settings/settings.component'  
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingPageComponent,
    BottomNavigationBarComponent,
    ScheduleComponent,
    WorkOrderInfoComponent,
    WorkOrderStatusDialogComponent,
    JobProcedureComponent,
    JobProcedureDialogComponent,
    JobProcedureItemComponent,
    ItemLookupComponent,
    ComponentInfoComponent,
    AnnouncementPageComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatTableModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
