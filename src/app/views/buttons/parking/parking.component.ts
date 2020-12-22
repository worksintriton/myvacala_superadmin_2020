import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../api.service';
import { ValidatorService } from '../../../valitation.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss']
})
export class ParkingComponent implements OnInit {
  vehicle_list: any;
  VehicleType: any;
  Parkingname: any;
  Ownername: any;
  ownerprimarycontact: any;
  Secondcontact: any;
  poccontact: any;
  pancardno: any
  adharno: any;
  pancard: any
  adarcard: any;
  resaddress: any
  gst: any;
  gstaddress: any;
  map: any;
  lat: any;
  lang: any;
  owner_email: any;
  poc_email: any;
  bikeslots: any;
  carslots: any;


  newInclude: any;
  Included_new: any[] = [];
  include_list: any[] = [];
  Included: any;
  amount: any;

  newInclude1: any;
  Included_new1: any[] = [];
  include_list1: any[] = [];
  Included1: any;
  amount1: any;

  newInclude2: any;
  Included_new2: any[] = [];
  include_list2: any[] = [];
  Included2: any;
  amount2: any;

  newInclude3: any;
  Included_new3: any[] = [];
  include_list3: any[] = [];
  Included3: any;
  amount3: any;

  newInclude4: any;
  Included_new4: any[] = [];
  include_list4: any[] = [];
  Included4: any;
  amount4: any;

  newInclude5: any;
  Included_new5: any[] = [];
  include_list5: any[] = [];
  Included5: any;
  amount5: any;

  newInclude6: any;
  Included_new6: any[] = [];
  include_list6: any[] = [];
  Included6: any;
  amount6: any;

  newInclude7: any;
  Included_new7: any[] = [];
  include_list7: any[] = [];
  Included7: any;
  amount7: any;
  slotdate1: any;

  bikeslot1: any;
  bike_inlcude1: any[] = [];
  bikeslot2: any;
  bike_inlcude2: any[] = [];
  include_bike1: any[] = [];
  include_bike2: any[] = [];
  area1: any;
  floor1: any;
  slot1: any;

  SlotWeekDaytime1: any;
  SlotWeekDaytime2: any;
  SlotWeekDaytime3: any;
  SlotWeekDaytime4: any;
  SlotWeekDaytime5: any;
  SlotWeekDaytime6: any;
  SlotWeekDaytime7: any;
  SlotWeekDaytime8: any;
  SlotWeekDaytime9: any;
  SlotWeekDaytime10: any;
  SlotWeekDaytime11: any;
  SlotWeekDaytime12: any;
  SlotWeekDaytime13: any;
  SlotWeekDaytime14: any;
  SlotWeekDaytime15: any;
  SlotWeekDaytime16: any;
  SlotWeekDaytime17: any;

  SlotWeekDaytime18: any;
  SlotWeekDaytime19: any;
  SlotWeekDaytime20: any;
  SlotWeekDaytime21: any;
  SlotWeekDaytime22: any;
  SlotWeekDaytime23: any;
  SlotWeekDaytime24: any;
  SlotWeekDaytime25: any;
  SlotWeekDaytime26: any;
  SlotWeekDaytime27: any;
  SlotWeekDaytime28: any;
  SlotWeekDaytime29: any;
  SlotWeekDaytime30: any;
  SlotWeekDaytime31: any;
  SlotWeekDaytime32: any;
  SlotWeekDaytime33: any;



  SlotWeekDaytime35: any;
  SlotWeekDaytime36: any;
  SlotWeekDaytime37: any;
  SlotWeekDaytime38: any;
  SlotWeekDaytime39: any;
  SlotWeekDaytime40: any;
  SlotWeekDaytime41: any;
  SlotWeekDaytime42: any;
  SlotWeekDaytime43: any;
  SlotWeekDaytime44: any;
  SlotWeekDaytime45: any;
  SlotWeekDaytime46: any;
  SlotWeekDaytime47: any;
  SlotWeekDaytime48: any;
  SlotWeekDaytime49: any;
  SlotWeekDaytime50: any;
  amount8: any;
  amount9: any;
  amount10: any;
  amount11: any;
  amount12: any;
  amount13: any;
  amount14: any;
  amount15: any;
  amount16: any;

  amount17: any;
  amount18: any;
  amount19: any;
  amount20: any;
  amount21: any;
  amount22: any;
  amount23: any;
  amount24: any;
  amount25: any;

  AreaName: any;
  SubAreaName: any;
  SlotNumber: any;
  RentperTime: any;
  timefor: any;
  time1: any;
  fortwowheeler: boolean;
  forwfourwheeler: boolean;
  forboth: boolean;
  emailerror: boolean;
  phone_err1: boolean;
  phone_err2: boolean;
  selectedfile1: any;
  validate: any;
  owner_data: any = [];
  parking_Details: any = [];
  step1: boolean = false;
  Parkingaddress: any;
  gstdoc: any;
  gstnumber: any;
  bike_slot_count: any;
  car_slot_count: any;
  step2: boolean;
  parking_details_bike_price_day: any = [];
  parking_details_car_price_day: any = [];
  parking_details_bike_price_spe_day: any = [];
  parking_details_car_price_spe_day: any = [];
  bikeslotdate1: any;

  newIncludee: any = [];
  Included_newe: any = [];
  newIncludee1: any = [];
  Included_newe1: any = [];
  newIncludee2: any = [];
  Included_newe2: any = [];
  newIncludee3: any = [];
  Included_newe3: any = [];
  newIncludee4: any = [];
  Included_newe4: any = [];
  newIncludee5: any = [];
  Included_newe5: any = [];
  newIncludee6: any = [];
  Included_newe6: any = [];
  slotdatee1: any;
  newIncludee7: any = [];

  newIncludeee: any = [];
  Included_newee: any = [];
  newIncludeee1: any = [];
  Included_newee1: any = [];
  newIncludeee2: any = [];
  Included_newee2: any = [];
  newIncludeee3: any = [];
  Included_newee3: any = [];
  newIncludeee4: any = [];
  Included_newee4: any = [];
  newIncludeee5: any = [];
  Included_newee5: any = [];
  newIncludeee6: any = [];
  Included_newee6: any = [];
  slotdateee1: any;
  newIncludeee7: any = [];
  both_slot_week: any = [
    { Timings: [], Title: "Sunday" },
    { Timings: [], Title: "Monday" },
    { Timings: [], Title: "Tuesday" },
    { Timings: [], Title: "Wednesday" },
    { Timings: [], Title: "Thursday" },
    { Timings: [], Title: "Friday" },
    { Timings: [], Title: "Saturday" },
  ]
  both_slot_per_day: any = [];

  bikeSlotWeekDaytime1: any = [];
  bikeSlotWeekDaytime2: any = [];
  bikeSlotWeekDaytime3: any = [];
  bikeSlotWeekDaytime4: any = [];
  bikeSlotWeekDaytime5: any = [];
  bikeSlotWeekDaytime6: any = [];
  bikeSlotWeekDaytime7: any = [];
  bikeSlotWeekDaytime8: any = [];
  bikeSlotWeekDaytime9: any = [];
  bikeSlotWeekDaytime10: any = [];
  bikeSlotWeekDaytime11: any = [];
  bikeSlotWeekDaytime12: any = [];
  bikeSlotWeekDaytime13: any = [];
  bikeSlotWeekDaytime14: any = [];
  bikeSlotWeekDaytime15: any = [];
  bikeSlotWeekDaytime16: any = [];
  bikeSlotWeekDaytime17: any = [];

  carSlotWeekDaytime18: any = [];
  carSlotWeekDaytime19: any = [];
  carSlotWeekDaytime20: any = [];
  carSlotWeekDaytime21: any = [];
  carSlotWeekDaytime22: any = [];
  carSlotWeekDaytime23: any = [];
  carSlotWeekDaytime24: any = [];
  carSlotWeekDaytime25: any = [];
  carSlotWeekDaytime26: any = [];
  carSlotWeekDaytime27: any = [];
  carSlotWeekDaytime28: any = [];
  carSlotWeekDaytime29: any = [];
  carSlotWeekDaytime30: any = [];
  carSlotWeekDaytime31: any = [];
  carSlotWeekDaytime32: any = [];
  carSlotWeekDaytime33: any = [];



  bothSlotWeekDaytime35: any = [];
  bothSlotWeekDaytime36: any = [];
  bothSlotWeekDaytime37: any = [];
  bothSlotWeekDaytime38: any = [];
  bothSlotWeekDaytime39: any = [];
  bothSlotWeekDaytime40: any = [];
  bothSlotWeekDaytime41: any = [];
  bothSlotWeekDaytime42: any = [];
  bothSlotWeekDaytime43: any = [];
  bothSlotWeekDaytime44: any = [];
  bothSlotWeekDaytime45: any = [];
  bothSlotWeekDaytime46: any = [];
  bothSlotWeekDaytime47: any = [];
  bothSlotWeekDaytime48: any = [];
  bothSlotWeekDaytime49: any = [];
  bothSlotWeekDaytime50: any = [];

  bike_spec_day_date: any;
  car_spec_day_date: any;
  both_spec_day_date: any;
  emailerror1: boolean;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    private _val: ValidatorService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    this.time();
    this.VehicleType = " ";
    this.AreaName = " ";
    this.SubAreaName = "";
    this.RentperTime = "";
    this.SlotNumber = "";
    this.timefor = "";

    this.forboth = false;
    this.fortwowheeler = false;
    this.forwfourwheeler = false;

