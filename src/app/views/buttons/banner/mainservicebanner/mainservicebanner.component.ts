import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-mainservicebanner',
  templateUrl: './mainservicebanner.component.html',
  styleUrls: ['./mainservicebanner.component.scss']
})
export class MainservicebannerComponent implements OnInit {

  selectedimgae:any;
  Pic:any;
  Title:any;
  Description:any;
  banner_list:any;
  Status:any;
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
  Banner_save()
  {
    let data={
      "Homebanner_Image": this.Pic,
        "Title":this.Title,
        "Desc": this.Description,
        "Status":this.Status

        
}
    this._api.banner(data).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code == 401) {
          alert(response.Message);
        } else {
          this.saveInLocal('banner_list', response.data);
          alert(response.Message);
          this.saveInLocal("foredit", true);

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
    this.http.post('https://myvacala.com/api/upload', fd)
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
