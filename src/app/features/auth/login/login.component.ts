import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { debug } from 'util';
import { Messages } from '../../../shared/constants/messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  mode = 'login';
  resetEmailAddress;
  oldPassword;
  newPassword;
  changeUserEmail;
  constructor(
    private fb: FormBuilder, private route: Router, private _loginServices: LoginService) {
    this.loginForm = fb.group({
      EmailAddress: [null, Validators.compose([Validators.required])],
      UserPassword: [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }
  onSubmit(formData) {
    this._loginServices.login(formData).subscribe(resp => {
      const result = resp;
      if (typeof result === 'string') {
        alert(result);
      } else {
        localStorage.setItem('user', JSON.stringify(resp));
        this.route.navigateByUrl('/fieldrule/home');
      }
    });
  }
  onForgetPasswordClick() {
    this.mode = 'forgot';
  }

  resetPassword() {
    console.log(this.resetEmailAddress);
    const data = this.resetEmailAddress.split('@');
    if (data[1] === 'utsouthwestern.edu') {
      alert(Messages.profileChangeUTSW);
    } else if (data[1] === 'childrens.com') {
      alert(Messages.profileChangeChildrens);
    } else {
      this._loginServices.resetPassword(this.resetEmailAddress).subscribe(resp => {
        console.log(resp);
        if (resp === -1) {
          alert(Messages.profileChangeUTSW);
        }
      });
    }
  }

  changePassword() {
    console.log(this.oldPassword);
    console.log(this.newPassword);
  }

}
