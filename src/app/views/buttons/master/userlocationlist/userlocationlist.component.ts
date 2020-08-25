import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-userlocationlist',
  templateUrl: './userlocationlist.component.html',
  styleUrls: ['./userlocationlist.component.scss']
})
export class UserlocationlistComponent implements OnInit {
  locationuserlist:any;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this._api.user_location_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.locationuserlist = response.Data.reverse();
        console.log(this.locationuserlist);
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
