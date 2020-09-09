import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';
import { ValidatorService } from '../../../../valitation.service'
@Component({
  selector: 'app-addemployees',
  templateUrl: './addemployees.component.html',
  styleUrls: ['./addemployees.component.scss']
})
export class AddemployeesComponent implements OnInit {
  emp_list: any;
  designation: string;
  FName: string;
  empId: any;
  EmailId: any;
  PhoneNumber: any;
  Temporaryaddress: any;
  NomineeName: any;
  LName: string;
  password: any;
  AlterativeNumber: any;
  Permanentaddress: any;
  MobileNumber: any;
  Finance: any;
  CCTeam: any;
  interests: any = [];
  selectedlocations: any = [];
  selectedpermissions: any = [];
  isDisable = true;
  isParking = false;
  EmployeeList: any;
  servicetype: any;
  servicetype1: any;
  sector: any;
  locations: any;
  permisssion: any;
  forcreate: any;
  employeeId: any;
  Finance_se: boolean;
  ListofEmployees_se: boolean;
  AddEmployee_se: boolean;
  RoleManagement_se: boolean;
  VendorOnbordation_se: boolean;
  VendorList_se: boolean;
  Operations_se: boolean;
  AppFeatures_se: boolean;
  CCTeam_se: boolean;
  Sector_se: any = [];
  Mysoure_se: any;
  Hosur_se: any;
  Bengalore_se: any;
  Karnadaga_se: any;
  Andra_se: any;
  Trichy_se: any;
  Coimbatoure_se: any;
  Chennai_se: any;
  EmployeePanCard: any;
  EmployeeAadharCard: any;
  EmployeePanCard_file: any;
  EmployeeAadharCard_file: any;
  NomineePanCard: any;
  NomineeAadharCard: any;
  NomineePanCard_file: any;
  NomineeAadharCard_file: any;
  NomineeAddress: any;
  selectedfile1: any;
  selectedfile2: any;
  selectedfile3: any;
  selectedfile4: any;
  Location_list: any = [];
  validate: any;
  emailerror: any;
  phone_err1: any;
  phone_err2: any;
  phone_err3: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    private _api: ApiService,
    private _val: ValidatorService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    this.selectedpermissions = [
      {
        "MechanicBooking_Create": false,
        "MechanicBooking_viewlist": false,
        "MechanicBooking_Edit": false,
        "MechanicBooking_Excel": false,
        "MechanicBooking_Share": false,
        "MechanicReg_Create": false,
        "MechanicReg_ViewList": false,
        "MechanicReg_Edit": false,
        "MechanicReg_Excel": false,
        "MechanicReg_Share": false,
        "MechanicList_Create": false,
        "MechanicList_ViewList": false,
        "MechanicList_Edit": false,
        "MechanicList_Excel": false,
        "MechanicList_Share": false,
        "ParkingBooking_Create": false,
        "ParkingBooking_ViewList": false,
        "ParkingBooking_Edit": false,
        "ParkingBooking_Excel": false,
        "ParkingBooking_Share": false,
        "VendorParking_Create": false,
        "VendorParking_ViewList": false,
        "VendorParking_Edit": false,
        "VendorParking_Excel": false,
        "VendorParking_Share": false,
        "DriverReg_Create": false,
        "DriverReg_ViewList": false,
        "DriverReg_Edit": false,
        "DriverReg_Excel": false,
        "DriverReg_Share": false,

      }
    ];


