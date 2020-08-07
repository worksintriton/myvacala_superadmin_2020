import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-openparkingbookings',
  templateUrl: './openparkingbookings.component.html',
  styleUrls: ['./openparkingbookings.component.scss']
})
export class OpenparkingbookingsComponent implements OnInit {
  parking_booking_list:any;
  constructor( private router: Router,   

    private http: HttpClient,

    private _api : ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
     this._api.parking_bookingList().subscribe(
    (response: any) => {
      console.log(response.Data);
      this.parking_booking_list = response.Data;
      console.log(this.parking_booking_list);
    }
  ); 
  }
  open_new_parking_page(item)
  {
    this.saveInLocal('bookingDetails', item);
    console.log("Parking");
    this.router.navigate(['superadmin/master/Payment_View_ParkingBookingList']);
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  
  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
