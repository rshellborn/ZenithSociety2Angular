import { Component, OnInit, Input } from '@angular/core'; 
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location, DatePipe }                 from '@angular/common';
import { ActivityService } from '../activity.service';
import { Activity } from '../activity'; 

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.css']
})

export class ActivityAddComponent implements OnInit {
  selected: Activity;

    @Input()
  activity: Activity;

  constructor(
    private activityService: ActivityService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private datePipe: DatePipe) { }

  ngOnInit() {
    //check if user is admin role
    if(localStorage.getItem('role') != "Admin") {
      this.router.navigate(['./home']);
    }
  }

  goBack(): void {
    this.location.back();
  }

  newActivity: Activity = new Activity();
  add(newActivity: Activity): void {
    newActivity.creationDate = new Date();
    newActivity.description = newActivity.description.trim();
    
    if (!newActivity) { return; }

    this.activityService.create(newActivity)
      .then(newActivity => {
        this.selected = null;
        this.router.navigate(['./activities']);
      });
  }
}
