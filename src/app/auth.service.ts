import { Injectable } from '@angular/core';
import { Login } from './login'
import { Token } from './token'
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Role } from './role'
import { User } from './user'

@Injectable()
export class AuthService {
  private BASE_URL = "http://comp4976zenithsociety2.azurewebsites.net"; 
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  private tokenHeaders = new Headers({'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token')});

  constructor(private http: Http) { }

  login(data: string): Promise<Token> {
    return this.http
      .post(`${this.BASE_URL}/connect/token`, data, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Token)
      .catch(this.handleError);
  }

  register(data: string): Promise<Object> {
    return this.http
      .post(`${this.BASE_URL}/connect/register`, data, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Object)
      .catch(this.handleError);
  }

  //get all roles
  getRoles(username: string): Promise<String[]> {
    return this.http.get(`${this.BASE_URL}/api/usersapi/` + username, {headers: this.tokenHeaders})
      .toPromise()
      .then(response => response.json() as String[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
