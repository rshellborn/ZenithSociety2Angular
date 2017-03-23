import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { EventEditComponent } from '../event-edit/event-edit.component';

@Component({
  selector: 'app-event-dropdown',
  templateUrl: './event-dropdown.component.html',
  styleUrls: ['./event-dropdown.component.css']
})
export class EventDropdownComponent implements OnInit {
  activities: Activity[];
  currentSelected: number;
  activityId: number;

  constructor(
    private activityService: ActivityService,
    private eventEditComponent: EventEditComponent
  ) { }

  ngOnInit(): void {
    this.getActivities();
    this.getCurSelActivity();
  }

  getActivities(): void {
  this.activityService.getActivities()
    .then(activities => this.activities = activities);
  }

  getCurSelActivity(): void {
    this.currentSelected = this.eventEditComponent.getId();
  }

  onChange(value) {
    console.log(value);

    this.activityId = value;

    //set activity id in event-edit
    this.eventEditComponent.activityId = value;
  }
}
