import { Component, OnInit, Inject, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-flashscreen',
  templateUrl: './flashscreen.component.html',
  styleUrls: ['./flashscreen.component.scss']
})
export class FlashscreenComponent implements OnInit {
  selectedimgae: any;
  Pic: any;
  flash_list: any;
  width: any;
  height: any;
  @ViewChild('inputFile', { static: false }) myInputVariable: ElementRef;
  @ViewChild('imgType', { static: false }) imgType: ElementRef;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,

    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this._api.flash_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.flash_list = response.Data;
        console.log(this.flash_list);
      }
    );

  }
  flashscreen_save() {
    let data = {
      "gif_path": this.Pic

    }
    this._api.flash(data).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code == 401) {
          alert(response.Message);
        } else {
          this.saveInLocal('flash_list', response.data);
          alert(response.Message);
          this.saveInLocal("foredit", true);
          this.ngOnInit();
          this.myInputVariable.nativeElement.value = '';
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

  deleteservice(item) {
    let data = {
      "_id": item._id
    }
    this._api.flashscreenDelete(data).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code == 200) {
          alert(response.Message);
          this.ngOnInit();
        }
        else {
          alert("sorry");
        }
      }
    );
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
        if(this.width == 630 && this.height == 300){
          this.addfiles1();
        }
        else{
          Swal.fire(
            'Sorry',
            'Image Size Should be 630*300',
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