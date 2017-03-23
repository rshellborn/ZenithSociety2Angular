import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Event} from '../event';
import {EventService} from '../event.service';

@Component({
  selector: 'event-component',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  selected: Event;
  events: Event[];
  
  constructor(
  private eventService: EventService,
  private router: Router) { }

  ngOnInit(): void {
    this.getEvents();
  }

  onSelect(event: Event): void {
    this.selected = event;
  }

  getEvents(): void {
  this.eventService.getEvents()
    .then(events => this.events = events);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selected.eventId]);
  }

  // newEvent: Event = new Event();
  // add(newEvent: Event): void {
  //   newEvent.FirstName = newEvent.FirstName.trim();
  //   newEvent.LastName = newEvent.LastName.trim();
  //   newEvent.Occupation = newEvent.Occupation.trim();
  //   newEvent.Gender = newEvent.Gender.trim();
  //   newEvent.Picture = newEvent.Picture.trim();
    
  //   if (!newEvent) { return; }
  //   this.eventService.create(newEvent)
  //     .then(newEvent => {
  //       this.selected = null;
  //       this.router.navigate(['./dashboard']);
  //     });
  // }

  delete(delEvent: Event): void {
    console.log('deleting event');
    this.eventService
        .delete(delEvent.eventId)
        .then(() => {
          this.events = this.events.filter(c => c !== delEvent);
          if (this.selected === delEvent) { this.selected = null; }
        });
  }
}