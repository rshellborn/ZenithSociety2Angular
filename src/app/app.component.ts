import { Component } from '@angular/core';
import { EventService } from './event.service';
import { ActivityService } from './activity.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ EventService, ActivityService ]
})
export class AppComponent {
  title = 'Zenith Society';
  loggedIn: boolean;
  role: string;

  ngOnInit() {

    if(localStorage.getItem("loggedIn") == "true") {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

      this.role = localStorage.getItem("role");
  }
}