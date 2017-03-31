import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private app: AppComponent
    ) { }

  ngOnInit() {
    localStorage.setItem('loggedIn', "false");
    this.router.navigate(['./home']);
  }

}
