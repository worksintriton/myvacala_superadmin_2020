import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';
import { log } from 'util';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email_id: string;
  passwords: string;
  phone_number: number;
  data: any;
  selectedAudio1: any;
  Pic: any;



  loginDetails: any;
  userData: any;
  validation = false;

  loginError = false;
  loginErrorMsg: any;

  email: any;
  emailError = false;
  emailErrorMsg: any;


  password: any;
  passwordError = false;
  passwordErrorMsg: any;

  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) {

  }

  ngOnInit() {

  }
  emailValidator() {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailcheck = reg.test(this.email);
    if (this.email === '' || this.email === undefined || this.email === null) {
      this.emailError = true;
      this.emailErrorMsg = 'Email Address Required.'
    } else if (!emailcheck) {
      this.emailError = true;
      this.emailErrorMsg = 'Enter Valid Email Address.'
    } else {
      this.emailError = false;
    }
  }
  passwordValidator() {
    if (this.password === '' || this.password === undefined || this.password === null) {
      this.passwordError = true;
      this.passwordErrorMsg = 'Password Required.'
    } else {
      this.passwordError = false;
    }
  }

  emailChange(data) {
    //console.log(data);
    this.email = data;
    this.emailValidator();
  }

  passwordChange(data) {
    //console.log(data);
    this.password = data;
    this.passwordValidator();
  }
  validator() {
    this.emailValidator();
    this.passwordValidator();
    if (!this.emailError && !this.passwordError) {
      this.validation = true;
    } else {
      this.validation = false;
    }
  }
  logintest1() {
    // this.router.navigate(['admin', 'dashboard']);
    this.validator();
    if (this.validation) {
      // let loginObj = {
      //   userId: this.email,
      //   password: this.password
      // };

      // if ((this.email == 'myvacala@gmail.com') && (this.password == '123456')) {
      //   this.router.navigateByUrl('/superadmin/dashboard');
      // } else {
      //   alert('Invalid Login');
      // }

      let loginObj = {
        "Email_Id": this.email,
        "password": this.password
      };
      this._api.emp_login(loginObj).subscribe((res: any) => {
        console.log(res)
        if (res.Code == 200) {
          this.router.navigateByUrl('/superadmin/dashboard');
          this.saveInLocal('login_emp', res.Data);
        }
        else if(res.Code == 404) {
          alert(res.Message);
        }
      });

      
    }
  }

  

  fileupload1(event) {
    this.selectedAudio1 = event.target.files[0];
  }

  addfiles1() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedAudio1, this.selectedAudio1.name);
    this.http.post('http://54.214.141.11:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.Pic = res.Data;
      });
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
}

