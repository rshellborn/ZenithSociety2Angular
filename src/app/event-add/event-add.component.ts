import { Component, OnInit, Input } from '@angular/core'; 
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location, DatePipe }                 from '@angular/common';
import { EventService } from '../event.service';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { Event } from '../event'; 

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
  activities: Activity[];
  activityId: number;
  currentSelected: number;
  error: string;

  selected: Event;

    @Input()
  event: Event;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private datePipe: DatePipe,
    private activityService: ActivityService
    ) { }

  ngOnInit() {
    //check if user is admin role
    if(localStorage.getItem('role') != "Admin") {
      this.router.navigate(['./home']);
    }
    
    this.getActivities();
    this.currentSelected = 1;
  }

  getActivities(): void {
  this.activityService.getActivities()
    .then(activities => this.activities = activities);
  }

  onChange(value) {
    console.log(value);
    this.activityId = value;
  }

  goBack(): void {
    this.location.back();
  }

   newEvent: Event = new Event();
  add(newEvent: Event): void {
    
    newEvent.enteredBy = localStorage.getItem("username");
    newEvent.activityId = this.activityId
    newEvent.creationDate = new Date();
    newEvent.eventFrom = this.newEvent.eventFrom;
    newEvent.eventTo = this.newEvent.eventTo;

    if(newEvent.eventFrom == undefined || 
       newEvent.eventTo == undefined) {
        this.setError("Enter a start time and end time.");
        return;
    }

    if(newEvent.eventFrom > newEvent.eventTo || newEvent.eventFrom == newEvent.eventTo) {
        this.setError("Start time must be before end time.");
        return;
    }

    if(newEvent.isActive == true) {
      newEvent.isActive = true;
    } else {
      newEvent.isActive = false;
    }
    
    if (!newEvent) { return; }

    this.eventService.create(newEvent)
      .then(newEvent => {
        this.selected = null;
        this.router.navigate(['./events']);
      });
  }

  setError(errorMsg: string): void {
    this.error = errorMsg;
  }
}
