import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { Router }   from '@angular/router';
import { Login } from '../login';
import { Token } from '../token';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input()
  result: Token;
  error: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(login: Login): void {
    let data = "grant_type=password&username=" + login.username + "&password=" + login.password;

    console.log((data));

    this.loginService.login(data)
        .then(result => { 
          this.getToken(result)
          this.router.navigate(['./dashboard']);
          })
        .catch(error => this.setError(error));
  }

  setError(error: any): void {
    var errorMsg = error.json();
    this.error = errorMsg;
  }

  getToken(result: Token): void {
    this.result = result;
    
    var token = this.result.token_type + " " + this.result.access_token;

    localStorage.setItem('token', token);

    console.log(localStorage.getItem('token'));
  }

}