    this._api.vehiclelist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.vehicle_list = response.Data;
        console.log(this.vehicle_list);
      }
    );
  }
  eventCheck(event) {
    console.log(event.checked);
    if (event.checked == true) {
      this.SlotWeekDaytime3 = this.SlotWeekDaytime1;
      this.SlotWeekDaytime5 = this.SlotWeekDaytime1;
      this.SlotWeekDaytime7 = this.SlotWeekDaytime1;
      this.SlotWeekDaytime9 = this.SlotWeekDaytime1;
      this.SlotWeekDaytime11 = this.SlotWeekDaytime1;
      this.SlotWeekDaytime13 = this.SlotWeekDaytime1;
    }
    else {
      this.SlotWeekDaytime3 = undefined;
      this.SlotWeekDaytime5 = undefined;
      this.SlotWeekDaytime7 = undefined;
      this.SlotWeekDaytime9 = undefined;
      this.SlotWeekDaytime11 = undefined;
      this.SlotWeekDaytime13 = undefined;
    }

  }
  eventCheck2(event) {
    console.log(event.checked);
    if (event.checked == true) {
      this.SlotWeekDaytime4 = this.SlotWeekDaytime2;
      this.SlotWeekDaytime6 = this.SlotWeekDaytime2;
      this.SlotWeekDaytime8 = this.SlotWeekDaytime2;
      this.SlotWeekDaytime10 = this.SlotWeekDaytime2;
      this.SlotWeekDaytime12 = this.SlotWeekDaytime2;
      this.SlotWeekDaytime14 = this.SlotWeekDaytime2;
    }
    else {

      this.SlotWeekDaytime4 = undefined;
      this.SlotWeekDaytime2 = undefined;
      this.SlotWeekDaytime6 = undefined;
      this.SlotWeekDaytime8 = undefined;
      this.SlotWeekDaytime10 = undefined;
      this.SlotWeekDaytime12 = undefined;
      this.SlotWeekDaytime14 = undefined;
    }
  }
  parkingCreation() {
    if (this.Parkingname != undefined && this.Parkingname != '' && this.Parkingaddress != undefined && this.Parkingaddress != ''
      && this.gstaddress != undefined && this.gstaddress != ''
      && this.gstnumber != undefined && this.gstnumber != ''
      && this.map != undefined && this.map != ''
      && this.lat != undefined && this.lat != ''
      && this.lang != undefined && this.lang != ''
      && this.lang != undefined && this.lang != ''
      && this.poc_email != undefined && this.poc_email != ''
      // && (this.include_bike1.length > 0 || this.include_bike2.length > 0) 
      &&this.emailerror1 != true
    ){
      this.step2 = true;
      let data = {
        "_id": this.parking_Details._id,
        "parking_details_name": this.Parkingname,
        "parking_details_address": this.Parkingaddress,
        "parking_details_gstaddress": this.gstaddress,
        "parking_details_gstdoc": this.gstdoc,
        "parking_details_gstno": this.gstnumber,
        "parking_details_maplink": this.map,
        "parking_details_long": this.lang,
        "parking_details_lat": this.lat,
        "parking_details_pocemail": this.poc_email,
        "parking_details_slots_Bike_details": this.include_bike1,
        "parking_details_slots_Car_details": this.include_bike2,
        "parking_details_slots_count_Bike": this.include_bike1.length,
        "parking_details_slots_count_Car": this.include_bike2.length,
      }
      console.log(data)
      this._api.Parking_owner_edit(data).subscribe((res: any) => {
        console.log(res)
        alert(res.Message);
      });
    }
    else{
      alert("Fill all the fields with valid data")
    }
     
  }

  
  parkingslotCreation() {
    if (this.forboth == true) {
      if (
        this.Included_newee.length > 0 &&
        this.Included_newee1.length > 0 &&
        this.Included_newee2.length > 0 &&
        this.Included_newee3.length > 0 &&
        this.Included_newee4.length > 0 &&
        this.Included_newee5.length > 0 &&
        this.Included_newee6.length > 0
      ) {
        let data = {
          "_id": this.parking_Details._id,
          "parking_details_bike_price_day": this.both_slot_week,
          "parking_details_car_price_day": this.both_slot_week,
          "parking_details_car_price_spe_day": this.both_slot_per_day,
          "parking_details_bike_price_spe_day": this.both_slot_per_day,
          "parking_details_update_status": "Updated",
          "parking_details_price_bike_type": false,
          "parking_details_price_both_type": true,
          "parking_details_price_car_type": false,
        }
        console.log(data)
        this._api.Parking_owner_edit(data).subscribe((res: any) => {
          console.log(res)
          alert(res.Message);
          this.router.navigateByUrl('/superadmin/master/list_parking');
        });
      }
      else {
        alert("Fill data for all days")
      }

    }
    else if(this.fortwowheeler == true){
        if (
          this.Included_new.length > 0 &&
          this.Included_new1.length > 0 &&
          this.Included_new2.length > 0 &&
          this.Included_new3.length > 0 &&
          this.Included_new4.length > 0 &&
          this.Included_new5.length > 0 &&
          this.Included_new6.length > 0
        ) {
          let data = {
            "_id": this.parking_Details._id,
            "parking_details_bike_price_day": this.parking_details_bike_price_day,
            "parking_details_car_price_day": this.parking_details_car_price_day,
            "parking_details_car_price_spe_day": this.parking_details_car_price_spe_day,
            "parking_details_bike_price_spe_day": this.parking_details_bike_price_spe_day,
            "parking_details_update_status": "Updated",
            "parking_details_price_bike_type": this.fortwowheeler,
            "parking_details_price_both_type": false,
            "parking_details_price_car_type": false,
          }
          console.log(data)
          this._api.Parking_owner_edit(data).subscribe((res: any) => {
            console.log(res)
            alert(res.Message);
            this.router.navigateByUrl('/superadmin/master/list_parking');
          });
        }
        else {
          alert("Fill data for all days")
        }
     
    }
    else if(this.forwfourwheeler == true){
      if (
        this.Included_newe.length > 0 &&
        this.Included_newe1.length > 0 &&
        this.Included_newe2.length > 0 &&
        this.Included_newe3.length > 0 &&
        this.Included_newe4.length > 0 &&
        this.Included_newe5.length > 0 &&
        this.Included_newe6.length > 0
      ) {
        let data = {
          "_id": this.parking_Details._id,
          "parking_details_bike_price_day": this.parking_details_bike_price_day,
          "parking_details_car_price_day": this.parking_details_car_price_day,
          "parking_details_car_price_spe_day": this.parking_details_car_price_spe_day,
          "parking_details_bike_price_spe_day": this.parking_details_bike_price_spe_day,
          "parking_details_update_status": "Updated",
          "parking_details_price_bike_type": false,
          "parking_details_price_both_type": false,
          "parking_details_price_car_type": this.forwfourwheeler,
        }
        console.log(data)
        this._api.Parking_owner_edit(data).subscribe((res: any) => {
          console.log(res)
          alert(res.Message);
          this.router.navigateByUrl('/superadmin/master/list_parking');
        });
      }
      else {
        alert("Fill data for all days")
      }
   
  }
  }

  create_parking_slot() {
    this.SlotWeekDaytime1 = this.SlotWeekDaytime1;
    this.SlotWeekDaytime2 = this.SlotWeekDaytime2;
    console.log(this.SlotWeekDaytime1, this.SlotWeekDaytime2);
    let slot_available_data = [
      {
        "week": "Monday",
        "Start_Time": this.SlotWeekDaytime1,
        "End_Time": this.SlotWeekDaytime2
      },
      {
        "week": "Tuesday",
        "Start_Time": this.SlotWeekDaytime3,
        "End_Time": this.SlotWeekDaytime4
      },
      {
        "week": "Wednesday",
        "Start_Time": this.SlotWeekDaytime5,
        "End_Time": this.SlotWeekDaytime6
      },
      {
        "week": "Thursday",
        "Start_Time": this.SlotWeekDaytime7,
        "End_Time": this.SlotWeekDaytime8
      },
      {
        "week": "Friday",
        "Start_Time": this.SlotWeekDaytime9,
        "End_Time": this.SlotWeekDaytime10
      },
      {
        "week": "Saturday",
        "Start_Time": this.SlotWeekDaytime11,
        "End_Time": this.SlotWeekDaytime12
      },
      {
        "week": "Friday",
        "Start_Time": this.SlotWeekDaytime13,
        "End_Time": this.SlotWeekDaytime14
      }

    ]
    let data = {
      "Vehicle_type": this.VehicleType,
      "Area_Name": this.AreaName,
      "Vendor_Id": "5efaf3af7159b871f31170a0",
      "Sub_Area_Name": this.SubAreaName,
      "Slot_Number": this.SlotNumber,
      "Slot_Available_Week": slot_available_data,
      "Rent_Time": this.RentperTime,
      "Rent_Rupees": this.timefor
    }
    this._api.slotList_save(data).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code == 401) {
          alert(response.Message);
        } else {
          this.saveInLocal('service_list', response.data);
          alert(response.Message);
          this.ngOnInit();

        }
      }
    );
  }

  // Bike-------
  BikeAddmonday() {
    this.newInclude = { "Start_time": this.SlotWeekDaytime1.toString(), "End_time": this.SlotWeekDaytime2.toString(), "Price": this.amount };
    this.Included_new.push(this.newInclude);
    console.log(this.Included_new);
    this.bike_time1();
    this.SlotWeekDaytime1 = undefined;
    this.SlotWeekDaytime2 = undefined;
    this.amount = "";
    this.parking_details_bike_price_day[1].Timings = this.Included_new;
  }
  Bikeremovemonday(i) {
    console.log(this.Included_new.length);
    if (i < this.Included_new.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_new.splice(i, (this.Included_new.length - i));
          this.parking_details_bike_price_day[1].Timings = this.Included_new;

          this.bikeSlotWeekDaytime1 = [];
          if (this.Included_new.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.bikeSlotWeekDaytime1.push(i);
            }
          }
          else {
            console.log(+this.Included_new[this.Included_new.length - 1].End_time + 1)
            for (let i = (+this.Included_new[this.Included_new.length - 1].End_time + 1); i <= 24; i++) {
              this.bikeSlotWeekDaytime1.push(i);
            }
          }

          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_new.splice(i, 1);
      this.parking_details_bike_price_day[1].Timings = this.Included_new;
      this.bikeSlotWeekDaytime1 = [];
      if (this.Included_new.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.bikeSlotWeekDaytime1.push(i);
        }
      }
      else {
        console.log(+this.Included_new[this.Included_new.length - 1].End_time + 1)
        for (let i = (+this.Included_new[this.Included_new.length - 1].End_time + 1); i <= 24; i++) {
          this.bikeSlotWeekDaytime1.push(i);
        }
      }
    }

  }
  BikeAddtuesday() {
    this.newInclude1 = { "Start_time": this.SlotWeekDaytime3.toString(), "End_time": this.SlotWeekDaytime4.toString(), "Price": this.amount1 };
    this.Included_new1.push(this.newInclude1);
    console.log(this.Included_new1);
    this.bike_time2();
    this.SlotWeekDaytime3 = undefined;
    this.SlotWeekDaytime4 = undefined;
    this.amount1 = "";
    this.parking_details_bike_price_day[2].Timings = this.Included_new1;

  }
  Bikeremovetuesday(i) {
    if (i < this.Included_new1.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_new1.splice(i, (this.Included_new1.length - i));
          this.parking_details_bike_price_day[2].Timings = this.Included_new1;
          this.bikeSlotWeekDaytime3 = [];
          if (this.Included_new1.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.bikeSlotWeekDaytime3.push(i);
            }
          }
          else {
            for (let i = (+this.Included_new1[this.Included_new1.length - 1].End_time + 1); i <= 24; i++) {
              this.bikeSlotWeekDaytime3.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_new1.splice(i, 1);
      this.parking_details_bike_price_day[2].Timings = this.Included_new1;
      this.bikeSlotWeekDaytime3 = [];
      if (this.Included_new1.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.bikeSlotWeekDaytime3.push(i);
        }
      }
      else {
        for (let i = (+this.Included_new1[this.Included_new1.length - 1].End_time + 1); i <= 24; i++) {
          this.bikeSlotWeekDaytime3.push(i);
        }
      }
    }

  }
  addwedday() {
    this.newInclude2 = { "Start_time": this.SlotWeekDaytime5.toString(), "End_time": this.SlotWeekDaytime6.toString(), "Price": this.amount2 };
    this.Included_new2.push(this.newInclude2);
    console.log(this.Included_new2);
    this.bike_time3();
    this.SlotWeekDaytime5 = undefined;
    this.SlotWeekDaytime6 = undefined;
    this.amount2 = "";
    this.parking_details_bike_price_day[3].Timings = this.Included_new2;
  }
  deletewedsday(i) {
    if (i < this.Included_new2.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_new2.splice(i, (this.Included_new2.length - i));
          this.parking_details_bike_price_day[3].Timings = this.Included_new2;
          this.bikeSlotWeekDaytime5 = [];
          if (this.Included_new2.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.bikeSlotWeekDaytime5.push(i);
            }
          }
          else {
            for (let i = (+this.Included_new2[this.Included_new2.length - 1].End_time + 1); i <= 24; i++) {
              this.bikeSlotWeekDaytime5.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_new2.splice(i, 1);
      this.parking_details_bike_price_day[3].Timings = this.Included_new2;
      this.bikeSlotWeekDaytime5 = [];
      if (this.Included_new2.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.bikeSlotWeekDaytime5.push(i);
        }
      }
      else {
        for (let i = (+this.Included_new2[this.Included_new2.length - 1].End_time + 1); i <= 24; i++) {
          this.bikeSlotWeekDaytime5.push(i);
        }
      }
    }

  }
  addthursday() {
    this.newInclude3 = { "Start_time": this.SlotWeekDaytime7.toString(), "End_time": this.SlotWeekDaytime8.toString(), "Price": this.amount3 };
    this.Included_new3.push(this.newInclude3);
    console.log(this.Included_new3);
    this.bike_time4();
    this.SlotWeekDaytime7 = undefined;
    this.SlotWeekDaytime8 = undefined;
    this.amount3 = "";
    this.parking_details_bike_price_day[4].Timings = this.Included_new3;
  }
  deletethursday(i) {
    if (i < this.Included_new3.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_new3.splice(i, (this.Included_new3.length - i));
          this.parking_details_bike_price_day[4].Timings = this.Included_new3;
          this.bikeSlotWeekDaytime7 = [];
          if (this.Included_new3.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.bikeSlotWeekDaytime7.push(i);
            }
          }
          else {
            for (let i = (+this.Included_new3[this.Included_new3.length - 1].End_time + 1); i <= 24; i++) {
              this.bikeSlotWeekDaytime7.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_new3.splice(i, 1);
      this.parking_details_bike_price_day[4].Timings = this.Included_new3;
      this.bikeSlotWeekDaytime7 = [];
      if (this.Included_new3.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.bikeSlotWeekDaytime7.push(i);
        }
      }
      else {
        for (let i = (+this.Included_new3[this.Included_new3.length - 1].End_time + 1); i <= 24; i++) {
          this.bikeSlotWeekDaytime7.push(i);
        }
      }
    }

  }
  addfriday() {
    this.newInclude4 = { "Start_time": this.SlotWeekDaytime9.toString(), "End_time": this.SlotWeekDaytime10.toString(), "Price": this.amount4 };
    this.Included_new4.push(this.newInclude4);
    console.log(this.Included_new4);
    this.bike_time5();
    this.SlotWeekDaytime9 = undefined;
    this.SlotWeekDaytime10 = undefined;
    this.amount4 = "";
    this.parking_details_bike_price_day[5].Timings = this.Included_new4;

  }
  deletefriday(i) {
    if (i < this.Included_new4.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_new4.splice(i, (this.Included_new4.length - i));
          this.parking_details_bike_price_day[5].Timings = this.Included_new4;
          this.bikeSlotWeekDaytime9 = [];
          if (this.Included_new4.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.bikeSlotWeekDaytime9.push(i);
            }
          }
          else {
            for (let i = (+this.Included_new4[this.Included_new4.length - 1].End_time + 1); i <= 24; i++) {
              this.bikeSlotWeekDaytime9.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_new4.splice(i, 1);
      this.parking_details_bike_price_day[5].Timings = this.Included_new4;
      this.bikeSlotWeekDaytime9 = [];
      if (this.Included_new4.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.bikeSlotWeekDaytime9.push(i);
        }
      }
      else {
        for (let i = (+this.Included_new4[this.Included_new4.length - 1].End_time + 1); i <= 24; i++) {
          this.bikeSlotWeekDaytime9.push(i);
        }
      }
    }

  }
  addsaturday() {
    this.newInclude5 = { "Start_time": this.SlotWeekDaytime11.toString(), "End_time": this.SlotWeekDaytime12.toString(), "Price": this.amount5 };
    this.Included_new5.push(this.newInclude5);
    console.log(this.Included_new5);
    this.bike_time6();
    this.SlotWeekDaytime11 = undefined;
    this.SlotWeekDaytime12 = undefined;
    this.amount5 = "";
    this.parking_details_bike_price_day[6].Timings = this.Included_new5;
  }
  deletesaturday(i) {
    if (i < this.Included_new5.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_new5.splice(i, (this.Included_new5.length - i));
          this.parking_details_bike_price_day[6].Timings = this.Included_new5;
          this.bikeSlotWeekDaytime11 = [];
          if (this.Included_new5.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.bikeSlotWeekDaytime11.push(i);
            }
          }
          else {
            for (let i = (+this.Included_new5[this.Included_new5.length - 1].End_time + 1); i <= 24; i++) {
              this.bikeSlotWeekDaytime11.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_new5.splice(i, 1);
      this.parking_details_bike_price_day[6].Timings = this.Included_new5;
      this.bikeSlotWeekDaytime11 = [];
      if (this.Included_new5.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.bikeSlotWeekDaytime11.push(i);
        }
      }
      else {
        for (let i = (+this.Included_new5[this.Included_new5.length - 1].End_time + 1); i <= 24; i++) {
          this.bikeSlotWeekDaytime11.push(i);
        }
      }
    }

  }
  addsunday() {
    this.newInclude6 = { "Start_time": this.SlotWeekDaytime13.toString(), "End_time": this.SlotWeekDaytime14.toString(), "Price": this.amount6 };
    this.Included_new6.push(this.newInclude6);
    console.log(this.Included_new6);
    this.bike_time7();
    this.SlotWeekDaytime13 = undefined;
    this.SlotWeekDaytime14 = undefined;
    this.amount6 = "";
    this.parking_details_bike_price_day[0].Timings = this.Included_new6;
  }
  deletesunday(i) {
    if (i < this.Included_new6.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_new6.splice(i, (this.Included_new6.length - i));
          this.parking_details_bike_price_day[0].Timings = this.Included_new6;
          this.bikeSlotWeekDaytime13 = [];
          if (this.Included_new6.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.bikeSlotWeekDaytime13.push(i);
            }
          }
          else {
            for (let i = (+this.Included_new6[this.Included_new6.length - 1].End_time + 1); i <= 24; i++) {
              this.bikeSlotWeekDaytime13.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_new6.splice(i, 1);
      this.parking_details_bike_price_day[0].Timings = this.Included_new6;
      this.bikeSlotWeekDaytime13 = [];
      if (this.Included_new6.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.bikeSlotWeekDaytime13.push(i);
        }
      }
      else {
        for (let i = (+this.Included_new6[this.Included_new6.length - 1].End_time + 1); i <= 24; i++) {
          this.bikeSlotWeekDaytime13.push(i);
        }
      }
    }

  }

  addweekdays2() {
    if (this.bikeslotdate1 != undefined && this.SlotWeekDaytime16 != undefined && this.SlotWeekDaytime17 != undefined && this.amount7) {
      this.newInclude7 = { "dates": this.bikeslotdate1, "Start_time": this.SlotWeekDaytime16.toString(), "End_time": this.SlotWeekDaytime17.toString(), "Price": this.amount7 };
      this.parking_details_bike_price_spe_day.push(this.newInclude7);
      console.log(this.parking_details_bike_price_spe_day);
      this.bike_time8();
      this.SlotWeekDaytime16 = undefined;
      this.SlotWeekDaytime17 = undefined;
      this.amount7 = "";
    }
    else {
      alert("Fill all the required fields")
    }


  }
  deleteaddweekdays2(i) {

    if (i < this.parking_details_bike_price_spe_day.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.parking_details_bike_price_spe_day.splice(i, (this.parking_details_bike_price_spe_day.length - i));
          this.bikeSlotWeekDaytime16 = [];
          if (this.parking_details_bike_price_spe_day.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.bikeSlotWeekDaytime16.push(i);
            }
          }
          else {
            for (let i = (+this.parking_details_bike_price_spe_day[this.parking_details_bike_price_spe_day.length - 1].End_time + 1); i <= 24; i++) {
              this.bikeSlotWeekDaytime16.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.parking_details_bike_price_spe_day.splice(i, 1);
      this.bikeSlotWeekDaytime16 = [];
      if (this.parking_details_bike_price_spe_day.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.bikeSlotWeekDaytime16.push(i);
        }
      }
      else {
        for (let i = (+this.parking_details_bike_price_spe_day[this.parking_details_bike_price_spe_day.length - 1].End_time + 1); i <= 24; i++) {
          this.bikeSlotWeekDaytime16.push(i);
        }
      }
    }

  }


  // Bike-------


  // Car------
  carAddmonday() {
    this.newIncludee = { "Start_time": this.SlotWeekDaytime18.toString(), "End_time": this.SlotWeekDaytime19.toString(), "Price": this.amount8 };
    this.Included_newe.push(this.newIncludee);
    console.log(this.Included_newe);
    this.car_time1();
    this.SlotWeekDaytime18 = undefined;
    this.SlotWeekDaytime19 = undefined;
    this.amount8 = "";
    this.parking_details_car_price_day[1].Timings = this.Included_newe;
  }
  carremovemonday(i) {
    if (i < this.Included_newe.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_newe.splice(i, (this.Included_newe.length - i));
          this.parking_details_car_price_day[1].Timings = this.Included_newe;
          this.carSlotWeekDaytime18 = [];
          if (this.Included_newe.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.carSlotWeekDaytime18.push(i);
            }
          }
          else {
            for (let i = (+this.Included_newe[this.Included_newe.length - 1].End_time + 1); i <= 24; i++) {
              this.carSlotWeekDaytime18.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_newe.splice(i, 1);
      this.parking_details_car_price_day[1].Timings = this.Included_newe;
      this.carSlotWeekDaytime18 = [];
      if (this.Included_newe.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.carSlotWeekDaytime18.push(i);
        }
      }
      else {
        for (let i = (+this.Included_newe[this.Included_newe.length - 1].End_time + 1); i <= 24; i++) {
          this.carSlotWeekDaytime18.push(i);
        }
      }
    }

  }
  carAddtuesday() {
    this.newIncludee1 = { "Start_time": this.SlotWeekDaytime20.toString(), "End_time": this.SlotWeekDaytime21.toString(), "Price": this.amount9 };
    this.Included_newe1.push(this.newIncludee1);
    console.log(this.Included_newe1);
    this.car_time2();
    this.SlotWeekDaytime20 = undefined;
    this.SlotWeekDaytime21 = undefined;
    this.amount9 = "";
    this.parking_details_car_price_day[2].Timings = this.Included_newe1;

  }
  carremovetuesday(i) {

    if (i < this.Included_newe1.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_newe1.splice(i, (this.Included_newe1.length - i));
          this.parking_details_car_price_day[2].Timings = this.Included_newe1;
          this.carSlotWeekDaytime20 = [];
          if (this.Included_newe1.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.carSlotWeekDaytime20.push(i);
            }
          }
          else {
            for (let i = (+this.Included_newe1[this.Included_newe1.length - 1].End_time + 1); i <= 24; i++) {
              this.carSlotWeekDaytime20.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_newe1.splice(i, 1);
      this.parking_details_car_price_day[2].Timings = this.Included_newe1;
      this.carSlotWeekDaytime20 = [];
      if (this.Included_newe1.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.carSlotWeekDaytime20.push(i);
        }
      }
      else {
        for (let i = (+this.Included_newe1[this.Included_newe1.length - 1].End_time + 1); i <= 24; i++) {
          this.carSlotWeekDaytime20.push(i);
        }
      }
    }

  }
  addweddayc() {
    this.newIncludee2 = { "Start_time": this.SlotWeekDaytime22.toString(), "End_time": this.SlotWeekDaytime23.toString(), "Price": this.amount10 };
    this.Included_newe2.push(this.newIncludee2);
    console.log(this.Included_newe2);
    this.car_time3();
    this.SlotWeekDaytime22 = undefined;
    this.SlotWeekDaytime23 = undefined;
    this.amount10 = "";
    this.parking_details_car_price_day[3].Timings = this.Included_newe2;
  }
  deletewedsdayc(i) {


    if (i < this.Included_newe2.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_newe2.splice(i, (this.Included_newe2.length - i));
          this.parking_details_car_price_day[3].Timings = this.Included_newe2;
          this.carSlotWeekDaytime22 = [];
          if (this.Included_newe2.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.carSlotWeekDaytime22.push(i);
            }
          }
          else {
            for (let i = (+this.Included_newe2[this.Included_newe2.length - 1].End_time + 1); i <= 24; i++) {
              this.carSlotWeekDaytime22.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_newe2.splice(i, 1);
      this.parking_details_car_price_day[3].Timings = this.Included_newe2;
      this.carSlotWeekDaytime22 = [];
      if (this.Included_newe2.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.carSlotWeekDaytime22.push(i);
        }
      }
      else {
        for (let i = (+this.Included_newe2[this.Included_newe2.length - 1].End_time + 1); i <= 24; i++) {
          this.carSlotWeekDaytime22.push(i);
        }
      }
    }

  }
  addthursdayc() {
    this.newIncludee3 = { "Start_time": this.SlotWeekDaytime24.toString(), "End_time": this.SlotWeekDaytime25.toString(), "Price": this.amount11 };
    this.Included_newe3.push(this.newIncludee3);
    console.log(this.Included_newe3);
    this.car_time4();
    this.SlotWeekDaytime24 = undefined;
    this.SlotWeekDaytime25 = undefined;
    this.amount11 = "";
    this.parking_details_car_price_day[4].Timings = this.Included_newe3;
  }
  deletethursdayc(i) {

    if (i < this.Included_newe3.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_newe3.splice(i, (this.Included_newe3.length - i));
          this.parking_details_car_price_day[4].Timings = this.Included_newe3;
          this.carSlotWeekDaytime24 = [];
          if (this.Included_newe3.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.carSlotWeekDaytime24.push(i);
            }
          }
          else {
            for (let i = (+this.Included_newe3[this.Included_newe3.length - 1].End_time + 1); i <= 24; i++) {
              this.carSlotWeekDaytime24.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_newe3.splice(i, 1);
      this.parking_details_car_price_day[4].Timings = this.Included_newe3;
      this.carSlotWeekDaytime24 = [];
      if (this.Included_newe3.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.carSlotWeekDaytime24.push(i);
        }
      }
      else {
        for (let i = (+this.Included_newe3[this.Included_newe3.length - 1].End_time + 1); i <= 24; i++) {
          this.carSlotWeekDaytime24.push(i);
        }
      }
    }

  }
  addfridayc() {
    this.newIncludee4 = { "Start_time": this.SlotWeekDaytime26.toString(), "End_time": this.SlotWeekDaytime27.toString(), "Price": this.amount12 };
    this.Included_newe4.push(this.newIncludee4);
    console.log(this.Included_newe4);
    this.car_time5();
    this.SlotWeekDaytime26 = undefined;
    this.SlotWeekDaytime27 = undefined;
    this.amount12 = "";
    this.parking_details_car_price_day[5].Timings = this.Included_newe4;

  }
  deletefridayc(i) {

    if (i < this.Included_newe4.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_newe4.splice(i, (this.Included_newe4.length - i));
          this.parking_details_car_price_day[5].Timings = this.Included_newe4;
          this.carSlotWeekDaytime26 = [];
          if (this.Included_newe4.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.carSlotWeekDaytime26.push(i);
            }
          }
          else {
            for (let i = (+this.Included_newe4[this.Included_newe4.length - 1].End_time + 1); i <= 24; i++) {
              this.carSlotWeekDaytime26.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_newe4.splice(i, 1);
      this.parking_details_car_price_day[5].Timings = this.Included_newe4;
      this.carSlotWeekDaytime26 = [];
      if (this.Included_newe4.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.carSlotWeekDaytime26.push(i);
        }
      }
      else {
        for (let i = (+this.Included_newe4[this.Included_newe4.length - 1].End_time + 1); i <= 24; i++) {
          this.carSlotWeekDaytime26.push(i);
        }
      }
    }

  }
  addsaturdayc() {
    this.newIncludee5 = { "Start_time": this.SlotWeekDaytime28.toString(), "End_time": this.SlotWeekDaytime29.toString(), "Price": this.amount13 };
    this.Included_newe5.push(this.newIncludee5);
    console.log(this.Included_new5);
    this.car_time6();
    this.SlotWeekDaytime28 = undefined;
    this.SlotWeekDaytime29 = undefined;
    this.amount13 = "";
    this.parking_details_car_price_day[6].Timings = this.Included_newe5;
  }
  deletesaturdayc(i) {

    if (i < this.Included_newe5.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_newe5.splice(i, (this.Included_newe5.length - i));
          this.parking_details_car_price_day[6].Timings = this.Included_newe5;
          this.carSlotWeekDaytime28 = [];
          if (this.Included_newe5.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.carSlotWeekDaytime28.push(i);
            }
          }
          else {
            for (let i = (+this.Included_newe5[this.Included_newe5.length - 1].End_time + 1); i <= 24; i++) {
              this.carSlotWeekDaytime28.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_newe5.splice(i, 1);
      this.parking_details_car_price_day[6].Timings = this.Included_newe5;
      this.carSlotWeekDaytime28 = [];
      if (this.Included_newe5.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.carSlotWeekDaytime28.push(i);
        }
      }
      else {
        for (let i = (+this.Included_newe5[this.Included_newe5.length - 1].End_time + 1); i <= 24; i++) {
          this.carSlotWeekDaytime28.push(i);
        }
      }
    }

  }
  addsundayc() {
    this.newIncludee6 = { "Start_time": this.SlotWeekDaytime30.toString(), "End_time": this.SlotWeekDaytime31.toString(), "Price": this.amount14 };
    this.Included_newe6.push(this.newIncludee6);
    console.log(this.Included_new6);
    this.car_time7();
    this.SlotWeekDaytime30 = undefined;
    this.SlotWeekDaytime31 = undefined;
    this.amount14 = "";
    this.parking_details_car_price_day[0].Timings = this.Included_newe6;
  }
  deletesundayc(i) {

    if (i < this.Included_newe6.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_newe6.splice(i, (this.Included_newe6.length - i));
          this.parking_details_car_price_day[0].Timings = this.Included_newe6;
          this.carSlotWeekDaytime30 = [];
          if (this.Included_newe6.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.carSlotWeekDaytime30.push(i);
            }
          }
          else {
            for (let i = (+this.Included_newe6[this.Included_newe6.length - 1].End_time + 1); i <= 24; i++) {
              this.carSlotWeekDaytime30.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_newe6.splice(i, 1);
      this.parking_details_car_price_day[0].Timings = this.Included_newe6;
      this.carSlotWeekDaytime30 = [];
      if (this.Included_newe6.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.carSlotWeekDaytime30.push(i);
        }
      }
      else {
        for (let i = (+this.Included_newe6[this.Included_newe6.length - 1].End_time + 1); i <= 24; i++) {
          this.carSlotWeekDaytime30.push(i);
        }
      }
    }

  }

  addweekdaysc2() {
    if (this.slotdatee1 != undefined && this.SlotWeekDaytime32 != undefined && this.SlotWeekDaytime33 != undefined && this.amount15) {
      this.newIncludee7 = { "dates": this.slotdatee1, "Start_time": this.SlotWeekDaytime32.toString(), "End_time": this.SlotWeekDaytime33.toString(), "Price": this.amount15 };
      this.parking_details_car_price_spe_day.push(this.newIncludee7);
      console.log(this.parking_details_car_price_spe_day);
      this.car_time8();
      this.SlotWeekDaytime32 = undefined;
      this.SlotWeekDaytime33 = undefined;
      this.amount15 = "";
    }
    else {
      alert("Fill all the required fields")
    }
  }
  deleteaddweekdaysc2(i) {
    if (i < this.parking_details_car_price_spe_day.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.parking_details_car_price_spe_day.splice(i, (this.parking_details_car_price_spe_day.length - i));
          this.carSlotWeekDaytime32 = [];
          if (this.parking_details_car_price_spe_day.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.carSlotWeekDaytime32.push(i);
            }
          }
          else {
            for (let i = (+this.parking_details_car_price_spe_day[this.parking_details_car_price_spe_day.length - 1].End_time + 1); i <= 24; i++) {
              this.carSlotWeekDaytime32.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.parking_details_car_price_spe_day.splice(i, 1);
      this.carSlotWeekDaytime32 = [];
      if (this.parking_details_car_price_spe_day.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.carSlotWeekDaytime32.push(i);
        }
      }
      else {
        for (let i = (+this.parking_details_car_price_spe_day[this.parking_details_car_price_spe_day.length - 1].End_time + 1); i <= 24; i++) {
          this.carSlotWeekDaytime32.push(i);
        }
      }
    }

  }

  // Car----

  //  Both----

  carAddmondayboth() {
    this.newIncludeee = { "Start_time": this.SlotWeekDaytime35.toString(), "End_time": this.SlotWeekDaytime36.toString(), "Price": this.amount17 };
    this.Included_newee.push(this.newIncludeee);
    console.log(this.Included_newee);
    this.both_time1();
    this.SlotWeekDaytime35 = undefined;
    this.SlotWeekDaytime36 = undefined;
    this.amount17 = "";
    this.both_slot_week[1].Timings = this.Included_newee;
  }
  carremovemondayboth(i) {

    if (i < this.Included_newee.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_newee.splice(i, (this.Included_newee.length - i));
          this.both_slot_week[1].Timings = this.Included_newee;
          this.bothSlotWeekDaytime35 = [];
          if (this.Included_newee.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.bothSlotWeekDaytime35.push(i);
            }
          }
          else {
            for (let i = (+this.Included_newee[this.Included_newee.length - 1].End_time + 1); i <= 24; i++) {
              this.bothSlotWeekDaytime35.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_newee.splice(i, 1);
      this.both_slot_week[1].Timings = this.Included_newee;
      this.bothSlotWeekDaytime35 = [];
      if (this.Included_newee.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.bothSlotWeekDaytime35.push(i);
        }
      }
      else {
        for (let i = (+this.Included_newee[this.Included_newee.length - 1].End_time + 1); i <= 24; i++) {
          this.bothSlotWeekDaytime35.push(i);
        }
      }
    }

  }
  carAddtuesdayboth() {
    this.newIncludeee1 = { "Start_time": this.SlotWeekDaytime37.toString(), "End_time": this.SlotWeekDaytime38.toString(), "Price": this.amount18 };
    this.Included_newee1.push(this.newIncludeee1);
    console.log(this.Included_newee1);
    this.both_time2();
    this.SlotWeekDaytime37 = undefined;
    this.SlotWeekDaytime38 = undefined;
    this.amount18 = "";
    this.both_slot_week[2].Timings = this.Included_newee1;

  }
  carremovetuesdayboth(i) {

    if (i < this.Included_newee1.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_newee1.splice(i, (this.Included_newee1.length - i));
          this.both_slot_week[2].Timings = this.Included_newee1;
          this.bothSlotWeekDaytime37 = [];
          if (this.Included_newee1.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.bothSlotWeekDaytime37.push(i);
            }
          }
          else {
            for (let i = (+this.Included_newee1[this.Included_newee1.length - 1].End_time + 1); i <= 24; i++) {
              this.bothSlotWeekDaytime37.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_newee1.splice(i, 1);
      this.both_slot_week[2].Timings = this.Included_newee1;
      this.bothSlotWeekDaytime37 = [];
      if (this.Included_newee1.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.bothSlotWeekDaytime37.push(i);
        }
      }
      else {
        for (let i = (+this.Included_newee1[this.Included_newee1.length - 1].End_time + 1); i <= 24; i++) {
          this.bothSlotWeekDaytime37.push(i);
        }
      }
    }

  }
  addweddaycboth() {
    this.newIncludeee2 = { "Start_time": this.SlotWeekDaytime39.toString(), "End_time": this.SlotWeekDaytime40.toString(), "Price": this.amount19 };
    this.Included_newee2.push(this.newIncludeee2);
    console.log(this.Included_newee2);
    this.both_time3();
    this.SlotWeekDaytime39 = undefined;
    this.SlotWeekDaytime40 = undefined;
    this.amount19 = "";
    this.both_slot_week[3].Timings = this.Included_newee2;
  }
  deletewedsdaycboth(i) {

    if (i < this.Included_newee2.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_newee2.splice(i, (this.Included_newee2.length - i));
          this.both_slot_week[3].Timings = this.Included_newee2;
          this.bothSlotWeekDaytime39 = [];
          if (this.Included_newee2.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.bothSlotWeekDaytime39.push(i);
            }
          }
          else {
            for (let i = (+this.Included_newee2[this.Included_newee2.length - 1].End_time + 1); i <= 24; i++) {
              this.bothSlotWeekDaytime39.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_newee2.splice(i, 1);
      this.both_slot_week[3].Timings = this.Included_newee2;
      this.bothSlotWeekDaytime39 = [];
      if (this.Included_newee2.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.bothSlotWeekDaytime39.push(i);
        }
      }
      else {
        for (let i = (+this.Included_newee2[this.Included_newee2.length - 1].End_time + 1); i <= 24; i++) {
          this.bothSlotWeekDaytime39.push(i);
        }
      }
    }

  }
  addthursdaycboth() {
    this.newIncludeee3 = { "Start_time": this.SlotWeekDaytime41.toString(), "End_time": this.SlotWeekDaytime42.toString(), "Price": this.amount20 };
    this.Included_newee3.push(this.newIncludeee3);
    console.log(this.Included_newee3);
    this.both_time4();
    this.SlotWeekDaytime41 = undefined;
    this.SlotWeekDaytime42 = undefined;
    this.amount20 = "";
    this.both_slot_week[4].Timings = this.Included_newee3;
  }
  deletethursdaycboth(i) {
    if (i < this.Included_newee3.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_newee3.splice(i, (this.Included_newee3.length - i));
          this.both_slot_week[4].Timings = this.Included_newee3;
          this.bothSlotWeekDaytime41 = [];
          if (this.Included_newee3.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.bothSlotWeekDaytime41.push(i);
            }
          }
          else {
            for (let i = (+this.Included_newee3[this.Included_newee3.length - 1].End_time + 1); i <= 24; i++) {
              this.bothSlotWeekDaytime41.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_newee3.splice(i, 1);
      this.both_slot_week[4].Timings = this.Included_newee3;
      this.bothSlotWeekDaytime41 = [];
      if (this.Included_newee3.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.bothSlotWeekDaytime41.push(i);
        }
      }
      else {
        for (let i = (+this.Included_newee3[this.Included_newee3.length - 1].End_time + 1); i <= 24; i++) {
          this.bothSlotWeekDaytime41.push(i);
        }
      }
    }

  }
  addfridaycboth() {
    this.newIncludeee4 = { "Start_time": this.SlotWeekDaytime43.toString(), "End_time": this.SlotWeekDaytime44.toString(), "Price": this.amount21 };
    this.Included_newee4.push(this.newIncludeee4);
    console.log(this.Included_newee4);
    this.both_time5();
    this.SlotWeekDaytime43 = undefined;
    this.SlotWeekDaytime44 = undefined;
    this.amount21 = "";
    this.both_slot_week[5].Timings = this.Included_newee4;

  }
  deletefridaycboth(i) {
    if (i < this.Included_newee4.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_newee4.splice(i, (this.Included_newee4.length - i));
          this.both_slot_week[5].Timings = this.Included_newee4;
          this.bothSlotWeekDaytime43 = [];
          if (this.Included_newee4.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.bothSlotWeekDaytime43.push(i);
            }
          }
          else {
            for (let i = (+this.Included_newee4[this.Included_newee4.length - 1].End_time + 1); i <= 24; i++) {
              this.bothSlotWeekDaytime43.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_newee4.splice(i, 1);
      this.both_slot_week[5].Timings = this.Included_newee4;
      this.bothSlotWeekDaytime43 = [];
      if (this.Included_newee4.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.bothSlotWeekDaytime43.push(i);
        }
      }
      else {
        for (let i = (+this.Included_newee4[this.Included_newee4.length - 1].End_time + 1); i <= 24; i++) {
          this.bothSlotWeekDaytime43.push(i);
        }
      }
    }

  }
  addsaturdaycboth() {
    this.newIncludeee5 = { "Start_time": this.SlotWeekDaytime45.toString(), "End_time": this.SlotWeekDaytime46.toString(), "Price": this.amount22 };
    this.Included_newee5.push(this.newIncludeee5);
    console.log(this.Included_newee5);
    this.both_time6();
    this.SlotWeekDaytime45 = undefined;
    this.SlotWeekDaytime46 = undefined;
    this.amount22 = "";
    this.both_slot_week[6].Timings = this.Included_newee5;
  }
  deletesaturdaycboth(i) {

    if (i < this.Included_newee5.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_newee5.splice(i, (this.Included_newee5.length - i));
          this.both_slot_week[6].Timings = this.Included_newee5;
          this.bothSlotWeekDaytime45 = [];
          if (this.Included_newee5.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.bothSlotWeekDaytime45.push(i);
            }
          }
          else {
            for (let i = (+this.Included_newee5[this.Included_newee5.length - 1].End_time + 1); i <= 24; i++) {
              this.bothSlotWeekDaytime45.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_newee5.splice(i, 1);
      this.both_slot_week[6].Timings = this.Included_newee5;
      this.bothSlotWeekDaytime45 = [];
      if (this.Included_newee5.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.bothSlotWeekDaytime45.push(i);
        }
      }
      else {
        for (let i = (+this.Included_newee5[this.Included_newee5.length - 1].End_time + 1); i <= 24; i++) {
          this.bothSlotWeekDaytime45.push(i);
        }
      }
    }

  }
  addsundaycboth() {
    this.newIncludee6 = { "Start_time": this.SlotWeekDaytime47.toString(), "End_time": this.SlotWeekDaytime48.toString(), "Price": this.amount23 };
    this.Included_newee6.push(this.newIncludee6);
    console.log(this.Included_newee6);
    this.both_time7();
    this.SlotWeekDaytime47 = undefined;
    this.SlotWeekDaytime48 = undefined;
    this.amount23 = "";
    this.both_slot_week[0].Timings = this.Included_newee6;
  }
  deletesundaycboth(i) {

    if (i < this.Included_newee6.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.Included_newee6.splice(i, (this.Included_newee6.length - i));
          this.both_slot_week[0].Timings = this.Included_newee6;
          this.bothSlotWeekDaytime47 = [];
          for (let i = (+this.Included_newee6[this.Included_newee6.length - 1].End_time + 1); i <= 24; i++) {
            this.bothSlotWeekDaytime47.push(i);
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.Included_newee6.splice(i, 1);
      this.both_slot_week[0].Timings = this.Included_newee6;
      this.bothSlotWeekDaytime47 = [];
      if (this.Included_newee6.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.bothSlotWeekDaytime47.push(i);
        }
      }
      else {
        for (let i = (+this.Included_newee6[this.Included_newee6.length - 1].End_time + 1); i <= 24; i++) {
          this.bothSlotWeekDaytime47.push(i);
        }
      }
    }

  }

  addweekdaysc2both() {
    if (this.slotdateee1 != undefined && this.SlotWeekDaytime49 != undefined && this.SlotWeekDaytime50 != undefined && this.amount24) {
      this.newIncludeee7 = { "dates": this.slotdateee1, "Start_time": this.SlotWeekDaytime49.toString(), "End_time": this.SlotWeekDaytime50.toString(), "Price": this.amount24 };
      this.both_slot_per_day.push(this.newIncludeee7);
      console.log(this.both_slot_per_day);
      this.both_time8();
      this.SlotWeekDaytime49 = undefined;
      this.SlotWeekDaytime50 = undefined;
      this.amount24 = "";
    }
    else {
      alert("Fill all the required fields")
    }

  }
  deleteaddweekdaysc2both(i) {

    if (i < this.both_slot_per_day.length - 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you want to remove this time period, you have to reset the remaining time periods',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.both_slot_per_day.splice(i, (this.both_slot_per_day.length - i));
          this.bothSlotWeekDaytime49 = [];
          if (this.both_slot_per_day.length == 0) {
            for (let i = 1; i <= 24; i++) {
              this.bothSlotWeekDaytime49.push(i);
            }
          }
          else {
            for (let i = (+this.both_slot_per_day[this.both_slot_per_day.length - 1].End_time + 1); i <= 24; i++) {
              this.bothSlotWeekDaytime49.push(i);
            }
          }
          Swal.fire(
            'Deleted!',
            'Time Periods has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    }
    else {
      this.both_slot_per_day.splice(i, 1);
      this.bothSlotWeekDaytime49 = [];
      if (this.both_slot_per_day.length == 0) {
        for (let i = 1; i <= 24; i++) {
          this.bothSlotWeekDaytime49.push(i);
        }
      }
      else {
        for (let i = (+this.both_slot_per_day[this.both_slot_per_day.length - 1].End_time + 1); i <= 24; i++) {
          this.bothSlotWeekDaytime49.push(i);
        }
      }
    }

  }
  // Both-----


  onOptionsSelected(value: string) {
    console.log("the selected value is " + value);
  }
  addbikeslot() {
    this.bikeslot1 = this.bikeslots;
    for (let a = 0; a < this.bikeslot1; a++) {
      this.include_bike1.push({ "area": '', "floor": '', "slot": '', "status": "enable" });
      console.log(this.include_bike1);
    }
    this.bikeslots = "";
  }
  deletebike(i) {
    this.include_bike1.splice(i, 1);
  }
  deletecar(i) {
    this.include_bike2.splice(i, 1);
  }
  addcarslot() {
    this.bikeslot2 = this.carslots;
    for (let a = 0; a < this.bikeslot2; a++) {
      this.include_bike2.push({ "area": '', "floor": '', "slot": '', "status": "enable" });
      console.log(this.include_bike2);
    }
    this.carslots = "";
  }
  deletcar(i) {
    this.include_bike2.splice(i, 1);
  }

  changepermission(event) {
    if (event.target.checked == true) {
      if (event.target.value == "Mechanic") {
        this.fortwowheeler = true;
      }
      if (event.target.value == "Parking") {
        this.forwfourwheeler = true;
      }
      if (event.target.value == "both") {
        this.forboth = true;
      }
    }
    else if (event.target.checked == false) {
      if (event.target.value == "Mechanic") {
        this.fortwowheeler = false;
      }
      if (event.target.value == "Parking") {
        this.forwfourwheeler = false;
      }
      if (event.target.value == "both") {
        this.forboth = false;
      }
    }

  }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  emailcheck() {
    this.emailerror = this._val.emailValidator(this.owner_email);
  }
  emailcheck1() {
    this.emailerror1 = this._val.emailValidator(this.poc_email);
  }
  _keyPress(event: any) {
    const pattern = /[0-9\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }
  }

  fileupload2(event) {
    this.selectedfile1 = event.target.files[0];
    this.addfiles2();
  }

  addfiles2() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedfile1, this.selectedfile1.name);
    this.http.post('https://myvacala.com/api/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.pancard = res.Data;
        console.log(this.pancard);
      });
  }
  fileupload1(event) {
    this.selectedfile1 = event.target.files[0];
    this.addfiles1();
  }

  addfiles1() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedfile1, this.selectedfile1.name);
    this.http.post('https://myvacala.com/api/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.adarcard = res.Data;
        console.log(this.adarcard);
      });
  }
  fileupload3(event) {
    this.selectedfile1 = event.target.files[0];
    this.addfiles3();
  }

  addfiles3() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedfile1, this.selectedfile1.name);
    this.http.post('https://myvacala.com/api/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.gstdoc = res.Data;
        console.log(this.gstdoc);
      });
  }
  phone1() {
    this.phone_err1 = this._val.mobileValidator(this.ownerprimarycontact)
  }
  phone2() {
    this.phone_err2 = this._val.mobileValidator(this.Secondcontact)
  }


  validation() {
    let data = {
      "owner_name": this.Ownername,
      "owner_email": this.owner_email,
      "owner_pri_contact": this.ownerprimarycontact,
      "owner_sec_contact": this.Secondcontact,
      "owner_pan_no": this.pancardno,
      "owner_pan_file": this.pancard,
      "owner_aadhar_no": this.adharno,
      "owner_aadhar_file": this.adarcard,
      "owner_res_address": this.resaddress
    }
    console.log(data)
    if (this.Ownername != undefined && this.Ownername != '' && this.owner_email != undefined && this.ownerprimarycontact != undefined && this.Secondcontact != undefined && this.pancardno != undefined
      && this.pancardno != '' && this.pancard != undefined && this.adharno != undefined && this.adharno != '' && this.adarcard != undefined && this.resaddress != undefined && this.resaddress != ''
      && this.emailerror == false && this.phone_err1 == false && this.phone_err2 == false) {
      this.validate = true;
    }
    else {
      this.validate = false;
    }
  }
  createowner() {
    this.validation();
    if (this.validate == true) {
      let pnone = {
        "owner_pri_contact": this.ownerprimarycontact
      }
      this._api.Parking_owner_checking_Get_Id(pnone).subscribe((res: any) => {
        console.log(res)
        if (res.Code == 400) {
          alert("phone number already exists")
        }
        else if (res.Code == 200) {
          let data = {
            "owner_name": this.Ownername,
            "owner_email": this.owner_email,
            "owner_pri_contact": this.ownerprimarycontact,
            "owner_sec_contact": this.Secondcontact,
            "owner_pan_no": this.pancardno,
            "owner_pan_file": this.pancard,
            "owner_aadhar_no": this.adharno,
            "owner_aadhar_file": this.adarcard,
            "owner_res_address": this.resaddress
          }
          console.log(data)
          this._api.Parking_owner_create(data).subscribe((res: any) => {
            console.log(res)
            alert(res.Message);
            this.parking_Details = res.parking_Details;
            this.step1 = true;
            this.Parkingname = this.parking_Details.parking_details_name;
            this.Parkingaddress = this.parking_Details.parking_details_address;
            this.gstaddress = this.parking_Details.parking_details_gstaddress;
            this.gstdoc = this.parking_Details.parking_details_gstdoc;
            this.gstnumber = this.parking_Details.parking_details_gstno;
            this.map = this.parking_Details.parking_details_maplink;
            this.lang = this.parking_Details.parking_details_long;
            this.lat = this.parking_Details.parking_details_lat;
            this.poc_email = this.parking_Details.parking_details_pocemail;
            this.include_bike1 = this.parking_Details.parking_details_slots_Bike_details;
            this.include_bike2 = this.parking_Details.parking_details_slots_Car_details;
            // this.bike_slot_count = this.parking_Details.parking_details_slots_count_Bike;
            // this.car_slot_count = this.parking_Details.parking_details_slots_count_Car;
            this.parking_details_bike_price_day = this.parking_Details.parking_details_bike_price_day;
            this.parking_details_car_price_day = this.parking_Details.parking_details_car_price_day;
            this.parking_details_car_price_spe_day = this.parking_Details.parking_details_car_price_spe_day;
            this.parking_details_bike_price_spe_day = this.parking_Details.parking_details_bike_price_spe_day;
          })
        }
      })

    }
    else {
      alert("Please fill the all fields")
    }


  }



  time() {
    for (let i = 1; i <= 24; i++) {
      this.bikeSlotWeekDaytime1.push(i);
      this.bikeSlotWeekDaytime3.push(i);
      this.bikeSlotWeekDaytime5.push(i);
      this.bikeSlotWeekDaytime7.push(i);
      this.bikeSlotWeekDaytime9.push(i);
      this.bikeSlotWeekDaytime11.push(i);
      this.bikeSlotWeekDaytime13.push(i);
      this.bikeSlotWeekDaytime16.push(i);
      this.carSlotWeekDaytime18.push(i);
      this.carSlotWeekDaytime20.push(i);
      this.carSlotWeekDaytime22.push(i);
      this.carSlotWeekDaytime24.push(i);
      this.carSlotWeekDaytime26.push(i);
      this.carSlotWeekDaytime28.push(i);
      this.carSlotWeekDaytime30.push(i);
      this.carSlotWeekDaytime32.push(i);
      this.bothSlotWeekDaytime35.push(i);
      this.bothSlotWeekDaytime37.push(i);
      this.bothSlotWeekDaytime39.push(i);
      this.bothSlotWeekDaytime41.push(i);
      this.bothSlotWeekDaytime43.push(i);
      this.bothSlotWeekDaytime45.push(i);
      this.bothSlotWeekDaytime47.push(i);
      this.bothSlotWeekDaytime49.push(i);
    }
  }
  biketime1() {
    console.log(this.SlotWeekDaytime1)
    for (let i = (+this.SlotWeekDaytime1); i <= 24; i++) {
      this.bikeSlotWeekDaytime2.push(i);
    }
    console.log(this.bikeSlotWeekDaytime2)
    if (this.SlotWeekDaytime1 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.bikeSlotWeekDaytime2.push(i);
      }
    }

  }
  bike_time1() {
    this.bikeSlotWeekDaytime1 = []
    this.bikeSlotWeekDaytime1.push(+this.SlotWeekDaytime2);
    this.bikeSlotWeekDaytime2 = [];
  }

  biketime2() {
    console.log(this.SlotWeekDaytime3)
    for (let i = (+this.SlotWeekDaytime3); i <= 24; i++) {
      this.bikeSlotWeekDaytime4.push(i);
    }
    console.log(this.bikeSlotWeekDaytime4)
    if (this.SlotWeekDaytime3 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.bikeSlotWeekDaytime4.push(i);
      }
    }
  }
  bike_time2() {
    this.bikeSlotWeekDaytime3 = []
    this.bikeSlotWeekDaytime3.push(+this.SlotWeekDaytime4);
    this.bikeSlotWeekDaytime4 = [];
  }
  biketime3() {

    console.log(this.SlotWeekDaytime5)
    for (let i = (+this.SlotWeekDaytime5); i <= 24; i++) {
      this.bikeSlotWeekDaytime6.push(i);
    }
    console.log(this.bikeSlotWeekDaytime6)
    if (this.SlotWeekDaytime5 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.bikeSlotWeekDaytime6.push(i);
      }
    }

  }
  bike_time3() {
    this.bikeSlotWeekDaytime5 = []
    this.bikeSlotWeekDaytime5.push(+this.SlotWeekDaytime6);
    this.bikeSlotWeekDaytime6 = [];
  }
  biketime4() {
    console.log(this.SlotWeekDaytime7)
    for (let i = (+this.SlotWeekDaytime7); i <= 24; i++) {
      this.bikeSlotWeekDaytime8.push(i);
    }
    console.log(this.bikeSlotWeekDaytime8)
    if (this.SlotWeekDaytime7 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.bikeSlotWeekDaytime8.push(i);
      }
    }


  }
  bike_time4() {

    this.bikeSlotWeekDaytime7 = []
    this.bikeSlotWeekDaytime7.push(+this.SlotWeekDaytime8);
    this.bikeSlotWeekDaytime8 = [];
  }
  biketime5() {
    console.log(this.SlotWeekDaytime9)
    for (let i = (+this.SlotWeekDaytime9); i <= 24; i++) {
      this.bikeSlotWeekDaytime10.push(i);
    }
    console.log(this.bikeSlotWeekDaytime10)
    if (this.SlotWeekDaytime9 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.bikeSlotWeekDaytime10.push(i);
      }
    }

  }
  bike_time5() {
    this.bikeSlotWeekDaytime9 = []
    this.bikeSlotWeekDaytime9.push(+this.SlotWeekDaytime10);
    this.bikeSlotWeekDaytime10 = [];

  }
  biketime6() {
    console.log(this.SlotWeekDaytime11)
    for (let i = (+this.SlotWeekDaytime11); i <= 24; i++) {
      this.bikeSlotWeekDaytime12.push(i);
    }
    console.log(this.bikeSlotWeekDaytime12)
    if (this.SlotWeekDaytime11 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.bikeSlotWeekDaytime12.push(i);
      }
    }

  }
  bike_time6() {
    this.bikeSlotWeekDaytime11 = []
    this.bikeSlotWeekDaytime11.push(+this.SlotWeekDaytime12);
    this.bikeSlotWeekDaytime12 = [];

  }
  biketime7() {
    console.log(this.SlotWeekDaytime13)
    for (let i = (+this.SlotWeekDaytime13); i <= 24; i++) {
      this.bikeSlotWeekDaytime14.push(i);
    }
    console.log(this.bikeSlotWeekDaytime14)
    if (this.SlotWeekDaytime13 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.bikeSlotWeekDaytime14.push(i);
      }
    }

  }
  bike_time7() {
    this.bikeSlotWeekDaytime13 = []
    this.bikeSlotWeekDaytime13.push(+this.SlotWeekDaytime14);
    this.bikeSlotWeekDaytime14 = [];

  }
  biketime8() {
    console.log(this.SlotWeekDaytime16)
    for (let i = (+this.SlotWeekDaytime16); i <= 24; i++) {
      this.bikeSlotWeekDaytime17.push(i);
    }
    console.log(this.bikeSlotWeekDaytime17)
    if (this.SlotWeekDaytime16 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.bikeSlotWeekDaytime17.push(i);
      }
    }

  }
  bike_time8() {
    this.bikeSlotWeekDaytime16 = []
    this.bikeSlotWeekDaytime16.push(+this.SlotWeekDaytime17);
    this.bikeSlotWeekDaytime17 = [];

  }

  bikedatechange() {
    if (this.bike_spec_day_date == undefined || (this.bike_spec_day_date == this.bikeslotdate1)) {
      this.bike_spec_day_date = this.bikeslotdate1;
    }
    else if (this.bike_spec_day_date != undefined && (this.bike_spec_day_date != this.bikeslotdate1)) {
      this.bike_spec_day_date = this.bikeslotdate1;
      this.bikeSlotWeekDaytime16 = []
      for (let i = 1; i <= 24; i++) {
        this.bikeSlotWeekDaytime16.push(i);
      }
    }
  }


  cartime1() {
    console.log(this.SlotWeekDaytime18)
    for (let i = (+this.SlotWeekDaytime18); i <= 24; i++) {
      this.carSlotWeekDaytime19.push(i);
    }
    console.log(this.carSlotWeekDaytime19)
    if (this.SlotWeekDaytime18 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.carSlotWeekDaytime19.push(i);
      }
    }

  }
  car_time1() {
    this.carSlotWeekDaytime18 = []
    this.carSlotWeekDaytime18.push(+this.SlotWeekDaytime19);
    this.carSlotWeekDaytime19 = [];

  }
  cartime2() {
    console.log(this.SlotWeekDaytime20)
    for (let i = (+this.SlotWeekDaytime20); i <= 24; i++) {
      this.carSlotWeekDaytime21.push(i);
    }
    console.log(this.carSlotWeekDaytime21)
    if (this.SlotWeekDaytime20 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.carSlotWeekDaytime21.push(i);
      }
    }

  }
  car_time2() {
    this.carSlotWeekDaytime20 = []
    this.carSlotWeekDaytime20.push(+this.SlotWeekDaytime21);
    this.carSlotWeekDaytime21 = [];

  }
  cartime3() {
    console.log(this.SlotWeekDaytime22)
    for (let i = (+this.SlotWeekDaytime22); i <= 24; i++) {
      this.carSlotWeekDaytime23.push(i);
    }
    console.log(this.carSlotWeekDaytime23)
    if (this.SlotWeekDaytime22 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.carSlotWeekDaytime23.push(i);
      }
    }

  }
  car_time3() {
    this.carSlotWeekDaytime22 = []
    this.carSlotWeekDaytime22.push(+this.SlotWeekDaytime23);
    this.carSlotWeekDaytime23 = [];

  }
  cartime4() {
    console.log(this.SlotWeekDaytime24)
    for (let i = (+this.SlotWeekDaytime24); i <= 24; i++) {
      this.carSlotWeekDaytime25.push(i);
    }
    console.log(this.carSlotWeekDaytime25)
    if (this.SlotWeekDaytime24 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.carSlotWeekDaytime25.push(i);
      }
    }

  }
  car_time4() {
    this.carSlotWeekDaytime24 = []
    this.carSlotWeekDaytime24.push(+this.SlotWeekDaytime25);
    this.carSlotWeekDaytime25 = [];

  }
  cartime5() {
    console.log(this.SlotWeekDaytime26)
    for (let i = (+this.SlotWeekDaytime26); i <= 24; i++) {
      this.carSlotWeekDaytime27.push(i);
    }
    console.log(this.carSlotWeekDaytime27)
    if (this.SlotWeekDaytime26 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.carSlotWeekDaytime27.push(i);
      }
    }

  }
  car_time5() {
    this.carSlotWeekDaytime26 = []
    this.carSlotWeekDaytime26.push(+this.SlotWeekDaytime27);
    this.carSlotWeekDaytime27 = [];
  }
  cartime6() {
    console.log(this.SlotWeekDaytime28)
    for (let i = (+this.SlotWeekDaytime28); i <= 24; i++) {
      this.carSlotWeekDaytime29.push(i);
    }
    console.log(this.carSlotWeekDaytime29)
    if (this.SlotWeekDaytime28 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.carSlotWeekDaytime29.push(i);
      }
    }

  }
  car_time6() {
    this.carSlotWeekDaytime28 = []
    this.carSlotWeekDaytime28.push(+this.SlotWeekDaytime29);
    this.carSlotWeekDaytime29 = [];

  }
  cartime7() {

    console.log(this.SlotWeekDaytime30)
    for (let i = (+this.SlotWeekDaytime30); i <= 24; i++) {
      this.carSlotWeekDaytime31.push(i);
    }
    console.log(this.carSlotWeekDaytime31)
    if (this.SlotWeekDaytime30 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.carSlotWeekDaytime31.push(i);
      }
    }

  }
  car_time7() {
    this.carSlotWeekDaytime30 = []
    this.carSlotWeekDaytime30.push(+this.SlotWeekDaytime31);
    this.carSlotWeekDaytime31 = [];

  }
  cartime8() {

    console.log(this.SlotWeekDaytime32)
    for (let i = (+this.SlotWeekDaytime32); i <= 24; i++) {
      this.carSlotWeekDaytime33.push(i);
    }
    console.log(this.carSlotWeekDaytime33)
    if (this.SlotWeekDaytime32 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.carSlotWeekDaytime33.push(i);
      }
    }


  }
  car_time8() {
    this.carSlotWeekDaytime32 = []
    this.carSlotWeekDaytime32.push(+this.SlotWeekDaytime33);
    this.carSlotWeekDaytime33 = [];
  }

  cardatechange() {
    if (this.car_spec_day_date == undefined || (this.car_spec_day_date == this.slotdatee1)) {
      this.car_spec_day_date = this.slotdatee1;
    }
    else if (this.car_spec_day_date != undefined && (this.car_spec_day_date != this.slotdatee1)) {
      this.car_spec_day_date = this.slotdatee1;
      this.carSlotWeekDaytime32 = []
      for (let i = 1; i <= 24; i++) {
        this.carSlotWeekDaytime32.push(i);
      }
    }
  }

  bothtime1() {

    console.log(this.SlotWeekDaytime35)
    for (let i = (+this.SlotWeekDaytime35); i <= 24; i++) {
      this.bothSlotWeekDaytime36.push(i);
    }
    console.log(this.bothSlotWeekDaytime36)
    if (this.SlotWeekDaytime35 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.bothSlotWeekDaytime36.push(i);
      }
    }

  }
  both_time1() {
    this.bothSlotWeekDaytime35 = []
    this.bothSlotWeekDaytime35.push(+this.SlotWeekDaytime36);
    this.bothSlotWeekDaytime36 = [];

  }
  bothtime2() {
    console.log(this.SlotWeekDaytime37)
    for (let i = (+this.SlotWeekDaytime37); i <= 24; i++) {
      this.bothSlotWeekDaytime38.push(i);
    }
    console.log(this.bothSlotWeekDaytime38)
    if (this.SlotWeekDaytime37 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.bothSlotWeekDaytime38.push(i);
      }
    }

  }
  both_time2() {
    this.bothSlotWeekDaytime37 = []
    this.bothSlotWeekDaytime37.push(+this.SlotWeekDaytime38);
    this.bothSlotWeekDaytime38 = [];

  }
  bothtime3() {
    console.log(this.SlotWeekDaytime39)
    for (let i = (+this.SlotWeekDaytime39); i <= 24; i++) {
      this.bothSlotWeekDaytime40.push(i);
    }
    console.log(this.bothSlotWeekDaytime40)
    if (this.SlotWeekDaytime39 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.bothSlotWeekDaytime40.push(i);
      }
    }

  }
  both_time3() {
    this.bothSlotWeekDaytime39 = []
    this.bothSlotWeekDaytime39.push(+this.SlotWeekDaytime40);
    this.bothSlotWeekDaytime40 = [];

  }
  bothtime4() {
    console.log(this.SlotWeekDaytime41)
    for (let i = (+this.SlotWeekDaytime41); i <= 24; i++) {
      this.bothSlotWeekDaytime42.push(i);
    }
    console.log(this.bothSlotWeekDaytime42)
    if (this.SlotWeekDaytime41 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.bothSlotWeekDaytime42.push(i);
      }
    }

  }
  both_time4() {
    this.bothSlotWeekDaytime41 = []
    this.bothSlotWeekDaytime41.push(+this.SlotWeekDaytime42);
    this.bothSlotWeekDaytime42 = [];

  }
  bothtime5() {
    console.log(this.SlotWeekDaytime43)
    for (let i = (+this.SlotWeekDaytime43); i <= 24; i++) {
      this.bothSlotWeekDaytime44.push(i);
    }
    console.log(this.bothSlotWeekDaytime44)
    if (this.SlotWeekDaytime43 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.bothSlotWeekDaytime44.push(i);
      }
    }

  }
  both_time5() {
    this.bothSlotWeekDaytime43 = []
    this.bothSlotWeekDaytime43.push(+this.SlotWeekDaytime44);
    this.bothSlotWeekDaytime44 = [];

  }
  bothtime6() {
    console.log(this.SlotWeekDaytime45)
    for (let i = (+this.SlotWeekDaytime45); i <= 24; i++) {
      this.bothSlotWeekDaytime46.push(i);
    }
    console.log(this.bothSlotWeekDaytime46)
    if (this.SlotWeekDaytime45 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.bothSlotWeekDaytime46.push(i);
      }
    }

  }
  both_time6() {
    this.bothSlotWeekDaytime45 = []
    this.bothSlotWeekDaytime45.push(+this.SlotWeekDaytime46);
    this.bothSlotWeekDaytime46 = [];


  }
  bothtime7() {
    console.log(this.SlotWeekDaytime47)
    for (let i = (+this.SlotWeekDaytime47); i <= 24; i++) {
      this.bothSlotWeekDaytime48.push(i);
    }
    console.log(this.bothSlotWeekDaytime48)
    if (this.SlotWeekDaytime47 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.bothSlotWeekDaytime48.push(i);
      }
    }
  }
  both_time7() {
    this.bothSlotWeekDaytime47 = []
    this.bothSlotWeekDaytime47.push(+this.SlotWeekDaytime48);
    this.bothSlotWeekDaytime48 = [];

  }
  bothtime8() {
    console.log(this.SlotWeekDaytime49)
    for (let i = (+this.SlotWeekDaytime49); i <= 24; i++) {
      this.bothSlotWeekDaytime50.push(i);
    }
    console.log(this.bothSlotWeekDaytime50)
    if (this.SlotWeekDaytime49 == 24) {
      for (let i = 1; i <= 23; i++) {
        this.bothSlotWeekDaytime50.push(i);
      }
    }

  }
  both_time8() {
    this.bothSlotWeekDaytime49 = []
    this.bothSlotWeekDaytime49.push(+this.SlotWeekDaytime50);
    this.bothSlotWeekDaytime50 = [];

  }
  bothdatechange() {
    if (this.both_spec_day_date == undefined || (this.both_spec_day_date == this.slotdateee1)) {
      this.both_spec_day_date = this.slotdateee1;
    }
    else if (this.both_spec_day_date != undefined && (this.both_spec_day_date != this.slotdateee1)) {
      this.both_spec_day_date = this.slotdateee1;
      this.bothSlotWeekDaytime49 = []
      for (let i = 1; i <= 24; i++) {
        this.bothSlotWeekDaytime49.push(i);
      }
    }
  }
}
