import { Component, OnInit ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-viewmechanicbookinglist',
  templateUrl: './viewmechanicbookinglist.component.html',
  styleUrls: ['./viewmechanicbookinglist.component.scss']
})
export class ViewmechanicbookinglistComponent implements OnInit {

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
  }

  open_new_page(i)
  {
    this.saveInLocal('bookingDetails', i);
    console.log(i);
    this.router.navigate(['superadmin/master/view_individual_booking']);
  }
    
    saveInLocal(key, val): void {
      this.storage.set(key, val);
    }
    
    getFromLocal(key): any {
      return this.storage.get(key);
    }
  }
  
