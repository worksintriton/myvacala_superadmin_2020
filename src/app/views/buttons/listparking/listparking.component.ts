import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../api.service';
import { ValidatorService } from '../../../valitation.service'
@Component({
  selector: 'app-listparking',
  templateUrl: './listparking.component.html',
  styleUrls: ['./listparking.component.scss']
})
export class ListparkingComponent implements OnInit {
  List: any;
  constructor(
    private _api: ApiService,
    private router: Router,

    private http: HttpClient,
    private _val: ValidatorService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this._api.list_parking().subscribe(
      (response: any) => {
        console.log(response);
        this.List = response.Data.reverse();
      }
    );
  }

  edit(item) {
    this.saveInLocal("parking_detail", item);
    this.router.navigateByUrl("superadmin/master/edit_parking")
  }
  delete(i) {
    let data = {
      "_id": i
    }
    console.log(data);
    this._api.list_parking_delete(data).subscribe(
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

  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
