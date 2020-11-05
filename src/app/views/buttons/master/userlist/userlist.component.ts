import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import Swal from 'sweetalert2';

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
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'If you delete this data it will affect existing user details.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        
    let id = {
      "user_id": i
    }
    console.log(id)
    this._api.user_delete(id).subscribe(
      (response: any) => {
        console.log(response);
        this.ngOnInit();
        alert("User deleted successfully");
      }
    );

        

        // Swal.fire(
        //   'Deleted!',
        //   'Your imaginary file has been deleted.',
        //   'success'
        // )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your data is safe.',
          'error'
        )
      }
    })
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

