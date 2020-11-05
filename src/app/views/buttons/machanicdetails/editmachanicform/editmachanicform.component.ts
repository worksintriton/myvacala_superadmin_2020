import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';
import { ValidatorService } from '../../../../valitation.service'

@Component({
  selector: 'app-editmachanicform',
  templateUrl: './editmachanicform.component.html',
  styleUrls: ['./editmachanicform.component.scss']
})
export class EditmachanicformComponent implements OnInit {
  selectedfile1: any;
  bikeservice: boolean;
  carservice: boolean;
  First_name: any;
  Primary_Contact: any;
  Owner_Residence_Address: any;
  Last_Name: any;
  Secondary_Contact: any;
  Owner_Permanent_Address: any;
  Owner_Pan_Card_Number: any;
  Owner_Aadhar_Number: any;
  Workshop_Name: any;
  Latitude: any;
  Longitude: any;
  Workshop_Registration_Certificate: any;
  Map_Link: any;
  Workshop_Address: any;
  Workshop_Registration_Number: any;
  Workshop_Gst_Number: any;
  Workshop_Pan_card_Number: any;
  GST_Address: any;
  Workshop_service_Type: any;
  Workshop_Car_Service_Advisor_Name: any;
  Workshop_Car_Service_Advisor_Contact: any;
  Workshop_Bike_Service_Advisor_Name: any;
  Workshop_Bike_Service_Advisor_Contact: any;
  Owner_Pan_Card: any;
  Owner_Aadhar_Card: any;
  Workshop_GST_Certificate: any;
  Workshop_Pan_Card: any;
  valid: boolean = false;
  phone_err1: any;
  phone_err2: any;
  phone_err3: any;
  phone_err4: any;
  mechanic: any;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    private _val: ValidatorService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this.mechanic = this.getFromLocal('mechanic_single');
    console.log(this.mechanic)
    this.First_name = this.mechanic.First_Name;
    this.Last_Name = this.mechanic.Last_Name;
    this.Primary_Contact = this.mechanic.Primary_Contact.toString();
    this.Secondary_Contact = this.mechanic.Secondary_Contact.toString();
    this.Owner_Residence_Address = this.mechanic.Owner_Residence_Address;
    this.Owner_Permanent_Address = this.mechanic.Owner_Permanent_Address;
    this.Owner_Pan_Card_Number = this.mechanic.Owner_Pan_Card_Number;
    this.Owner_Pan_Card = this.mechanic.Owner_Pan_Card_Document;
    this.Owner_Aadhar_Number = this.mechanic.Owner_Adhaar_Card_Number;
    this.Owner_Aadhar_Card = this.mechanic.Owner_Adhaar_Card_Document;
    this.Latitude = this.mechanic.loc_lat;
    this.Longitude = this.mechanic.loc_long;
    this.Workshop_Name = this.mechanic.Work_Shop_Name;
    this.Workshop_Address = this.mechanic.Work_Shop_Address;
    this.Workshop_Registration_Certificate = this.mechanic.Workshop_Registration_Certificate;
    this.Workshop_Registration_Number = this.mechanic.Workshop_Registration_Number;
    this.Workshop_Gst_Number = this.mechanic.Workshop_GST_Number;
    this.Workshop_GST_Certificate = this.mechanic.Workshop_GST_Certificate;
    this.Workshop_Pan_card_Number = this.mechanic.Work_Shop_Pan_Card_Number;
    this.Workshop_Pan_Card = this.mechanic.Workshop_Pan_Card_Document;
    this.GST_Address = this.mechanic.GST_Address;
    this.Map_Link = this.mechanic.Map_Link;
    this.Workshop_service_Type = this.mechanic.Workshop_service_Type;
    this.Workshop_Bike_Service_Advisor_Contact = this.mechanic.Workshop_Bike_Service_Advisor_Contact.toString();
    this.Workshop_Bike_Service_Advisor_Name = this.mechanic.Workshop_Bike_Service_Advisor_Name;
    this.Workshop_Car_Service_Advisor_Contact = this.mechanic.Workshop_Car_Service_Advisor_Contact.toString();
    this.Workshop_Car_Service_Advisor_Name = this.mechanic.Workshop_Car_Service_Advisor_Name;
    if (this.Workshop_service_Type == "Car") {
      this.bikeservice = false;
      this.carservice = true;
    }
    if (this.Workshop_service_Type == "Bike") {
      this.bikeservice = true;
      this.carservice = false;
    }
    if (this.Workshop_service_Type == "Both") {
      this.bikeservice = true;
      this.carservice = true;
      ;
    }

