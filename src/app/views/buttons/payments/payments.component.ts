import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  Booking_List:any;
  parking_booking_list:any;
  isDisableforbooking: boolean = false ;
  isDisableforparking: boolean = false;
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
      
   this._api.parking_bookingList().subscribe(
    (response: any) => {
      console.log(response.Data);
      this.parking_booking_list = response.Data;
      console.log(this.parking_booking_list);
    }
  ); 
  }
  openmechanicbookings(){
  //   this.isDisableforbooking=true;
  //   this.isDisableforparking=false;
  //  console.log(this.isDisableforbooking);
  
  this.router.navigate(['/superadmin/master/PaymentMechanicBookingList']);
 }
 openparkingbookings(){
  //  this.isDisableforbooking=false;
  //  this.isDisableforparking=true;
  // console.log(this.isDisableforparking);
  
  this.router.navigate(['/superadmin/master/PaymentParkingBookingList']);
 }
  // open_new_page(i)
  // {
  //   this.saveInLocal('bookingDetails', i);
  //   console.log(i);
  //   this.router.navigate(['/superadmin/master/view_payment_booking']);
  // }
  open_new_parking_page(item)
  {
    this.saveInLocal('bookingDetails', item);
    console.log("Parking");
    this.router.navigate(['/superadmin/master/viewsingleparkinglist']);
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  
  getFromLocal(key): any {
    return this.storage.get(key);
  }

}
