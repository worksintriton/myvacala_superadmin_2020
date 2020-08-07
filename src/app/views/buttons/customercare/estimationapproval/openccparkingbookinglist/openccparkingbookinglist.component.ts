import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-openccparkingbookinglist',
  templateUrl: './openccparkingbookinglist.component.html',
  styleUrls: ['./openccparkingbookinglist.component.scss']
})
export class OpenccparkingbookinglistComponent implements OnInit {

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
