import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-otplogin',
  templateUrl: './otplogin.component.html',
  styleUrls: ['./otplogin.component.scss']
})
export class OtploginComponent implements OnInit {
  phonenumber:any;
  phError = false;
  phErrorMsg: any;
  constructor(
    private router: Router,   

    private http: HttpClient,

    private _api : ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
  }
  loginotp()
  {
   
    if(this.phonenumber ==='')
    {
      this.phError = true;
        this.phErrorMsg = 'Phone Number Required.'
      } else if (this.phonenumber < 10 ){
        this.phError = true;
        this.phErrorMsg = 'Phone Number Should be 10 Digits.'
      } else {
        this.phError = false;
      }
     
        let data = 
        {
          "Primary_Contact" : +this.phonenumber
        
        }
        this._api.otploginprocess(data).subscribe(
          (response: any) => {
            console.log(response);
            if(response.Code == 300){
              alert(response.Message);
            }else{
              console.log(this.phonenumber,response.Data.OTP)
              this.saveInLocal('phnumber', this.phonenumber);
              this.saveInLocal('otp', response.Data.OTP);
              this.router.navigate(['OtpValidation']);
            }
          }
        );
      
    
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  
  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
