import { Component, OnInit, Inject} from '@angular/core';
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
  
  email_id : string;
  passwords : string;
  phone_number : number;
  data : any ;
  selectedAudio1:any;
  Pic:any;



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

    private _api : ApiService ,
    @Inject(SESSION_STORAGE) private storage: StorageService 
  ) {
    
  }

  ngOnInit() {

  }
  emailValidator(){
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailcheck = reg.test(this.email);
    if (this.email === '' || this.email === undefined || this.email === null ) {
      this.emailError = true;
      this.emailErrorMsg = 'Email Address Required.'
    } else if (!emailcheck){
      this.emailError = true;
      this.emailErrorMsg = 'Enter Valid Email Address.'
    } else {
      this.emailError = false;
    }
  }
  passwordValidator(){
    if (this.password === '' || this.password === undefined || this.password === null ) {
      this.passwordError = true;
      this.passwordErrorMsg = 'Password Required.'
    } else {
      this.passwordError = false;
    }
    }
  
  emailChange(data){
    //console.log(data);
    this.email = data;
   this.emailValidator();
  }

  passwordChange(data){
    //console.log(data);
    this.password = data;
    this.passwordValidator();
  }
  validator(){
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
  let loginObj ={
      userId: this.email,
      password: this.password
  };

  if ((this.email == 'myvacala@gmail.com') && (this.password == '123456')) {
    this.router.navigateByUrl('/superadmin/dashboard');
  } else {
    alert('Invalid Login');
  }


  //console.log(loginObj);

  // this.Api.
  //   Login<any>(loginObj)
  //   .subscribe((res: any) => {
  //     //console.log(res);
  //     if (res.code === 402) {
  //       this.loginError =  true;
  //       this.loginErrorMsg = 'Email or Password Wrong!..';
  //       setTimeout(() => {
  //         this.loginError =  false;
  //       }, 5000);
  //     } else if (res.code === 404) {
  //       this.loginError =  true;
  //       this.loginErrorMsg = 'Sorry! Account Not Found!.';

  //     }
  //     this.Api.setLoginDetail(res.data[0]);
  //     this.loginDetails = res;
  //     this.userData = res.data[0];
  //    //console.log(this.userData);

  //     this.Api.setUserId(res.data[0].user_id);
  //     sessionStorage.user = res.data[0].email;
  //     sessionStorage.userID = res.data[0].user_id;
  //     sessionStorage.role = res.data[0].roll_name;
  //     sessionStorage.modules = this.userData.modules.map(el => el.module_id);
  //     // //console.log(sessionStorage.user);
  //     if (!this.userData.isdeleted && !this.userData.isdisabled) {
  //       const module_ids = this.userData.modules.map(el => el.module_id).sort();
  //       if (module_ids.includes(8)) {
  //         this.router.navigate(['admin', 'dashboard']);
  //       } else if (module_ids.includes(1)) {
  //         this.router.navigate(['admin', 'list']);
  //       } else if (module_ids.includes(2)) {
  //         this.router.navigate(['admin', 'listaudio']);
  //       } else if (module_ids.includes(4)) {
  //         this.router.navigate(['admin', 'listemployee']);
  //       } else if (module_ids.includes(5)) {
  //         this.router.navigate(['admin', 'trending']);
  //       } else if (module_ids.includes(6) && this.userData.roll_name === 'Advertisement') {
  //         this.router.navigate(['admin', 'UserAdDashboard']);
  //       } else if (module_ids.includes(6)) {
  //         this.router.navigate(['admin', 'AdminDashboard']);
  //       } else if (module_ids.includes(7)) {
  //         this.router.navigate(['admin', 'VCorners']);
  //       }

  //     } else if (this.userData.isdisabled) {
  //       this.loginError = true;
  //       this.loginErrorMsg = 'Sorry! This User Blocked!.';
  //     } 

  //   },
  //     err => () => {
  //       //console.log(err);
  //     },
  //     () => {
  //   });
}
}

// logintest(){
//  console.log(this.email_id,this.passwords)
// console.log(this.Pic);

//  let data = 
//  {
//   "Email": this.email_id,
//   "Type": 0,
//   "Password": this.passwords
// }
// console.log(data);
// this._api.loginprocess(data).subscribe(
//   (response: any) => {
//     console.log(response);
//     if(response.Code == 500){
//       alert(response.Message);
//     }else{
//        this.saveInLocal('login_details',response.data);
//        alert(response.Message);
//        this.router.navigate(['Home', 'dashboard']);
//     }
//   }
// );

// }






fileupload1(event){
  this.selectedAudio1 = event.target.files[0];
}

addfiles1()
{
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

