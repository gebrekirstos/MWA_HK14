/**
 * Created by gebrekirstos
 */

import {Component, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {StudentType} from "./student.interface";
import {StudentService} from "./app.student.service";
@Component({
  selector : 'student-detail',
  template : `<div>
                <p>Id: {{student.id}}</p>
                <p>Name: {{student.name}}</p>
                <p>Email: {{student.email}}</p>
              </div>`
})
export class StudentDetailsComponent implements OnDestroy{

  private subscription : Subscription;
  id : string;
  student : StudentType;

  constructor(private activatedRoute : ActivatedRoute, private studentService : StudentService) {
    this.subscription = this.activatedRoute.params.subscribe(param => this.id = param['id']);
    this.student = this.studentService.getData().filter(stud => stud.id == this.id)[0];
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
