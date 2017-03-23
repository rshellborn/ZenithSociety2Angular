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

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.eventService.getEventById(id)
        .then(result => this.event = result);
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.eventService.update(this.event)
      .then(() => this.goBack());
  }


}