    console.log(this.selectedpermissions)
    this._api.LocationList().subscribe(
      (response: any) => {
        console.log("response")
        console.log(response)
        this.Location_list = [];
        this.Location_list = response.Data;
        console.log(this.Location_list);


      }
    );

  }
  onCheckboxChagen(event) {
    if (event.target.checked == true) {
      this.interests.push(event.target.defaultValue);
      console.log(this.interests);
    }
    else if (event.target.checked == false) {
      this.interests = this.interests.filter(val => val !== event.target.value);
    }
  }
  addpermission(event) {
    console.log(event.target.value);
    if (event.target.checked == true) {
      let value_name = event.target.value;
      // let key = Object.keys(this.selectedpermissions[0]).find(key => this.selectedpermissions[0][key] === value);
      this.selectedpermissions[0][value_name] = true;
      console.log(this.selectedpermissions);
    }
    else if (event.target.checked == false) {
      let value_name = event.target.value;
      this.selectedpermissions[0][value_name] = false;
    }
  }
  changeparkingpermission(event) {
    if (event.target.checked == true) {

      this.isParking = true;
    }
    else {
      this.isParking = false;

    }
  }
  changepermission(event) {
    console.log(event)
    if (event.target.checked == true) {

      this.isDisable = true;

    }
    else {
      this.isDisable = false;
    }

  }

  addlocation(event) {
    console.log(event.target.checked);
    if (event.target.checked == true) {
      this.selectedlocations.push(event.target.value);
      console.log(this.selectedlocations);
    }
    else if (event.target.checked == false) {
      this.selectedlocations = this.selectedlocations.filter(val => val !== event.target.value);
    }

  }




  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
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
        this.EmployeePanCard_file = res.Data;
        console.log(this.EmployeePanCard_file);
      });
  }
  fileupload2(event) {
    this.selectedfile2 = event.target.files[0];
    this.addfiles2();
  }

  addfiles2() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedfile2, this.selectedfile2.name);
    this.http.post('http://3.101.31.129:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.EmployeeAadharCard_file = res.Data;
      });
  }
  fileupload3(event) {
    this.selectedfile3 = event.target.files[0];
    this.addfiles3();
  }

  addfiles3() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedfile3, this.selectedfile3.name);
    this.http.post('http://3.101.31.129:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.NomineePanCard_file = res.Data;
      });
  }
  fileupload4(event) {
    this.selectedfile4 = event.target.files[0];
    this.addfiles4();
  }

  addfiles4() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedfile4, this.selectedfile4.name);
    this.http.post('http://3.101.31.129:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.NomineeAadharCard_file = res.Data;
      });
  }


  _keyPress(event: any) {
    const pattern = /[0-9\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }
  }


  submitt() {

    this.validation();
    if (this.validate == true) {
      let data = {
        "Employee_Name": this.FName,
        "Employee_LastName": this.LName,
        "Employee_Id": this.empId,
        "Role_Name": this.designation,
        "Primary_Contact": this.PhoneNumber,
        "Alternate_Contact": this.AlterativeNumber,
        "Temporaryaddress": this.Temporaryaddress,
        "Permanentaddress": this.Permanentaddress,
        "EmployeePanCard_no": this.EmployeePanCard,
        "EmployeeAadharCard_no": this.EmployeeAadharCard,
        "EmployeePanCard_file": this.EmployeePanCard_file,
        "EmployeeAadharCard_file": this.EmployeeAadharCard_file,
        "Nomaniee_Name": this.NomineeName,
        "NomineeMobileNumber": this.MobileNumber,
        "NomineePanCard_no": this.NomineePanCard,
        "NomineeAadharCard_no": this.NomineeAadharCard,
        "NomineePanCard_file": this.NomineePanCard_file,
        "NomineeAadharCard_file": this.NomineeAadharCard_file,
        "Email_Id": this.EmailId,
        "NomineeAddress": this.NomineeAddress,
        "Location": this.selectedlocations,
        "Sector": this.interests,
        "Permissions": this.selectedpermissions,
        "password": this.password,
      }
      console.log(data)
      this._api.add_emp(data).subscribe((res: any) => {
        console.log(res)
        if (res.Code == 200) {
          this.FName = undefined;
          this.LName = undefined;
          this.empId = undefined;
          this.designation = undefined;
          this.PhoneNumber = undefined;
          this.AlterativeNumber = undefined;
          this.Temporaryaddress = undefined;
          this.Permanentaddress = undefined;
          this.EmployeePanCard = undefined;
          this.EmployeeAadharCard = undefined;
          this.EmployeePanCard_file = undefined;
          this.EmployeeAadharCard_file = undefined;
          this.NomineeName = undefined;
          this.MobileNumber = undefined;
          this.NomineePanCard = undefined;
          this.NomineeAadharCard = undefined;
          this.NomineePanCard_file = undefined;
          this.NomineeAadharCard_file = undefined;
          this.EmailId = undefined;
          this.NomineeAddress = undefined;
          this.selectedlocations = [];
          this.interests = [];
          this.password = undefined;
          this.ngOnInit();
          // window.location.reload();
          alert(res.Message);

          this.router.navigate(['superadmin/master/listemployees']);
        }
        else{
          alert(res.Message);
        }

      })
    }
    else {
      alert("Fill all the fields")
    }

  }

  validation() {
    if ((this.FName != undefined && this.FName != '')
      && (this.LName != undefined && this.LName != '')
      && (this.empId != undefined && this.empId != '')
      && (this.designation != undefined && this.designation != '')
      && (this.PhoneNumber != undefined && this.PhoneNumber != '')
      && (this.AlterativeNumber != undefined && this.AlterativeNumber != '')
      && (this.Temporaryaddress != undefined && this.Temporaryaddress != '')
      && (this.Permanentaddress != undefined && this.Permanentaddress != '')
      && (this.EmployeePanCard != undefined && this.EmployeePanCard != '')
      && (this.EmployeeAadharCard != undefined && this.EmployeeAadharCard != '')
      && (this.NomineeName != undefined && this.NomineeName != '')
      && (this.MobileNumber != undefined && this.MobileNumber != '')
      && (this.NomineePanCard != undefined && this.NomineePanCard != '')
      && (this.NomineeAadharCard != undefined && this.NomineeAadharCard != '')
      && (this.EmailId != undefined && this.EmailId != '')
      && (this.NomineeAddress != undefined && this.NomineeAddress != '')
      && (this.selectedlocations.length > 0)
      && (this.interests.length > 0)
      && (this.selectedpermissions.length > 0)
      && (this.EmployeePanCard_file != undefined)
      && (this.EmployeeAadharCard_file != undefined)
      && (this.NomineePanCard_file != undefined)
      && (this.NomineeAadharCard_file != undefined) && (this.password != undefined && this.password != '')
      && this.emailerror == false && this.phone_err1 == false && this.phone_err2 == false && this.phone_err3 == false) {
      this.validate = true;
    }
    else {
      this.validate = false;
    }
  }

  emailcheck() {
    this.emailerror = this._val.emailValidator(this.EmailId);
  }
  phone1() {
    this.phone_err1 = this._val.mobileValidator(this.PhoneNumber)
  }
  phone2() {

    this.phone_err2 = this._val.mobileValidator(this.AlterativeNumber)
    if(this.PhoneNumber == this.AlterativeNumber) {
      this.phone_err2 = true;
    }
  }
  phone3() {
    this.phone_err3 = this._val.mobileValidator(this.MobileNumber)
  }

}
