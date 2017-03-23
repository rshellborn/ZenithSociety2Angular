import { Component, OnInit, Input } from '@angular/core'; 
import { ActivatedRoute, Params }   from '@angular/router';
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

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
      this.eventService.getEventById(this.id)
        .then(result => this.event = result);
    });
  }

  getId(): number {
    return this.id
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.event.activityId = this.activityId;
    console.log(this.event.activityId);
    this.eventService.update(this.event)
      .then(() => this.goBack());
  }
}
