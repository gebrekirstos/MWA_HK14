import {StudentType} from "./student.interface";

export class StudentService {

  data : StudentType[];
  constructor() {
    this.data = [
      {id : '1', name : 'Asaad Saad', email : 'asaad@mum.edu'},
      {id : '2', name : 'GK Gmk', email : 'gk@mum.edu'},
      {id : '3', name : 'Hagos Bashay', email : 'hagos@mum.edu'}
    ];
  }

  getData() {
    return this.data;
  }
}

