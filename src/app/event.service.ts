import { Injectable } from '@angular/core';
import { Event } from './event'
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {
  private BASE_URL = "http://comp4976zenithsociety2.azurewebsites.net/api"; 
  private headers = new Headers({'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token')});

  constructor(private http: Http) { } 
  
  //get all events
  getEvents(): Promise<Event[]> {
    return this.http.get(`${this.BASE_URL}/eventsapi`, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Event[])
      .catch(this.handleError);
  }


//get one event by id
  getEventById(id: number): Promise<Event> {
    return this.getEvents()
      .then(result => result.find(event => event.eventId === id));
  }

//update an event
    update(event: Event): Promise<Event> {
      const url = `${this.BASE_URL}/eventsapi/${event.eventId}`;
      return this.http
        .put(url, JSON.stringify(event), {headers: this.headers})
        .toPromise()
        .then(() => event)
        .catch(this.handleError);
  }

//add an event
  create(newEvent: Event): Promise<Event> {
    return this.http
      .post(`${this.BASE_URL}/eventsapi`, JSON.stringify(newEvent), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  //delete an event
  delete(id: number): Promise<void> {
    const url = `${this.BASE_URL}/eventsapi/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  
}
