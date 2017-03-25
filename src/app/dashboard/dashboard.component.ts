import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService} from '../event.service';
import { EventDisplay } from '../event-display';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  events: Event[];
  eventDisplay: EventDisplay[];
  
  constructor(private eventService: EventService) {
   }

  ngOnInit() {
    this.getEvents();

     
    //this.sortEvents.bind(this.events);
  }

  getEvents(): void {
    this.eventService.getEvents()
      .then(results => {
        this.events = results;
        //this.sortEvents();
      });
  }

  sortEvents(): void {
    var prevDate = this.events[0].eventFrom;
    var index = 0;
    let firstIt = true;

    for(var i = 0; i < this.events.length; i++) {
      console.log('iterating');
      var date = event[i].eventFrom;

      //create a new table row with the new date
      if(prevDate != date) {
        if(firstIt != true) {
          this.eventDisplay.push(newEventDisplay);
        } else {
          firstIt = false;
        }

        var newEventDisplay = new EventDisplay;
        newEventDisplay.date = date;
      }

      newEventDisplay.event.push(event[i]);
    }
  }

}