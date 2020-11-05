import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartlist:any;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,

    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this._api.cart().subscribe(
      (response: any) => {
        console.log(response);
        this.cartlist = response.Data.reverse();

      }
    );
  }
  open(i){
    this.saveInLocal('itemsingle', i)
    this.router.navigateByUrl('/superadmin/master/view_cart_details');
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  cart_delete(i) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'If you delete this data it will affect existing user details.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        let data = {

          "Cart_id": i
    
        }
        console.log(data);
        this._api.cart_delete(data).subscribe(
          (response: any) => {
            console.log(response);
            if (response.Code == 200) {
              alert("Cart deleted successfully");
              this.ngOnInit();
            }
            else {
              alert("sorry");
            }
    
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
}
