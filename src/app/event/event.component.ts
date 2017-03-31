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
  events: Event[];
  role: string;
  loggedIn: boolean;
  username: string;
  
  constructor(
  private eventService: EventService,
  private router: Router) { }

  ngOnInit(): void {
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

    this.getEvents();
  }

  getEvents(): void {
  this.eventService.getAllEvents()
    .then(events => this.events = events);
  }

  edit(event: Event): void {
    this.router.navigate(['/event/edit/', event.eventId]);
  }

   add(): void {
    this.router.navigate(['/event/add']);
  }

  delete(delEvent: Event): void {
    console.log('deleting event');
    this.eventService
        .delete(delEvent.eventId)
        .then(() => {
          this.events = this.events.filter(c => c !== delEvent);
        });
  }
}