/*
* This is MWA homework 
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//Added new code
import {HomeComponent } from './home.component';
import {MyRoutes} from "./app.routes";
import {StudentsComponent} from "./students.component";
import {StudentService} from "./app.student.service";
import {StudentDetailsComponent} from "./student.detail.component";
import {ProfileGuard} from "./profile.guard";
import {Error404Component} from "./error404.component";


@NgModule({
  declarations: [
    AppComponent,
    //added code
    HomeComponent,
    StudentsComponent,
    StudentDetailsComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyRoutes
  ],
  providers: [StudentService, ProfileGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
