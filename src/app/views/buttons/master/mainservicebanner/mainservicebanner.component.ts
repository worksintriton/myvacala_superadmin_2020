import { Component, OnInit, Inject, ViewChild, AfterViewInit, ElementRef  } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-mainservicebanner',
  templateUrl: './mainservicebanner.component.html',
  styleUrls: ['./mainservicebanner.component.scss']
})
export class MainservicebannerComponent implements OnInit {
  selectedimgae: any;
  Pic: any;
  Title: any;
  Description: any;
  banner_list: any;
  Status: any = 'Show';
  mainservice_list: any;
  MasterServiceName: any;
  valdate:boolean= false;
  id:any;
  create:boolean=true;
  width: any;
  height: any;
  @ViewChild('imgType', { static: false }) imgType: ElementRef;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,

    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this._api.maniservicebannerlist().subscribe(
      (response: any) => {
        console.log("response.Data");
        console.log(response.Data);
        this.banner_list = response.Data.reverse();
        console.log(this.banner_list);
      }
    );
    this._api.getservicelist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.mainservice_list = response.Data;

      }
    );
  }
  mainservicebanner(event) {
    console.log(event.target.value)
    let data = {
      "Master_Service_id": event.target.value
    }
    console.log(data)
    this._api.getmaniservicebannerlist(data).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.banner_list = response.Data;

      }
    );
  }
  Banner_save() {
    this.valitation();
    if(this.valdate ==true){
      if(this.create == true){
        let data = {
          "ServiceBanner_Image": this.Pic,
          "Master_Service_id": this.MasterServiceName,
          "Title": this.Title,
          "Desc": this.Description,
          "Status": this.Status
    
        }
        this._api.mainservicebanner(data).subscribe(
          (response: any) => {
            console.log(response);
            if (response.Code == 401) {
              alert(response.Message);
            } else {
              this.saveInLocal('banner_list', response.data);
              alert(response.Message);
              this.reset();
              this.ngOnInit();
            }
          }
        );
      }
      else{
        let data = {
          "_id" : this.id,
          "ServiceBanner_Image": this.Pic,
          "Master_Service_id": this.MasterServiceName,
          "Title": this.Title,
          "Desc": this.Description,
          "Status": this.Status
    
        }
        this._api.mainservicebanneredit(data).subscribe(
          (response: any) => {
            console.log(response);
            if (response.Code == 401) {
              alert(response.Message);
            } else {
              this.saveInLocal('banner_list', response.data);
              alert(response.Message);
              this.reset();
              this.ngOnInit();
              
            }
          }
        );
      }
      
    }
    else {
      if (this.Pic == undefined) {
        alert("Please upload image")
      }
      else {
        alert("Please fill all the fields")
      }
    }
   
  }
  
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  deleteservice(data) {
    let id = {
      "ServiceBanner_id": data
    }
    this._api.mainservicebannerdelete(id).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code == 401) {
          alert(response.Message);
        } else {
          alert(response.Message);

        }
        this.ngOnInit();
      }
    );
  }
  valitation(){
    if( this.Pic != undefined && this.MasterServiceName != undefined && (this.Title != undefined && this.Title != '') && (this.Description != undefined && this.Description != '') && this.Status != undefined){
      this.valdate =true;

    }
    else{
      this.valdate = false;
    }
  }


  Show(data) {
    if (data.Status == 'Show') {
      let a = {
        "_id": data._id,
        "Status": "Hide"
      }
      this._api.mainservicebanneredit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code == 401) {
            alert(response.Message);
          } else {
            this.ngOnInit();
            alert(response.Message);
            
          }
        }
      );
    }
    else if(data.Status == 'Hide') {
      let a = {
        "_id": data._id,
        "Status": "Show"
      }
      this._api.mainservicebanneredit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code == 401) {
            alert(response.Message);
          } else {
            this.ngOnInit();
            alert(response.Message);
            
          }
        }
      );
    }
  }
  editservice(item){
    this.create = false;
    this.id = item._id;
     this.Pic = item.ServiceBanner_Image ;
     this.MasterServiceName = item.Master_Service_id;
     this.Title = item.Title;
     this.Description = item.Desc;
     this.Status = item.Status;
     window.scrollTo(0,0);
  }
  reset(){
    this.create = true;
    this.id = undefined;
     this.Pic = undefined;
     this.MasterServiceName = undefined;
     this.Title = undefined;
     this.Description = undefined;
     this.Status = "Show";
  }

  fileupload(event) {
    console.log("this.width")
    this.selectedimgae = event.target.files[0];
    let fr = new FileReader();
    fr.onload = () => { // when file has loaded
      var img = new Image();
      img.onload = () => {
        this.width = img.width;
        this.height = img.height;
        console.log(this.width, this.height);
        if(this.width == 650 && this.height == 300){
          this.addfiles1();
        }
        else{
          Swal.fire(
            'Sorry',
            'Image Size Should be 650*300',
            'error'
          )
      
        }
      };

      img.src = fr.result as string; // The data URL 
    };

    fr.readAsDataURL(this.selectedimgae);
    this.imgType.nativeElement.value = ""; // clear the value after upload
  }
  addfiles1() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae, this.selectedimgae.name);
    this.http.post('http://3.101.31.129:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.Pic = res.Data;
      });
  }
}



