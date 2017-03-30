import { Component, OnInit } from '@angular/core';
import { Register } from '../register'; 
import { Login } from '../login';
import { AuthService } from '../auth.service';
import { Router }   from '@angular/router';
import { Token } from '../token';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  error: string;
  message: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register: Register = new Register();

  registerUser(register: Register): void {
    let data = "username=" + register.username + 
              "&firstname=" + register.firstname +
              "&lastname=" + register.lastname +
              "&email=" + register.email +
              "&password=" + register.password +
              "&confirmPassword=" + register.confirmPassword;

    let loginData = "grant_type=password&username=" + register.username + "&password=" + register.password;

    this.authService.register(data)
        .then(response => {
          this.setMessage();
          this.login(loginData, register.username)
        })
        .catch(error => this.setError(error));
  }

  setMessage(): void {
    this.message = "You successfully registered!";
  }

  setError(error: any): void {
    var errorMsg = error.json();
    this.error = errorMsg;
  }

  login(loginData: string, username: string): void {
    this.authService.login(loginData)
        .then(result => { 
          this.getToken(result, username);
          this.getRole();
          this.router.navigate(['./home']);
          })
        .catch(error => this.setError(error));
  }

  getToken(result: Token, username: string): void {
    var token = result.token_type + " " + result.access_token;

    localStorage.setItem('token', token);
    localStorage.setItem('loggedIn', "true");
    localStorage.setItem('refresh', "true");
    localStorage.setItem('username', username);

    console.log(localStorage.getItem('token'));
  }

  getRole(): void {
    localStorage.setItem('role', "Admin");
  }
}