    this.phone1();
    this.phone2();
    this.phone3();
    this.phone4();


  }
  selectservicetype(event) {
    console.log(event.target.value);
    if (event.target.value == "Car") {
      this.carservice = true;
      this.bikeservice = false;
    }
    if (event.target.value == "Bike") {
      this.bikeservice = true;
      this.carservice = false;
    }
    if (event.target.value == "Both") {
      this.bikeservice = true;
      this.carservice = true;
    }
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
        this.Owner_Pan_Card = res.Data;
        console.log(this.Owner_Pan_Card);
      });
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
        this.Owner_Aadhar_Card = res.Data;
        console.log(this.Owner_Aadhar_Card);
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
        this.Workshop_Registration_Certificate = res.Data;
        console.log(this.Workshop_Registration_Certificate);
      });
  }
  fileupload4(event) {
    this.selectedfile1 = event.target.files[0];
    this.addfiles4();
  }

  addfiles4() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedfile1, this.selectedfile1.name);
    this.http.post('https://myvacala.com/api/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.Workshop_GST_Certificate = res.Data;
        console.log(this.Workshop_GST_Certificate);
      });
  }

  fileupload5(event) {
    this.selectedfile1 = event.target.files[0];
    this.addfiles5();
  }

  addfiles5() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedfile1, this.selectedfile1.name);
    this.http.post('https://myvacala.com/api/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.Workshop_Pan_Card = res.Data;
        console.log(this.Workshop_Pan_Card);
      });
  }
  validation() {
    if ((this.First_name != undefined && this.First_name != '') &&
      (this.Last_Name != undefined && this.Last_Name != '') &&
      (this.Primary_Contact != undefined && this.Primary_Contact != '') &&
      (this.Secondary_Contact != undefined && this.Secondary_Contact != '') &&
      (this.Owner_Residence_Address != undefined && this.Owner_Residence_Address != '') &&
      (this.Owner_Permanent_Address != undefined && this.Owner_Permanent_Address != '') &&
      (this.Owner_Pan_Card_Number != undefined && this.Owner_Pan_Card_Number != '') &&
      (this.Owner_Pan_Card != undefined && this.Owner_Pan_Card != '') &&
      (this.Owner_Aadhar_Number != undefined && this.Owner_Aadhar_Number != '') &&
      (this.Owner_Aadhar_Card != undefined && this.Owner_Aadhar_Card != '') &&
      (this.Latitude != undefined && this.Latitude != '') &&
      (this.Longitude != undefined && this.Longitude != '') &&
      (this.Workshop_Name != undefined && this.Workshop_Name != '') &&
      (this.Workshop_Address != undefined && this.Workshop_Address != '') &&
      (this.Workshop_Registration_Certificate != undefined && this.Workshop_Registration_Certificate != '') &&
      (this.Workshop_Registration_Number != undefined && this.Workshop_Registration_Number != '') &&
      (this.Workshop_Gst_Number != undefined && this.Workshop_Gst_Number != '') &&
      (this.Workshop_GST_Certificate != undefined && this.Workshop_GST_Certificate != '') &&
      (this.Workshop_Pan_card_Number != undefined && this.Workshop_Pan_card_Number != '') &&
      (this.Workshop_Pan_Card != undefined && this.Workshop_Pan_Card != '') &&
      (this.GST_Address != undefined && this.GST_Address != '') &&
      (this.Map_Link != undefined && this.Map_Link != '') &&
      (this.Workshop_service_Type != undefined && this.Workshop_service_Type != '') && this.phone_err1 == false && this.phone_err2 == false) {
      if (this.Workshop_service_Type == "Both") {
        if ((this.Workshop_Bike_Service_Advisor_Contact != undefined && this.Workshop_Bike_Service_Advisor_Contact != '') &&
          (this.Workshop_Bike_Service_Advisor_Name != undefined && this.Workshop_Bike_Service_Advisor_Name != '') &&
          (this.Workshop_Car_Service_Advisor_Contact != undefined && this.Workshop_Car_Service_Advisor_Contact != '') &&
          (this.Workshop_Car_Service_Advisor_Name != undefined && this.Workshop_Car_Service_Advisor_Name != '') && this.phone_err3 == false && this.phone_err4 == false) {
          this.valid = true;
        }
        else {
          this.valid = false;
        }
      }
      if (this.Workshop_service_Type == "Bike") {
        if ((this.Workshop_Bike_Service_Advisor_Contact != undefined && this.Workshop_Bike_Service_Advisor_Contact != '') &&
          (this.Workshop_Bike_Service_Advisor_Name != undefined && this.Workshop_Bike_Service_Advisor_Name != '') && this.phone_err4 == false) {
          this.valid = true;
        }
        else {
          this.valid = false;
        }
      }
      if (this.Workshop_service_Type == "Car") {
        if (
          (this.Workshop_Car_Service_Advisor_Contact != undefined && this.Workshop_Car_Service_Advisor_Contact != '') &&
          (this.Workshop_Car_Service_Advisor_Name != undefined && this.Workshop_Car_Service_Advisor_Name != '') && this.phone_err3 == false) {
          this.valid = true;
        }
        else {
          this.valid = false;
        }
      }

    }
    else {
      this.valid = false;
    }
  }
  create() {
    this.validation();
    if (this.valid == true) {
      let data = {
        "_id": this.mechanic._id,
        "First_Name": this.First_name,
        "Last_Name": this.Last_Name,
        "Primary_Contact": this.Primary_Contact,
        "Secondary_Contact": this.Secondary_Contact,
        "Owner_Residence_Address": this.Owner_Residence_Address,
        "Owner_Permanent_Address": this.Owner_Permanent_Address,
        "Owner_Pan_Card_Number": this.Owner_Pan_Card_Number,
        "Owner_Pan_Card_Document": this.Owner_Pan_Card,
        "Owner_Adhaar_Card_Number": this.Owner_Aadhar_Number,
        "Owner_Adhaar_Card_Document": this.Owner_Aadhar_Card,
        "loc_lat": +this.Latitude,
        "loc_long": +this.Longitude,
        "Work_Shop_Name": this.Workshop_Name,
        "Work_Shop_Address": this.Workshop_Address,
        "Workshop_Registration_Certificate": this.Workshop_Registration_Certificate,
        "Workshop_Registration_Number": this.Workshop_Registration_Number,
        "Workshop_GST_Number": this.Workshop_Gst_Number,
        "Workshop_GST_Certificate": this.Workshop_GST_Certificate,
        "Work_Shop_Pan_Card_Number": this.Workshop_Pan_card_Number,
        "Workshop_Pan_Card_Document": this.Workshop_Pan_Card,
        "GST_Address": this.GST_Address,
        "Map_Link": this.Map_Link,
        "Workshop_service_Type": this.Workshop_service_Type,
        "Workshop_Bike_Service_Advisor_Contact": this.Workshop_Bike_Service_Advisor_Contact,
        "Workshop_Bike_Service_Advisor_Name": this.Workshop_Bike_Service_Advisor_Name,
        "Workshop_Car_Service_Advisor_Contact": this.Workshop_Car_Service_Advisor_Contact,
        "Workshop_Car_Service_Advisor_Name": this.Workshop_Car_Service_Advisor_Name
      }
      console.log(data)
      this._api.mechanic_edit(data).subscribe((res: any) => {
        console.log(res)
        if (res.Code == 200) {
          alert("Mechanic details updated successfully");
          this.reset();
          this.router.navigate(['superadmin/master/list_mechanic']);
        }

      });
    }
    else {
      alert("Fill all the fields with valid data")
    }


  }
  cancel(){
    this.router.navigate(['superadmin/master/list_mechanic']);
  }


  reset() {
    this.First_name = undefined;
    this.Last_Name = undefined;
    this.Primary_Contact = undefined;
    this.Secondary_Contact = undefined;
    this.Owner_Residence_Address = undefined;
    this.Owner_Permanent_Address = undefined;
    this.Owner_Pan_Card_Number = undefined;
    this.Owner_Pan_Card = undefined;
    this.Owner_Aadhar_Number = undefined;
    this.Owner_Aadhar_Card = undefined;
    this.Latitude = undefined;
    this.Longitude = undefined;
    this.Workshop_Name = undefined;
    this.Workshop_Address = undefined;
    this.Workshop_Registration_Certificate = undefined;
    this.Workshop_Registration_Number = undefined;
    this.Workshop_Gst_Number = undefined;
    this.Workshop_GST_Certificate = undefined;
    this.Workshop_Pan_card_Number = undefined;
    this.Workshop_Pan_Card = undefined;
    this.GST_Address = undefined;
    this.Map_Link = undefined;
    this.Workshop_service_Type = undefined;
    this.Workshop_Bike_Service_Advisor_Contact = undefined;
    this.Workshop_Bike_Service_Advisor_Name = undefined;
    this.Workshop_Car_Service_Advisor_Contact = undefined;
    this.Workshop_Car_Service_Advisor_Name = undefined;
  }

  _keyPress(event: any) {
    const pattern = /[0-9\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }
  }
  phone1() {
    console.log(this.Primary_Contact)
    this.phone_err1 = this._val.mobileValidator(this.Primary_Contact)
  }
  phone2() {
    console.log(this.Secondary_Contact)
    this.phone_err2 = this._val.mobileValidator(this.Secondary_Contact)
  }
  phone3() {
    console.log(this.Workshop_Car_Service_Advisor_Contact)
    this.phone_err3 = this._val.mobileValidator(this.Workshop_Car_Service_Advisor_Contact)
  }
  phone4() {
    console.log(this.Workshop_Bike_Service_Advisor_Contact)
    this.phone_err4 = this._val.mobileValidator(this.Workshop_Bike_Service_Advisor_Contact)
  }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
}

