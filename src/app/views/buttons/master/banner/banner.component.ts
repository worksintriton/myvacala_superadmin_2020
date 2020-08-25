import { Component, OnInit, Inject,  ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  selectedimgae: any;
  Pic: any;
  Title: any;
  Description: any;
  banner_list: any;
  Status: any = "Show";
  valdate: boolean = false;
  id: any;
  create: boolean = true;
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
    this._api.bannerlist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.banner_list = response.Data.reverse();
        console.log(this.banner_list);
      }
    );
  }
  Banner_save() {

    this.valitation();
    if (this.valdate == true) {

      if (this.create == true) {
        let data = {

          "Homebanner_Image": this.Pic,
          "Title": this.Title,
          "Desc": this.Description,
          "Status": this.Status


        }
        this._api.banner(data).subscribe(
          (response: any) => {
            console.log(response);
            if (response.Code == 401) {
              alert(response.Message);
            } else {
              this.reset();
              this.saveInLocal('banner_list', response.data);
              alert(response.Message);
              this.saveInLocal("foredit", true);
              this.ngOnInit();
            }
          }
        );
      }
      else {
        let data = {
          "Banner_id": this.id,
          "Homebanner_Image": this.Pic,
          "Title": this.Title,
          "Desc": this.Description,
          "Status": this.Status


        }
        this._api.banneredit(data).subscribe(
          (response: any) => {
            console.log(response);
            if (response.Code == 401) {
              alert(response.Message);
            } else {
              this.reset();
              alert(response.Message);
              this.ngOnInit();
              this.create = true;
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
  deletebanner(id) {
    let data = {
      "Banner_id": id
    }
    this._api.DeleteBanner(data).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code == 401) {
          alert(response.Message);
        } else {
          alert(response.Message);
          this.ngOnInit();
        }
      }
    );
  }
  valitation() {
    if (this.Pic != undefined && (this.Title != undefined && this.Title != '') && (this.Description != undefined && this.Description != '') && this.Status != undefined) {
      this.valdate = true;

    }
    else {
      this.valdate = false;
    }
  }
  editbanner(data) {
    window.scrollTo(0, 0);
    this.id = data._id;
    this.create = false;
    this.Pic = data.Homebanner_Image;
    this.Title = data.Title;
    this.Description = data.Desc;
    this.Status = data.Status;
  }
  reset() {
    this.Pic = undefined;
    this.Title = undefined;
    this.Description = undefined;
    this.Status = undefined;
  }
  Show(data) {
    if (data.Status == 'Show') {
      let a = {
        "Banner_id": data._id,
        "Status": "Hide"
      }
      this._api.banneredit(a).subscribe(
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
        "Banner_id": data._id,
        "Status": "Show"
      }
      this._api.banneredit(a).subscribe(
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
