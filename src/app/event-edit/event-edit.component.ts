import { Component, OnInit, Input } from '@angular/core'; 
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';
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

  constructor(
    private eventService: EventService,
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
