import { Component, OnInit, Input } from '@angular/core'; 
import { ActivatedRoute, Params, Router }   from '@angular/router';
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
  error: string;
  role: string;
  loggedIn: boolean;
  username: string;

  constructor(
    private activityService: ActivityService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    //check if user is admin role
    if(localStorage.getItem('role') != "Admin") {
      this.router.navigate(['./home']);
    }
    
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.activityService.getActivityById(id)
        .then(result => this.activity = result);
    });
    
    if(localStorage.getItem("loggedIn") == "true") {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    this.role = localStorage.getItem("role");
    this.username = localStorage.getItem("username");
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    console.log(this.activity.description);

    if(this.activity.description.length == 0) {
        this.setError("Description cannot be empty.");
        return;
    }

    this.activityService.update(this.activity)
      .then(() => this.goBack());
  }

  setError(errorMsg: string): void {
    this.error = errorMsg;
  }
}
