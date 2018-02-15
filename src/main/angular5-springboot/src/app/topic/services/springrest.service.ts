import { Topic } from "./../model/Topic";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";
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

  saveUser(topic: Topic) {
    console.log("Saving: ", topic);

    const promise = new Promise((resolve, reject) => {
      this.http
        .post(this.apiUrl, topic)
        .toPromise()
        .then(
          data => {
            console.log(data);
            resolve();
          },
          err => {
            console.log(err);
          }
        );
    });
    return promise;
  }

  deleteTopic(id: string) {
    console.log("Deleting:", id);
    const promise = new Promise((resolve, reject) => {
      this.http
        .delete(this.apiUrl + "/" + id)
        .toPromise()
        .then(
          data => {
            console.log(data);
            resolve();
          },
          err => {
            console.log(err);
          }
        );
    });
    return promise;
  }

  updateUser(tppic: Topic): Observable<Topic> {
    return null;
  }
}
