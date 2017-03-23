import { Component, OnInit, Input } from '@angular/core'; 
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { ActivityService } from '../activity.service';
import { Activity } from '../activity'; 

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.css']
})
export class ActivityEditComponent implements OnInit {
  @Input()
  activity: Activity;

  constructor(
    private activityService: ActivityService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

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

  // save(): void {
  //   this.activityService.update(this.activity)
  //     .then(() => this.goBack());
  // }
}
