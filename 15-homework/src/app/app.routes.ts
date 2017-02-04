import {HomeComponent} from "./home.component";
import {Routes, RouterModule} from "@angular/router";
import {StudentsComponent} from "./students.component";
import {StudentDetailsComponent} from "./student.detail.component";
import {ProfileGuard} from "./profile.guard";
import {Error404Component} from "./error404.component";

const MY_ROUTES : Routes = [
  { path : 'error/404', component : Error404Component },
  { path : '', component : HomeComponent},
  { path : 'students', component : StudentsComponent },
  { path : 'students/profile/:id', component : StudentDetailsComponent, canActivate : [ProfileGuard]},
  { path : 'students/profile', redirectTo : 'error/404'},
  { path : '**', redirectTo: 'error/404' }
];

export const MyRoutes = RouterModule.forRoot(MY_ROUTES);
