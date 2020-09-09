import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-listmachanicform',
  templateUrl: './listmachanicform.component.html',
  styleUrls: ['./listmachanicform.component.scss']
})
export class ListmachanicformComponent implements OnInit {
  mechanic_list: any;
  searchQR: any;
  constructor(private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    this._api.mechanicList().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.mechanic_list = response.Data.reverse();
        console.log(this.mechanic_list);
      }
    );
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }


  edit(data) {
    this.saveInLocal('mechanic_single', data);
    console.log(data);
    this.router.navigate(['superadmin/master/edit_mechanic']);
  }



  delete(id) {
    let data = {
      "_id": id
    }
    this._api.mechanic_delete(data).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code == 200) {
          alert("Mechanic deleted successfully");
          this.ngOnInit();
        }
        else{
          alert(response.Message);
        }
      }
    );
  }
}
