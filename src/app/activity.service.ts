import { Injectable } from '@angular/core';
import { Activity } from './activity'
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ActivityService {
  private BASE_URL = "http://comp4976zenithsociety2.azurewebsites.net/api"; 
  private headers = new Headers({'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token')});

  constructor(private http: Http) { } 
  
  //get all events
  getActivities(): Promise<Activity[]> {   
    return this.http.get(`${this.BASE_URL}/activitiesapi`, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Activity[])
      .catch(this.handleError);
  }


//get one activity by id
  getActivityById(id: number): Promise<Activity> {
    return this.getActivities()
      .then(result => result.find(activity => activity.activityId === id));
  }

//update an activity
    update(activity: Activity): Promise<Activity> {
      const url = `${this.BASE_URL}/activitiesapi/${activity.activityId}`;
      return this.http
        .put(url, JSON.stringify(activity), {headers: this.headers})
        .toPromise()
        .then(() => activity)
        .catch(this.handleError);
  }

  //add an activity
  create(newActivity: Activity): Promise<Activity> {
    return this.http
      .post(`${this.BASE_URL}/activitiesapi`, JSON.stringify(newActivity), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  //delete an activity
  delete(id: number): Promise<void> {
    const url = `${this.BASE_URL}/activitiesapi/${id}`;
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
