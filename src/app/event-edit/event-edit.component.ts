import { Component, OnInit, Input } from '@angular/core'; 
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location, DatePipe }                 from '@angular/common';
import { EventService } from '../event.service';
import { Event } from '../event';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
@Input()
  event: Event;
  id: number;
  activityId: number;
  error: string;
  role: string;
  loggedIn: boolean;
  username: string;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private location: Location
  ) { }

  ngOnInit() {
    //check if user is admin role
    if(localStorage.getItem('role') != "Admin") {
      this.router.navigate(['./home']);
    }

    if(localStorage.getItem("loggedIn") == "true") {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    this.role = localStorage.getItem("role");
    this.username = localStorage.getItem("username");

    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
      this.eventService.getEventById(this.id)
        .then(result => this.event = result);
    });
  }

  getId(): number {
    return this.event.activityId
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.event.activityId = this.activityId;

    if(this.event.isActive == true) {
      this.event.isActive = true;
    } else {
      this.event.isActive = false;
    }

    var date1 = this.datePipe.transform(this.event.eventFrom, 'dd/MM/yyyy');
    var date2 = this.datePipe.transform(this.event.eventTo, 'dd/MM/yyyy');

    if(date1 != date2) {
      this.setError("Start time and end time must be on the same day.");
      return;
    }

    if(this.event.eventFrom == undefined || 
       this.event.eventTo == undefined) {
        this.setError("Enter a start time and end time.");
        return;
    }

    if(this.event.eventFrom > this.event.eventTo || this.event.eventFrom == this.event.eventTo) {
        this.setError("Start time must be before end time.");
        return;
    }

    this.eventService.update(this.event)
      .then(() => this.goBack());
  }

  setError(errorMsg: string): void {
    this.error = errorMsg;
  }
}
