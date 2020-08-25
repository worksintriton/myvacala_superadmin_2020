import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  user_list: any;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this._api.user_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.user_list = response.Data.reverse();
        console.log(this.user_list);
      }
    );
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  delete(i) {
    let id = {
      "user_id": i
    }
    console.log(id)
    this._api.user_delete(id).subscribe(
      (response: any) => {
        console.log(response);
        this.ngOnInit();
        alert(response.Message);
      }
    );
  }
  disable(i){
    let id = {
      "Customer_id": i._id,
      "User_Status": !i.User_Status
    }
    console.log(id)
    this._api.user_edit(id).subscribe(
      (response: any) => {
        console.log(response);
        this.ngOnInit();
        alert(response.Message);
      }
    );
  }

}

