import { Component, OnInit ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-viewsinglelist',
  templateUrl: './viewsinglelist.component.html',
  styleUrls: ['./viewsinglelist.component.scss']
})
export class ViewsinglelistComponent implements OnInit {

  BookingId:any;
  mobile:any;
  vehicle:any;
  cname:any;
  vehicletype:any;
  vehicle_list:any;
  MechanicId:any;
  pickupDate:any;
  pickupTime:any;

  constructor(
    private router: Router,   

    private http: HttpClient,

    private _api : ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this.vehicle_list=this.getFromLocal('bookingDetails');
    console.log(this.vehicle_list);
    this.BookingId=this.vehicle_list.Booking_id;
    this.cname=this.vehicle_list.Customer_Name;
    this.mobile=this.vehicle_list.Customer_Phone;
    this.vehicle=this.vehicle_list.Vehicle_No;
    this.vehicletype=this.vehicle_list.Vehicle_Type;
    this.pickupDate=this.vehicle_list.Pickup_Date;
    this.pickupTime =this.vehicle_list.Pickup_Time;
  }
  back_to_page()
  {
    
    this.router.navigate(['superadmin/master/team1']);
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  
  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
