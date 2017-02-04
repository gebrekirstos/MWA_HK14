import {Component, OnInit} from "@angular/core";
import {StudentService} from "./app.student.service";
import {StudentType} from "./student.interface";
@Component({
  selector : 'app-students',
  templateUrl : 'students.component.html'
})
export class StudentsComponent implements OnInit{

  students : StudentType[];
  constructor(private studentService : StudentService){}

  ngOnInit() {
    this.students = this.studentService.getData();
  }
}
