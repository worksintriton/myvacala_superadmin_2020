import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';
import { ExcelService } from '../../../../excel.service';

@Component({
  selector: 'app-viewmechanicbookinglist',
  templateUrl: './viewmechanicbookinglist.component.html',
  styleUrls: ['./viewmechanicbookinglist.component.scss']
})
export class ViewmechanicbookinglistComponent implements OnInit {
  workshop_id:any;
  Booking_sta:any;
  VehicleNumber:any;
  Vehicle_type:any;
  main_list:any;
  Booking_List: any;
  title = 'appBootstrap';
  Booking_val: any;
  parking_booking_list: any;
  isDisableforbooking: boolean = false;
  isDisableforparking: boolean = false;
  closeResult: string;
  constructor(
    private excelService: ExcelService,
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    this._api.BookingList().subscribe(
      (response: any) => {
        console.log(response);
        this.main_list = response.Data.reverse();
        this.Booking_List = response.Data.reverse();
      }
    );
  }

  open_new_page(i) {
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
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.Booking_List, 'Mechanic_Booking_List');
  }
  goToLink1(url: string) {
    window.open(url, "_blank");
  }
  filter() {
    this.Booking_List = this.main_list;
    if (this.workshop_id != undefined && this.workshop_id != '' ) {
      this.Booking_List = this.Booking_List.filter((x: any) => x.Mechanicworkshop_ids == this.workshop_id)
      console.log(this.Booking_List)
    }
    if (this.VehicleNumber != undefined && this.VehicleNumber != '' ) {
      this.Booking_List = this.Booking_List.filter((x: any) => x.Vehicle_No == this.VehicleNumber)
      console.log(this.Booking_List)
    }
    if (this.Vehicle_type != undefined && this.Vehicle_type != '' ) {
      this.Booking_List = this.Booking_List.filter((x: any) => x.Vehicle_Type == this.Vehicle_type)
      console.log(this.Booking_List)
    }
    if (this.Booking_sta != undefined) {
      this.Booking_List = this.Booking_List.filter((x: any) => x.Booking_Status == this.Booking_sta)
      console.log(this.Booking_List)
    }

  }
  Refresh(){
    this.Booking_List = this.main_list;
    this.Booking_sta = undefined;
    this.VehicleNumber = undefined;
    this.Vehicle_type = undefined;
    this.workshop_id = undefined
  }
}

