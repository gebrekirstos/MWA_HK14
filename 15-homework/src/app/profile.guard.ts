import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {StudentService} from "./app.student.service";
import {Injectable} from "@angular/core";


@Injectable()
export class ProfileGuard implements CanActivate {

  constructor(private studentService : StudentService, protected router : Router) {}
  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<boolean> | boolean {
    var id = route.params['id'];
    if(id) {
      var studentsList = this.studentService.getData().filter(student => student.id === id);
      if(studentsList.length > 0) {
        return true;
      }
    }
    this.router.navigate(['error/404']);
    return false;

  }
}
