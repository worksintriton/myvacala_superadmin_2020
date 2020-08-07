import { Component, OnInit, Inject,ViewChild, AfterViewInit, ElementRef  } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-flashscreen',
  templateUrl: './flashscreen.component.html',
  styleUrls: ['./flashscreen.component.scss']
})
export class FlashscreenComponent implements OnInit {
  selectedimgae:any;
  Pic:any;
  flash_list:any;
  @ViewChild('inputFile',{static: false}) myInputVariable: ElementRef;
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
  flashscreen_save()
  {
    let data={
      "gif_path":this.Pic
        
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
  fileupload(event){
    this.selectedimgae = event.target.files[0];
    this.addfiles1();
  }
  
  addfiles1()
  {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae, this.selectedimgae.name);
    this.http.post('http://3.101.31.129:3000/upload', fd)
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

  deleteservice(item){
    let data={
      "_id":item._id
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
}