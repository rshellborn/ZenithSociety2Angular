import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventComponent } from './event/event.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ActivityComponent } from './activity/activity.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
import { MomentModule } from 'angular2-moment';
import { ActivityAddComponent } from './activity-add/activity-add.component';
import { DatePipe } from '@angular/common';
import { EventDropdownComponent } from './event-dropdown/event-dropdown.component';
import { EventAddComponent } from './event-add/event-add.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { LogoutComponent } from './logout/logout.component'
import { AlertModule } from 'ng2-bootstrap';
import { RegisterComponent } from './register/register.component';
import { RoleComponent } from './role/role.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventEditComponent,
    EventAddComponent,
    DashboardComponent,
    ActivityComponent,
    ActivityEditComponent,
    ActivityAddComponent,
    EventDropdownComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MomentModule,
    AlertModule.forRoot()
  ],
  providers: [DatePipe, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }