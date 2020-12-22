import { Component, OnInit ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';
import { ExcelService } from '../../../../excel.service';

@Component({
  selector: 'app-viewparkingcbookinglist',
  templateUrl: './viewparkingcbookinglist.component.html',
  styleUrls: ['./viewparkingcbookinglist.component.scss']
})
export class ViewparkingcbookinglistComponent implements OnInit {
  Booking_id:any;
  Booking_sta:any;
  VehicleNumber:any;
  Vehicle_type:any;
  main_list:any;
  Booking_List:any;
  title = 'appBootstrap';
  Booking_val:any;
  parking_booking_list:any;
  isDisableforbooking: boolean = false ;
  isDisableforparking: boolean = false;
  closeResult: string;
  excelData:any;
  constructor( 
    private excelService: ExcelService,
    private router: Router,   

    private http: HttpClient,

    private _api : ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }
    
  ngOnInit() {
    this._api.parkingbookinglist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.main_list = response.Data.reverse();
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
    exportAsXLSX(): void {
      this.excelService.exportAsExcelFile(this.parking_booking_list, 'Parking_Booking_List');
    }

    filter() {
      this.parking_booking_list = this.main_list;
      if (this.Booking_id != undefined && this.Booking_id != '' ) {
        this.parking_booking_list = this.parking_booking_list.filter((x: any) => x.Booking_id == this.Booking_id)
        console.log(this.parking_booking_list)
      }
      if (this.VehicleNumber != undefined && this.VehicleNumber != '' ) {
        this.parking_booking_list = this.parking_booking_list.filter((x: any) => x.Vehicle_details[0].Vehicle_No == this.VehicleNumber)
        console.log(this.parking_booking_list)
      }
      if (this.Vehicle_type != undefined && this.Vehicle_type != '' ) {
        this.parking_booking_list = this.parking_booking_list.filter((x: any) => x.Vehicle_details[0].Vehicletype_Name == this.Vehicle_type)
        console.log(this.parking_booking_list)
      }
      if (this.Booking_sta != undefined) {
        this.parking_booking_list = this.parking_booking_list.filter((x: any) => x.Booking_status == this.Booking_sta)
        console.log(this.parking_booking_list)
      }
  
    }
    Refresh(){
      this.parking_booking_list = this.main_list;
      this.Booking_sta = undefined;
      this.VehicleNumber = undefined;
      this.Vehicle_type = undefined;
      this.Booking_id = undefined
    }
  }
  
