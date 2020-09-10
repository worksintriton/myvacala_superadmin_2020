import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-operationsparkingbookings',
  templateUrl: './operationsparkingbookings.component.html',
  styleUrls: ['./operationsparkingbookings.component.scss'],
  providers: [DatePipe]
})
export class OperationsparkingbookingsComponent implements OnInit {
  pakingbookingsingle: any;
  BookingId: any;
  mobile: any;
  cname: any;
  vehicle: any;
  vehicletype: any;
  BookingSdate: any;
  BookingEdate: any;
  checkoutSdate: any;
  checkoutEdate: any;
  actualTime: any;
  Finalamt: any;
  BookingStime:any;
  BookingEtime:any;
  status:any=null;
  constructor(
    private router: Router,

    private http: HttpClient,
    private datePipe: DatePipe,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this.pakingbookingsingle = this.getFromLocal('parkingbookingsingle')
    console.log(this.pakingbookingsingle);
    this.BookingId = this.pakingbookingsingle.Booking_id;
    this.mobile = this.pakingbookingsingle.Customer_id.Phone;
    this.cname = this.pakingbookingsingle.Customer_id.Name;
    this.vehicle = this.pakingbookingsingle.Vehicle_details[0].Vehicle_No;
    this.vehicletype = this.pakingbookingsingle.Vehicle_details[0].Vehicletype_Name;
    this.BookingSdate = this.datePipe.transform(new Date(this.pakingbookingsingle.booking_start_date),'yyyy-MM-dd') ;
    this.BookingEdate = this.datePipe.transform(new Date(this.pakingbookingsingle.booking_end_date),'yyyy-MM-dd') ;
    this.BookingStime = this.pakingbookingsingle.booking_start_time;
    this.BookingEtime = this.pakingbookingsingle.booking_end_time;
    // this.checkoutSdate = this.pakingbookingsingle.
    // this.checkoutEdate = this.pakingbookingsingle.
    this.actualTime = this.pakingbookingsingle.total_hrs;
    this.Finalamt = this.pakingbookingsingle.total_amount;
  }
  back_to_page() {

    this.router.navigate(['superadmin/master/cre_team']);
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
