import { Injectable } from '@angular/core';
import { Login } from './login'
import { Token } from './token'
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private BASE_URL = "http://comp4976zenithsociety2.azurewebsites.net"; 
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: Http) { }

  login(data: string): Promise<Token> {
    return this.http
      .post(`${this.BASE_URL}/connect/token`, data, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Token)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  

}
