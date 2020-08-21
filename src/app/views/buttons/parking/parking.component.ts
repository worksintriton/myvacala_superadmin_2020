import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../api.service';
import { ValidatorService } from '../../../valitation.service'
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
  both_slot_week: any = [{ Timings: [], Title: "Monday" },
  { Timings: [], Title: "Tuesday" },
  { Timings: [], Title: "Wednesday" },
  { Timings: [], Title: "Thursday" },
  { Timings: [], Title: "Friday" },
  { Timings: [], Title: "Saturday" },
  { Timings: [], Title: "Sunday" },]
  both_slot_per_day: any = [];
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    private _val: ValidatorService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    this.VehicleType = " ";
    this.AreaName = " ";
    this.SubAreaName = "";
    this.RentperTime = "";
    this.SlotNumber = "";
    this.timefor = "";

    this.forboth = false;
    this.fortwowheeler = false;
    this.forwfourwheeler = false;

    // this.SlotWeekDaytime1 = "00:00";
    this.SlotWeekDaytime3 = "00:00";
    this.SlotWeekDaytime5 = "00:00";
    this.SlotWeekDaytime7 = "00:00";
    this.SlotWeekDaytime9 = "00:00";
    this.SlotWeekDaytime11 = "00:00";
    this.SlotWeekDaytime13 = "00:00";
    this.SlotWeekDaytime4 = "00:00";
    this.SlotWeekDaytime2 = "00:00";
    this.SlotWeekDaytime6 = "00:00";
    this.SlotWeekDaytime8 = "00:00";
    this.SlotWeekDaytime10 = "00:00";
    this.SlotWeekDaytime12 = "00:00";
    this.SlotWeekDaytime14 = "00:00";
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
      this.SlotWeekDaytime3 = "00:00";
      this.SlotWeekDaytime5 = "00:00";
      this.SlotWeekDaytime7 = "00:00";
      this.SlotWeekDaytime9 = "00:00";
      this.SlotWeekDaytime11 = "00:00";
      this.SlotWeekDaytime13 = "00:00";
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

      this.SlotWeekDaytime4 = "00:00";
      this.SlotWeekDaytime2 = "00:00";
      this.SlotWeekDaytime6 = "00:00";
      this.SlotWeekDaytime8 = "00:00";
      this.SlotWeekDaytime10 = "00:00";
      this.SlotWeekDaytime12 = "00:00";
      this.SlotWeekDaytime14 = "00:00";
    }
  }
  parkingCreation() {
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

  parkingslotCreation() {
    if (this.forboth == true) {
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
      });
    }
    else {
      let data = {
        "_id": this.parking_Details._id,
        "parking_details_bike_price_day": this.parking_details_bike_price_day,
        "parking_details_car_price_day": this.parking_details_car_price_day,
        "parking_details_car_price_spe_day": this.parking_details_car_price_spe_day,
        "parking_details_bike_price_spe_day": this.parking_details_bike_price_spe_day,
        "parking_details_update_status": "Updated",
        "parking_details_price_bike_type": this.fortwowheeler,
        "parking_details_price_both_type": false,
        "parking_details_price_car_type": this.forwfourwheeler,
      }
      console.log(data)
      this._api.Parking_owner_edit(data).subscribe((res: any) => {
        console.log(res)
        alert(res.Message);
      });
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
    this.newInclude = { "Start_time": this.SlotWeekDaytime1, "End_time": this.SlotWeekDaytime2, "Price": this.amount };
    this.Included_new.push(this.newInclude);
    console.log(this.Included_new);
    this.SlotWeekDaytime1 = "00:00";
    this.SlotWeekDaytime2 = "00:00";
    this.amount = "";
    this.parking_details_bike_price_day[0].Timings = this.Included_new;
  }
  Bikeremovemonday(i) {
    this.Included_new.splice(i, 1);
    this.parking_details_bike_price_day[0].Timings = this.Included_new;
  }
  BikeAddtuesday() {
    this.newInclude1 = { "Start_time": this.SlotWeekDaytime3, "End_time": this.SlotWeekDaytime4, "Price": this.amount1 };
    this.Included_new1.push(this.newInclude1);
    console.log(this.Included_new1);
    this.SlotWeekDaytime3 = "00:00";
    this.SlotWeekDaytime4 = "00:00";
    this.amount1 = "";
    this.parking_details_bike_price_day[1].Timings = this.Included_new1;

  }
  Bikeremovetuesday(i) {
    this.Included_new1.splice(i, 1);
    this.parking_details_bike_price_day[1].Timings = this.Included_new1;
  }
  addwedday() {
    this.newInclude2 = { "Start_time": this.SlotWeekDaytime5, "End_time": this.SlotWeekDaytime6, "Price": this.amount2 };
    this.Included_new2.push(this.newInclude2);
    console.log(this.Included_new2);
    this.SlotWeekDaytime5 = "00:00";
    this.SlotWeekDaytime6 = "00:00";
    this.amount2 = "";
    this.parking_details_bike_price_day[2].Timings = this.Included_new2;
  }
  deletewedsday(i) {
    this.Included_new2.splice(i, 1);
    this.parking_details_bike_price_day[2].Timings = this.Included_new2;
  }
  addthursday() {
    this.newInclude3 = { "Start_time": this.SlotWeekDaytime7, "End_time": this.SlotWeekDaytime8, "Price": this.amount3 };
    this.Included_new3.push(this.newInclude3);
    console.log(this.Included_new3);
    this.SlotWeekDaytime7 = "00:00";
    this.SlotWeekDaytime8 = "00:00";
    this.amount3 = "";
    this.parking_details_bike_price_day[3].Timings = this.Included_new3;
  }
  deletethursday(i) {
    this.Included_new3.splice(i, 1);
    this.parking_details_bike_price_day[3].Timings = this.Included_new3;
  }
  addfriday() {
    this.newInclude4 = { "Start_time": this.SlotWeekDaytime9, "End_time": this.SlotWeekDaytime10, "Price": this.amount4 };
    this.Included_new4.push(this.newInclude4);
    console.log(this.Included_new4);
    this.SlotWeekDaytime9 = "00:00";
    this.SlotWeekDaytime10 = "00:00";
    this.amount4 = "";
    this.parking_details_bike_price_day[4].Timings = this.Included_new4;

  }
  deletefriday(i) {
    this.Included_new4.splice(i, 1);
    this.parking_details_bike_price_day[4].Timings = this.Included_new4;
  }
  addsaturday() {
    this.newInclude5 = { "Start_time": this.SlotWeekDaytime11, "End_time": this.SlotWeekDaytime12, "Price": this.amount5 };
    this.Included_new5.push(this.newInclude5);
    console.log(this.Included_new5);
    this.SlotWeekDaytime11 = "00:00";
    this.SlotWeekDaytime12 = "00:00";
    this.amount5 = "";
    this.parking_details_bike_price_day[5].Timings = this.Included_new5;
  }
  deletesaturday(i) {
    this.Included_new5.splice(i, 1);
    this.parking_details_bike_price_day[5].Timings = this.Included_new5;
  }
  addsunday() {
    this.newInclude6 = { "Start_time": this.SlotWeekDaytime13, "End_time": this.SlotWeekDaytime14, "Price": this.amount6 };
    this.Included_new6.push(this.newInclude6);
    console.log(this.Included_new6);
    this.SlotWeekDaytime13 = "00:00";
    this.SlotWeekDaytime14 = "00:00";
    this.amount6 = "";
    this.parking_details_bike_price_day[6].Timings = this.Included_new6;
  }
  deletesunday(i) {
    this.Included_new6.splice(i, 1);
    this.parking_details_bike_price_day[6].Timings = this.Included_new6;
  }

  addweekdays2() {
    this.newInclude7 = { "dates": this.bikeslotdate1, "Start_time": this.SlotWeekDaytime16, "End_time": this.SlotWeekDaytime17, "Price": this.amount7 };
    this.parking_details_bike_price_spe_day.push(this.newInclude7);
    console.log(this.parking_details_bike_price_spe_day);
    this.SlotWeekDaytime16 = "00:00";
    this.SlotWeekDaytime17 = "00:00";
    this.amount7 = "";

  }
  deleteaddweekdays2(i) {
    this.parking_details_bike_price_spe_day.splice(i, 1);
  }


  // Bike-------


  // Car------
  carAddmonday() {
    this.newIncludee = { "Start_time": this.SlotWeekDaytime18, "End_time": this.SlotWeekDaytime19, "Price": this.amount8 };
    this.Included_newe.push(this.newIncludee);
    console.log(this.Included_newe);
    this.SlotWeekDaytime18 = "00:00";
    this.SlotWeekDaytime19 = "00:00";
    this.amount8 = "";
    this.parking_details_car_price_day[0].Timings = this.Included_newe;
  }
  carremovemonday(i) {
    this.Included_newe.splice(i, 1);
    this.parking_details_car_price_day[0].Timings = this.Included_newe;
  }
  carAddtuesday() {
    this.newIncludee1 = { "Start_time": this.SlotWeekDaytime20, "End_time": this.SlotWeekDaytime21, "Price": this.amount9 };
    this.Included_newe1.push(this.newIncludee1);
    console.log(this.Included_newe1);
    this.SlotWeekDaytime20 = "00:00";
    this.SlotWeekDaytime21 = "00:00";
    this.amount9 = "";
    this.parking_details_car_price_day[1].Timings = this.Included_newe1;

  }
  carremovetuesday(i) {
    this.Included_newe1.splice(i, 1);
    this.parking_details_car_price_day[1].Timings = this.Included_newe1;
  }
  addweddayc() {
    this.newIncludee2 = { "Start_time": this.SlotWeekDaytime22, "End_time": this.SlotWeekDaytime23, "Price": this.amount10 };
    this.Included_newe2.push(this.newIncludee2);
    console.log(this.Included_newe2);
    this.SlotWeekDaytime22 = "00:00";
    this.SlotWeekDaytime23 = "00:00";
    this.amount10 = "";
    this.parking_details_car_price_day[2].Timings = this.Included_newe2;
  }
  deletewedsdayc(i) {
    this.Included_newe2.splice(i, 1);
    this.parking_details_car_price_day[2].Timings = this.Included_newe2;
  }
  addthursdayc() {
    this.newIncludee3 = { "Start_time": this.SlotWeekDaytime24, "End_time": this.SlotWeekDaytime25, "Price": this.amount11 };
    this.Included_newe3.push(this.newIncludee3);
    console.log(this.Included_newe3);
    this.SlotWeekDaytime24 = "00:00";
    this.SlotWeekDaytime25 = "00:00";
    this.amount11 = "";
    this.parking_details_car_price_day[3].Timings = this.Included_newe3;
  }
  deletethursdayc(i) {
    this.Included_newe3.splice(i, 1);
    this.parking_details_car_price_day[3].Timings = this.Included_newe3;
  }
  addfridayc() {
    this.newIncludee4 = { "Start_time": this.SlotWeekDaytime26, "End_time": this.SlotWeekDaytime27, "Price": this.amount12 };
    this.Included_newe4.push(this.newIncludee4);
    console.log(this.Included_newe4);
    this.SlotWeekDaytime26 = "00:00";
    this.SlotWeekDaytime27 = "00:00";
    this.amount12 = "";
    this.parking_details_car_price_day[4].Timings = this.Included_newe4;

  }
  deletefridayc(i) {
    this.Included_newe4.splice(i, 1);
    this.parking_details_car_price_day[4].Timings = this.Included_newe4;
  }
  addsaturdayc() {
    this.newIncludee5 = { "Start_time": this.SlotWeekDaytime28, "End_time": this.SlotWeekDaytime29, "Price": this.amount13 };
    this.Included_newe5.push(this.newIncludee5);
    console.log(this.Included_new5);
    this.SlotWeekDaytime28 = "00:00";
    this.SlotWeekDaytime29 = "00:00";
    this.amount13 = "";
    this.parking_details_car_price_day[5].Timings = this.Included_newe5;
  }
  deletesaturdayc(i) {
    this.Included_newe5.splice(i, 1);
    this.parking_details_car_price_day[5].Timings = this.Included_newe5;
  }
  addsundayc() {
    this.newIncludee6 = { "Start_time": this.SlotWeekDaytime30, "End_time": this.SlotWeekDaytime31, "Price": this.amount14 };
    this.Included_newe6.push(this.newIncludee6);
    console.log(this.Included_new6);
    this.SlotWeekDaytime30 = "00:00";
    this.SlotWeekDaytime31 = "00:00";
    this.amount14 = "";
    this.parking_details_car_price_day[6].Timings = this.Included_newe6;
  }
  deletesundayc(i) {
    this.Included_newe6.splice(i, 1);
    this.parking_details_car_price_day[6].Timings = this.Included_newe6;
  }

  addweekdaysc2() {
    this.newIncludee7 = { "dates": this.slotdatee1, "Start_time": this.SlotWeekDaytime32, "End_time": this.SlotWeekDaytime33, "Price": this.amount15 };
    this.parking_details_car_price_spe_day.push(this.newIncludee7);
    console.log(this.parking_details_car_price_spe_day);
    this.SlotWeekDaytime32 = "00:00";
    this.SlotWeekDaytime33 = "00:00";
    this.amount15 = "";

  }
  deleteaddweekdaysc2(i) {
    this.parking_details_car_price_spe_day.splice(i, 1);
  }

  // Car----

  //  Both----

  carAddmondayboth() {
    this.newIncludeee = { "Start_time": this.SlotWeekDaytime35, "End_time": this.SlotWeekDaytime36, "Price": this.amount17 };
    this.Included_newee.push(this.newIncludeee);
    console.log(this.Included_newee);
    this.SlotWeekDaytime35 = "00:00";
    this.SlotWeekDaytime36 = "00:00";
    this.amount17 = "";
    this.both_slot_week[0].Timings = this.Included_newee;
  }
  carremovemondayboth(i) {
    this.Included_newee.splice(i, 1);
    this.both_slot_week[0].Timings = this.Included_newee;
  }
  carAddtuesdayboth() {
    this.newIncludeee1 = { "Start_time": this.SlotWeekDaytime37, "End_time": this.SlotWeekDaytime38, "Price": this.amount18 };
    this.Included_newee1.push(this.newIncludeee1);
    console.log(this.Included_newee1);
    this.SlotWeekDaytime37 = "00:00";
    this.SlotWeekDaytime38 = "00:00";
    this.amount18 = "";
    this.both_slot_week[1].Timings = this.Included_newee1;

  }
  carremovetuesdayboth(i) {
    this.Included_newee1.splice(i, 1);
    this.both_slot_week[1].Timings = this.Included_newee1;
  }
  addweddaycboth() {
    this.newIncludeee2 = { "Start_time": this.SlotWeekDaytime39, "End_time": this.SlotWeekDaytime40, "Price": this.amount19 };
    this.Included_newee2.push(this.newIncludeee2);
    console.log(this.Included_newee2);
    this.SlotWeekDaytime39 = "00:00";
    this.SlotWeekDaytime40 = "00:00";
    this.amount19 = "";
    this.both_slot_week[2].Timings = this.Included_newee2;
  }
  deletewedsdaycboth(i) {
    this.Included_newee2.splice(i, 1);
    this.both_slot_week[2].Timings = this.Included_newee2;
  }
  addthursdaycboth() {
    this.newIncludeee3 = { "Start_time": this.SlotWeekDaytime41, "End_time": this.SlotWeekDaytime42, "Price": this.amount20 };
    this.Included_newee3.push(this.newIncludeee3);
    console.log(this.Included_newee3);
    this.SlotWeekDaytime41 = "00:00";
    this.SlotWeekDaytime42 = "00:00";
    this.amount20 = "";
    this.both_slot_week[3].Timings = this.Included_newee3;
  }
  deletethursdaycboth(i) {
    this.Included_newee3.splice(i, 1);
    this.both_slot_week[3].Timings = this.Included_newee3;
  }
  addfridaycboth() {
    this.newIncludeee4 = { "Start_time": this.SlotWeekDaytime43, "End_time": this.SlotWeekDaytime44, "Price": this.amount21 };
    this.Included_newee4.push(this.newIncludeee4);
    console.log(this.Included_newee4);
    this.SlotWeekDaytime43 = "00:00";
    this.SlotWeekDaytime44 = "00:00";
    this.amount21 = "";
    this.both_slot_week[4].Timings = this.Included_newee4;

  }
  deletefridaycboth(i) {
    this.Included_newee4.splice(i, 1);
    this.both_slot_week[4].Timings = this.Included_newee4;
  }
  addsaturdaycboth() {
    this.newIncludeee5 = { "Start_time": this.SlotWeekDaytime45, "End_time": this.SlotWeekDaytime46, "Price": this.amount22 };
    this.Included_newee5.push(this.newIncludeee5);
    console.log(this.Included_newee5);
    this.SlotWeekDaytime45 = "00:00";
    this.SlotWeekDaytime46 = "00:00";
    this.amount22 = "";
    this.both_slot_week[5].Timings = this.Included_newee5;
  }
  deletesaturdaycboth(i) {
    this.Included_newee5.splice(i, 1);
    this.both_slot_week[5].Timings = this.Included_newee5;
  }
  addsundaycboth() {
    this.newIncludee6 = { "Start_time": this.SlotWeekDaytime47, "End_time": this.SlotWeekDaytime48, "Price": this.amount23 };
    this.Included_newee6.push(this.newIncludee6);
    console.log(this.Included_newee6);
    this.SlotWeekDaytime47 = "00:00";
    this.SlotWeekDaytime48 = "00:00";
    this.amount23 = "";
    this.both_slot_week[6].Timings = this.Included_newee6;
  }
  deletesundaycboth(i) {
    this.Included_newee6.splice(i, 1);
    this.both_slot_week[6].Timings = this.Included_newee6;
  }

  addweekdaysc2both() {
    this.newIncludeee7 = { "dates": this.slotdateee1, "Start_time": this.SlotWeekDaytime49, "End_time": this.SlotWeekDaytime50, "Price": this.amount24 };
    this.both_slot_per_day.push(this.newIncludeee7);
    console.log(this.both_slot_per_day);
    this.SlotWeekDaytime49 = "00:00";
    this.SlotWeekDaytime50 = "00:00";
    this.amount24 = "";

  }
  deleteaddweekdaysc2both(i) {
    this.both_slot_per_day.splice(i, 1);
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
    this.http.post('http://3.101.31.129:3000/upload', fd)
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
    this.http.post('http://3.101.31.129:3000/upload', fd)
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
    this.http.post('http://3.101.31.129:3000/upload', fd)
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

}
