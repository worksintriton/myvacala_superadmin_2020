import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-viewindividualbooking',
  templateUrl: './viewindividualbooking.component.html',
  styleUrls: ['./viewindividualbooking.component.scss']
})
export class ViewindividualbookingComponent implements OnInit {
  BookingId: any;
  mobile: any;
  vehicle: any;
  cname: any;
  vehicletype: any;
  vehicle_list: any;
  WorkshopId: any =undefined;
  FinalPayable: any;
  selectedimgae: any;
  Pic: any;
  Thmp_list: any = [];
  selectedimgae1: any;
  Pic1: any;
  Thmp_list1: any = [];
  WorkshopName: any;
  WorkshopLocation: any;
  BookingStatus: any;
  mechanic_list: any = [];
  id_list: any = [];

  config = {
    displayKey: "description", //if objects array passed which key to be displayed defaults to description
    search: true, //true/false for the search functionlity defaults to false,
    height: '250px', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder: 'Select', // text to be displayed when no item is selected defaults to Select,
    customComparator: () => { },// a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    limitTo: 0, // number thats limits the no of options displayed in the UI (if zero, options will not be limited)
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder: 'Search',// label thats displayed in search input,
    searchOnKey: 'name',// key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
  }

  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this.vehicle_list = this.getFromLocal('bookingDetails');
    this.BookingId = this.vehicle_list.Booking_id;
    this.cname = this.vehicle_list.Customer_Name;
    this.mobile = this.vehicle_list.Customer_Phone;
    this.vehicle = this.vehicle_list.Vehicle_No;
    this.vehicletype = this.vehicle_list.Vehicle_Type;
    console.log(this.vehicle_list);
    this.Thmp_list = this.vehicle_list.Customer_Invoice;
    this.FinalPayable = this.vehicle_list.Final_bill_payed
    this.Thmp_list1 = this.vehicle_list.Job_Card;
    this.WorkshopLocation = this.vehicle_list.Workshop_Location;
    this.WorkshopName = this.vehicle_list.Workshop_Name
    this.BookingStatus = this.vehicle_list.Booking_Status;
    this._api.mechanicList().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.mechanic_list = response.Data;
        console.log(this.mechanic_list);
        this.id_list = [];
        for (let i = 0; i < this.mechanic_list.length; i++) {
          this.id_list.push(this.mechanic_list[i].Mechanic_id)
        }
      }
    );
  }
  back_to_page() {

    this.router.navigate(['superadmin/master/View_MechanicBookingList']);
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }


  fileupload(event) {
    this.selectedimgae = event.target.files[0];
    this.addfiles();
  }

  addfiles() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae, this.selectedimgae.name);
    this.http.post('http://3.101.31.129:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.Pic = res.Data;
      });
  }

  addimg() {
    if (this.Pic != undefined) {
      this.Thmp_list.push({ "title": "Document", "doc_link": this.Pic });
      this.selectedimgae = undefined;
      this.Pic = undefined;
      console.log(this.Thmp_list);
    }
    else {
      alert("Please choose a image")
    }
  }
  deleteimg(dynamic, i) {
    console.log(dynamic, i, this.Thmp_list)
    for (let b = 0; b < this.Thmp_list.length; b++) {
      if (this.Thmp_list[b] == dynamic) {
        //this.Location_list[i].status="true";
        this.Thmp_list.splice(b, 1);
      }
      console.log(this.Thmp_list);
    }
  }


  fileupload1(event) {
    this.selectedimgae1 = event.target.files[0];
    this.addfiles1();
  }

  addfiles1() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae1, this.selectedimgae1.name);
    this.http.post('http://3.101.31.129:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.Pic1 = res.Data;
      });
  }

  addimg1() {
    if (this.Pic1 != undefined) {
      this.Thmp_list1.push({ "title": "Document", "doc_link": this.Pic1 });
      this.selectedimgae1 = undefined;
      this.Pic1 = undefined
      console.log(this.Thmp_list1);
    }
    else {
      alert("Please choose a image")
    }
  }
  deleteimg1(dynamic, i) {
    console.log(dynamic, i, this.Thmp_list1)
    for (let b = 0; b < this.Thmp_list1.length; b++) {
      if (this.Thmp_list1[b] == dynamic) {
        //this.Location_list[i].status="true";
        this.Thmp_list1.splice(b, 1);
      }
      console.log(this.Thmp_list1);
    }
  }
  edit() {
    if ((this.FinalPayable != undefined && this.FinalPayable != '') && this.Thmp_list.length > 0 && this.Thmp_list1.length > 0 && (this.WorkshopName != undefined && this.WorkshopName != '') && (this.WorkshopLocation != undefined && this.WorkshopLocation != '') && this.BookingStatus != undefined) {

      // (this.WorkshopId != undefined && this.WorkshopId != '') 
      let data = {
        "Booking_id": this.vehicle_list.Booking_id,
        // "Status_history_text": [{ "title": "Teseing", "date": "23-20-2034 Thus morning 10:20 am" }],
        // "Track_order_text": "order is completed,Vehicle is Dropped",
        "Customer_Invoice": this.Thmp_list,
        "Final_bill_payed": this.FinalPayable,
        "Job_Card": this.Thmp_list1,
        "Workshop_Location": this.WorkshopLocation,
        "Workshop_Name": this.WorkshopName,
        "Booking_Status": this.BookingStatus

      }
      console.log(data);
      this._api.booking_edit(data).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code == 422) {
            alert(response.Message);
          } else {
            alert(response.Message);
            this.router.navigate(['/superadmin/master/View_MechanicBookingList'])
            // this.ngOnInit();
          }
        }
      );
    }
    else {
      alert("Please fill all the fields")
    }
  }
  get_mech() {
    console.log(this.WorkshopId);
    if(this.WorkshopId !=undefined){
      let id = {
        "Mechanic_id": this.WorkshopId
      }
      this._api.mechanic_byid(id).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code == 200) {
            this.WorkshopLocation = response.Data[0].Work_Shop_Address;
            this.WorkshopName = response.Data[0].Work_Shop_Name;
          }
          else {
            alert(response.Message)
          }
  
        }
      );
    }
  
  }
}
