import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventAddComponent } from './event-add/event-add.component';
import { ActivityComponent } from './activity/activity.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
import { ActivityAddComponent } from './activity-add/activity-add.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: DashboardComponent },
  { path: 'event/edit/:id', component: EventEditComponent },
  { path: 'activity/edit/:id', component: ActivityEditComponent },
  { path: 'events',     component: EventComponent },
  { path: 'activities', component: ActivityComponent },
  { path: 'activity/add', component: ActivityAddComponent },
  { path: 'event/add', component: EventAddComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'roles', component: RoleComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}