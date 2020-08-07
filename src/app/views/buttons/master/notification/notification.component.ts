import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notification:any;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,

    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this._api.notification().subscribe(
      (response: any) => {
        console.log(response);
        this.notification = response.Data;

      }
    );
  }
  deleteservice(i)
  {
    
      let data = {

        "Notification_id": i
    
      }
      console.log(data);
      this._api.notification_delete(data).subscribe(
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
