import { SpringrestService } from './../services/springrest.service';
import { Component, OnInit } from '@angular/core';
import { Topic } from '../model/Topic';

@Component({
  selector: "app-topic-component",
  templateUrl: "./topic-component.component.html",
  styleUrls: ["./topic-component.component.scss"],
  providers: [SpringrestService]
})
export class TopicComponentComponent implements OnInit {
  public topics: Topic[];

  // input
  topicCode: String;
  topicName: String;
  topicDescription: String;

  constructor(private springrest: SpringrestService) {}

  ngOnInit() {
    this.getAllTopics();
  }

  // get all topics
  getAllTopics() {
    this.springrest.findAll().subscribe(
      res => {
        console.log(res);
        this.topics = res;
      },
      err => {
        console.log(err);
      }
    );
    console.log("Get all topic triggered");
  }

  // get single topic
  getTopic() {
    // insert logic here
  }

  // update a Topic
  updateTopic(id) {
    // insert logic here
  }
  // remove Topic
  removeTopic(id) {
    // insert logic here
    this.springrest.deleteUserById(id);
  }

  // add topic
  addTopic() {
    const topicInput = new Topic(
      this.topicCode,
      this.topicName,
      this.topicDescription
    );
    this.springrest.saveUser(topicInput);
  }
}
