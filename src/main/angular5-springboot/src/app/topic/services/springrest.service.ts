import { Topic } from './../model/Topic';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SpringrestService {
  private apiUrl = "http://localhost:8080/topics";
  constructor(private http: Http) {}

  findAll() {
    console.log("Spring rest triggered");
    return this.http
      .get(this.apiUrl)
      .map(res => res.json())
      .catch(error => Observable.throw(error.json().error || "Server error"));
  }

  // not yet implemented
  findById(id: string): Observable<Topic> {
    return null;
  }

  saveUser(topic: Topic): void {
    console.log("Saving: ", topic);
    this.http.post(this.apiUrl, topic)
      .subscribe((data) => {
      console.log(data);
    },
      err => {
        console.log(err);
      });
  }

  deleteUserById(id: string): void {
    console.log("Deleting:", id);
    this.http.delete(this.apiUrl + "/" + id)
      .subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
      });
  }

  updateUser(tppic: Topic): Observable<Topic> {
    return null;
  }
}
