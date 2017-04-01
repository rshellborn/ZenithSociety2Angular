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
  role: string;
  loggedIn: boolean;
  username: string;
  adminRole: boolean;
  
  constructor(
  private activityService: ActivityService,
  private router: Router) { }

  ngOnInit(): void {
    //check if user is admin role
    if(localStorage.getItem('role') != "Admin") {
      this.router.navigate(['./home']);
    }
    
    this.getActivities();

    if(localStorage.getItem("loggedIn") == "true") {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

     if(localStorage.getItem("adminRole") == "true") {
      this.adminRole = true;
    } else {
      this.adminRole = false;
    }

    this.username = localStorage.getItem("username");
  }

  onSelect(activity: Activity): void {
    this.selected = activity;
  }

  getActivities(): void {
  this.activityService.getActivities()
    .then(activities => this.activities = activities);
  }

  edit(activity: Activity): void {
    this.router.navigate(['/activity/edit/', activity.activityId]);
  }

  add(): void {
    this.router.navigate(['/activity/add']);
  }

  delete(delActivity: Activity): void {
    console.log('deleting activity');
    this.activityService
        .delete(delActivity.activityId)
        .then(() => {
          this.activities = this.activities.filter(c => c !== delActivity);
          if (this.selected === delActivity) { this.selected = null; }
        });
  }
}