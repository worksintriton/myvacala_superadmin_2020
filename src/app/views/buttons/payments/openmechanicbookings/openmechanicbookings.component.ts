import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-openmechanicbookings',
  templateUrl: './openmechanicbookings.component.html',
  styleUrls: ['./openmechanicbookings.component.scss']
})
export class OpenmechanicbookingsComponent implements OnInit {
  Booking_List:any
  constructor( private router: Router,   

    private http: HttpClient,

    private _api : ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    this._api.BookingList().subscribe(
      (response: any) => {
         console.log(response);
         this.Booking_List = response.Data;
      }
      );
  }
  open_new_page(i)
  {
    this.saveInLocal('bookingDetails', i);
    console.log(i);
    this.router.navigate(['superadmin/master/view_payment_booking']);
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  
  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
