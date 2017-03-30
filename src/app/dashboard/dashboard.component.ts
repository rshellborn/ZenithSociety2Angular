import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService} from '../event.service';
import { EventDisplay } from '../event-display';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  events: Event[];
  eventDisplay: EventDisplay[];
  count: number = 0;
  role: string;
  loggedIn: string;

  eventsKeys: string[] = [];                          // array of keys in the eventsDictionary
  eventsDictionary: { [key: string]: Event[] } = {}; // [ Day => Event ]
  
  constructor(
    private eventService: EventService,
    private datePipe: DatePipe
  ) {
   }

  ngOnInit() {
    this.getEvents();

    this.loggedIn = localStorage.getItem("loggedIn");
    this.role = localStorage.getItem("role");
  }

  getNextWeek(num: number): void {
    console.log("Get next week");
    this.eventsKeys = [];
    this.eventsDictionary = {};
    this.eventService.getNewWeek(num)
      .then(events => this.reformatData(events))
  }

  getEvents(): void {
    this.eventService.getEvents()
      .then(results => {
        this.events = results;
        this.reformatData(results);
      });
  }

    reformatData(data: Event[]) {
    for (let e of data) {
      let fromDate = new Date(e.eventFrom);
      let toDate = new Date(e.eventTo);

      let dayKey = this.datePipe.transform(fromDate, 'fullDate');

      if (!this.eventsKeys.find(s => s == dayKey))
        this.eventsKeys.push(dayKey);

      (this.eventsDictionary[dayKey] = this.eventsDictionary[dayKey] ? this.eventsDictionary[dayKey] : []).push(e);
      }
    }
}