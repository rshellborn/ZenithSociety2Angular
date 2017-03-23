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
import {MomentModule} from 'angular2-moment';
import { ActivityAddComponent } from './activity-add/activity-add.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventEditComponent,
    DashboardComponent,
    ActivityComponent,
    ActivityEditComponent,
    ActivityAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MomentModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }