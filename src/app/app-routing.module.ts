import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventAddComponent } from './event-add/event-add.component';
import { ActivityComponent } from './activity/activity.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
import { ActivityAddComponent } from './activity-add/activity-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'event/edit/:id', component: EventEditComponent },
  { path: 'activity/edit/:id', component: ActivityEditComponent },
  { path: 'events',     component: EventComponent },
  { path: 'activities', component: ActivityComponent },
  { path: 'activity/add', component: ActivityAddComponent },
  { path: 'event/add', component: EventAddComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}