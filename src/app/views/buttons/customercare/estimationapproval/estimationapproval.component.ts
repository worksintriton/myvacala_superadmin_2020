import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-estimationapproval',
  templateUrl: './estimationapproval.component.html',
  styleUrls: ['./estimationapproval.component.scss']
})
export class EstimationapprovalComponent implements OnInit {
  Booking_List:any;
  Booking_val:any;
  parking_booking_list:any;
  isDisableforbooking: boolean = false ;
  isDisableforparking: boolean = false;
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
    this._api.BookingList().subscribe(
      (response: any) => {
         console.log(response);
         this.Booking_List = response.Data;
      }
      );
  }
  openmechanicbookings(){
    
  this.router.navigate(['superadmin/master/Operation_View_MechanicBookingList']);
}
openparkingbookings(){
  
  this.router.navigate(['superadmin/master/Operation_View_ParkingBookingList']);
}
open_new_page(item)
{
  this.saveInLocal('bookingDetails', item);
    console.log(item);
    this.router.navigate(['superadmin/master/viewsinglelistpayments']);
  }
  open_new_parking_page(item)
  {
    this.saveInLocal('bookingDetails', item);
    console.log("Parking");
    this.router.navigate(['superadmin/master/viewsingleparkinglist']);
  } 
saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  
  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
