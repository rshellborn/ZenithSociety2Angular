import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService} from '../event.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  events: Event[];
  
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents()
      .then(results => this.events = results.slice(0, 4));
  }
}