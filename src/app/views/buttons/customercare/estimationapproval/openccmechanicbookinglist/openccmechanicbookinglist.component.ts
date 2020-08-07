import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DaterangepickerConfig } from 'ng2-daterangepicker';

@Component({
  selector: 'app-openccmechanicbookinglist',
  templateUrl: './openccmechanicbookinglist.component.html',
  styleUrls: ['./openccmechanicbookinglist.component.scss']
})
export class OpenccmechanicbookinglistComponent implements OnInit {

  Booking_List:any;
  Booking_val:any;
  parking_booking_list:any;
  isDisableforbooking: boolean = false ;
  isDisableforparking: boolean = false;
  constructor( private router: Router,   
    private daterangepickerOptions: DaterangepickerConfig,
    private http: HttpClient,

    private _api : ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) {
      this.daterangepickerOptions.settings = {
        locale: { format: 'YYYY-MM-DD' },
        alwaysShowCalendars: false
    };
     }

  ngOnInit() {
    this._api.BookingList().subscribe(
      (response: any) => {
         console.log(response);
         this.Booking_List = response.Data;
      }
      );
  }
  open_new_page(item)
{
  this.saveInLocal('bookingDetails', item);
    console.log(item);
    this.router.navigate(['superadmin/master/viewsinglelistpayments']);
  }
  
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  
  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
