import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { WorkOrderInfoComponent } from './pages/work-order-info/work-order-info.component';
import { JobProcedureComponent } from './pages/job-procedure/job-procedure.component';
import { ItemLookupComponent } from './pages/item-lookup/item-lookup.component';
import { ComponentInfoComponent } from './pages/component-info/component-info.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'work-order-info/:id', component: WorkOrderInfoComponent },
  { path: 'job-procedure/:id', component: JobProcedureComponent },
  { path: 'item-lookup', component: ItemLookupComponent },
  { path: 'component-info', component: ComponentInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
