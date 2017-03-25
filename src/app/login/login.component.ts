import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
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

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  login(): void {
    var login = new Login;
    login.grant_type = "password";
    login.username = "rachel";
    login.password = "Test,123";

    let data = "grant_type=" + login.grant_type + "&username=" + login.username + "&password=" + login.password;

    console.log((data));

    this.loginService.login(data)
        .then(result => this.getToken(result));
  }

  getToken(result: Token): void {
    this.result = result;
    
    var token = this.result.token_type + " " + this.result.access_token;

    localStorage.setItem('token', token);

    console.log(localStorage.getItem('token'));
  }

}
