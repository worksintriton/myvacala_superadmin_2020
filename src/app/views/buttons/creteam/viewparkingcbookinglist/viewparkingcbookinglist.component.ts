import { Component, OnInit ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-viewparkingcbookinglist',
  templateUrl: './viewparkingcbookinglist.component.html',
  styleUrls: ['./viewparkingcbookinglist.component.scss']
})
export class ViewparkingcbookinglistComponent implements OnInit {

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
    this._api.parkingbookinglist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.parking_booking_list = response.Data.reverse();
        console.log(this.parking_booking_list);
      }
    ); 
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
    edit(i){
      this.saveInLocal('parkingbookingsingle',i)
      this.router.navigate(['superadmin/master/operationparkingbookings']);
    }
  }
  
