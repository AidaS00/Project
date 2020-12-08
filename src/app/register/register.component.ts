import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../deactivate.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements CanComponentDeactivate {
  user = {
    fname: '',
    lname: '',
    date: '',
    Cname: '',
    email: '',
    comment: '',
    number: ''
  };
  saved = false;

  onSubmit(){
    console.log(this.user.fname, this.user.lname, this.user.date, this.user.Cname, this.user.email, this.user.comment, this.user.number);
    this.saved = true;
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if ((this.user.fname.length > 0 || this.user.lname.length > 0 || this.user.date.length > 0 || this.user.Cname.length > 0 ||
      this.user.email.length > 0 || this.user.comment.length > 0 || this.user.number.length > 0)
      && !this.saved) {
      return confirm('Your changes are unsaved!! Do you like to exit');
    }
    return true;
  }

}
