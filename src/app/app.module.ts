import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventComponent } from './event/event.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ActivityComponent } from './activity/activity.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
import { EventEditComponent } from './event-edit/event-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    EventDetailComponent,
    EventComponent,
    DashboardComponent,
    ActivityComponent,
    ActivityEditComponent,
    EventEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }