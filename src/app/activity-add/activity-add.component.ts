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
  selected: Activity

    @Input()
  activity: Activity;

  constructor(
    private activityService: ActivityService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.activityService.getActivityById(id)
        .then(result => this.activity = result);
    });
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
