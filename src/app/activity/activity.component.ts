import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from '../activity';
import {ActivityService} from '../activity.service';

@Component({
  selector: 'activity-component',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  selected: Activity;
  activities: Activity[];
  
  constructor(
  private activityService: ActivityService,
  private router: Router) { }

  ngOnInit(): void {
    this.getActivities();
  }

  onSelect(activity: Activity): void {
    this.selected = activity;
  }

  getActivities(): void {
  this.activityService.getActivities()
    .then(activities => this.activities = activities);
  }

  // gotoDetail(): void {
  //   this.router.navigate(['/activity/edit', this.selected.activityId]);
  // }

  // newEvent: Event = new Event();
  // add(newEvent: Event): void {
  //   newEvent.FirstName = newEvent.FirstName.trim();
  //   newEvent.LastName = newEvent.LastName.trim();
  //   newEvent.Occupation = newEvent.Occupation.trim();
  //   newEvent.Gender = newEvent.Gender.trim();
  //   newEvent.Picture = newEvent.Picture.trim();
    
  //   if (!newEvent) { return; }
  //   this.eventService.create(newEvent)
  //     .then(newEvent => {
  //       this.selected = null;
  //       this.router.navigate(['./dashboard']);
  //     });
  // }

  // delete(delActivity: Activity): void {
  //   console.log('deleting activity');
  //   this.activityService
  //       .delete(delActivity.activityId)
  //       .then(() => {
  //         this.activities = this.activities.filter(c => c !== delActivity);
  //         if (this.selected === delActivity) { this.selected = null; }
  //       });
  // }
}