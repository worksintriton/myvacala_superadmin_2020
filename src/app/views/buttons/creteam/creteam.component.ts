import { Component, OnInit ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-creteam',
  templateUrl: './creteam.component.html',
  styleUrls: ['./creteam.component.scss']
})
export class CreteamComponent implements OnInit {
  Booking_List:any;
  title = 'appBootstrap';
  Booking_val:any;
  parking_booking_list:any;
  isDisableforbooking: boolean = false ;
  isDisableforparking: boolean = false;
  closeResult: string;
  constructor( 
     
    private router: Router,   

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
    this.router.navigate(['superadmin/master/View_MechanicBookingList']);
 }
 openparkingbookings(){
  this.router.navigate(['superadmin/master/OperationView_MechanicBookingList']);
 }
//  open_new_page(item)
//  {
//    this.saveInLocal('bookingDetails', item);
//      console.log(item);
//      this.router.navigate(['superadmin/master/viewsinglelistpayments']);
//    }
open_new_page(i)
{
  this.saveInLocal('bookingDetails', i);
  console.log(i);
  this.router.navigate(['superadmin/master/view_individual_booking']);
}
   open_new_parking_page(item)
   {
     this.saveInLocal('bookingDetails', item);
     console.log("Parking");
     this.router.navigate(['superadmin/master/operationparkingbookings']);
   }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  
  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
