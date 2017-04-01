import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { EventService } from '../event.service';
import { Router }   from '@angular/router';
import { Login } from '../login';
import { Token } from '../token';
import { Event } from '../event';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input()
  result: Token;
  error: string;
  loggedIn: boolean;
  users: Event[];

  constructor(
    private authService: AuthService,
    private eventServe: EventService,
    private router: Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem("loggedIn") == "true") {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    if(this.loggedIn != false) {
      this.router.navigate(['./home']);
    }
  }

  login(login: Login): void {
    let data = "grant_type=password&username=" + login.username + "&password=" + login.password;

    this.authService.login(data)
        .then(result => { 
          this.getToken(result, login.username);
          this.router.navigate(['./home']);
          })
        .catch(error => this.setError(error));
  }

  setError(error: any): void {
    var errorMsg = error.json();
    this.error = errorMsg;
  }

  getToken(result: Token, username: string): void {
    this.result = result;
    var token = this.result.token_type + " " + this.result.access_token;

    localStorage.setItem('token', token);
    localStorage.setItem('loggedIn', "true");
    localStorage.setItem('refresh', "true");
    localStorage.setItem('username', username);

    console.log(localStorage.getItem('token'));
  }
}
