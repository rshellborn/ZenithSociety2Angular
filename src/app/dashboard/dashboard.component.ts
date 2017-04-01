import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { User } from '../user';
import { Role } from '../role';
import { EventService} from '../event.service';
import { AuthService } from '../auth.service';
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
  memberRole: boolean;
  adminRole: boolean;
  loggedIn: boolean;
  username: string;
  message: boolean = false;
  user: User;
  roles: Role[];

  eventsKeys: string[] = [];                         
  eventsDictionary: { [key: string]: Event[] } = {};
  
  constructor(
    private eventService: EventService,
    private authService: AuthService,
    private datePipe: DatePipe
  ) {
   }

  ngOnInit() {
    this.username = localStorage.getItem("username");
    localStorage.setItem("adminRole", "false");
    localStorage.setItem("memberRole", "false");

    this.getRoles();
    this.getEvents();

    if(localStorage.getItem("loggedIn") == "true") {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  getRoles(): void {
    this.authService.getRoles(this.username)
      .then(roles => {
        this.checkRoles(roles);
      })
  }

  checkRoles(roles: any): void {
    for(let role of roles) {
      if(role == "Admin") {
        console.log("admin");
        localStorage.setItem("adminRole", "true");
        this.adminRole = true;
      } else if (role == "Member") {
        console.log("member");
        localStorage.setItem("memberRole", "true"); 
        this.memberRole = true;
      }
    }
  }

  getWeek(num: number): void {
    this.count += num;
    if(this.count == -1) {
      this.getPrevWeek();
    } else if (this.count == 1) {
      this.getNextWeek();
    } else if (this.count == 0) {
      this.getEvents();
    } else {
      if(this.count == 2) {
        this.count -= 1;
      } else {
        this.count += 1;
      }
      return;
    }
  }

  getNextWeek(): void {
    console.log("Get next week");
    this.eventsKeys = [];
    this.eventsDictionary = {};
    this.eventService.getNextWeek()
      .then(events => this.reformatData(events))
  }

  getPrevWeek(): void {
    console.log("Get previous week");
    this.eventsKeys = [];
    this.eventsDictionary = {};
    this.eventService.getPrevWeek()
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
      if(data.length == 0) {
        this.message = true;
      } else {
        this.message = false;
      }

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