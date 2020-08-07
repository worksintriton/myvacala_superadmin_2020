import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-viewpaymentbookinlist',
  templateUrl: './viewpaymentbookinlist.component.html',
  styleUrls: ['./viewpaymentbookinlist.component.scss']
})
export class ViewpaymentbookinlistComponent implements OnInit {

  BookingId:any;
  mobile:any;
  vehicle:any;
  cname:any;
  vehicletype:any;
  vehicle_list:any;
  constructor(
    private router: Router,   

    private http: HttpClient,

    private _api : ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this.vehicle_list=this.getFromLocal('bookingDetails');
    this.BookingId=this.vehicle_list.Booking_id;
    this.cname=this.vehicle_list.Customer_Name;
    this.mobile=this.vehicle_list.Customer_Phone;
    this.vehicle=this.vehicle_list.Vehicle_No;
    this.vehicletype=this.vehicle_list.Vehicle_Type;
    console.log(this.vehicletype);
  }
  back_to_page()
  {
    
    this.router.navigate(['/superadmin/master/payments']); 
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  
  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
