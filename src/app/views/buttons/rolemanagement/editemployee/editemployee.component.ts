import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';
import { ValidatorService } from '../../../../valitation.service'
import { Location } from '@angular/common';
@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.scss']
})
export class EditemployeeComponent implements OnInit {
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
  parkingOnboradation_se: boolean;
  Sector_se: any = [];
  Mysoure_se: any;
  Hosur_se: any;
  Bengalore_se: any;
  Karnadaga_se: any;
  Andra_se: any;
  Trichy_se: any;
  Coimbatoure_se: any;
  Chennai_se: any;
  VendorParking_se: boolean;
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
  pdfname1: any;
  pdfname2: any;
  pdfname3: any;
  pdfname4: any;
  mech_create: boolean;
  mech_view: boolean;
  mech_edit: boolean;
  mech_excel: boolean;
  mech_share: boolean;
  MechReg_create: boolean;
  MechReg_view: boolean;
  MechReg_edit: boolean;
  MechReg_excel: boolean;
  MechReg_share: boolean;
  MechList_create: boolean;
  MechList_view: boolean;
  MechList_edit: boolean;
  MechList_excel: boolean;
  MechList_share: boolean;
  Parkbook_create: boolean;
  Parkbook_view: boolean;
  Parkbook_edit: boolean;
  Parkbook_excel: boolean;
  Parkbook_share: boolean;
  VendPark_create: boolean;
  VendPark_view: boolean;
  VendPark_edit: boolean;
  VendPark_excel: boolean;
  VendPark_share: boolean;
  Driver_create: boolean;
  Driver_view: boolean;
  Driver_edit: boolean;
  Driver_excel: boolean;
  Driver_share: boolean;
  validate: any;
  emailerror: boolean = false;
  phone_err1: boolean = false;
  phone_err2: boolean = false;
  phone_err3: boolean = false;
  constructor(
    private router: Router,
    private http: HttpClient,
    private _api: ApiService,
    private _val: ValidatorService,
    private loction: Location,
    @Inject(SESSION_STORAGE) private storage: StorageService) {




  }

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



    this.EmployeeList = this.getFromLocal('Employee_list');

    console.log(this.EmployeeList);
    this.employeeId = this.EmployeeList._id;
    this.empId = this.EmployeeList.Employee_Id;
    this.FName = this.EmployeeList.Employee_Name;
    this.LName = this.EmployeeList.Employee_LastName;
    this.designation = this.EmployeeList.Role_Name;
    this.EmailId = this.EmployeeList.Email_Id;
    this.PhoneNumber = this.EmployeeList.Primary_Contact;
    this.Temporaryaddress = this.EmployeeList.Temporaryaddress;
    this.AlterativeNumber = this.EmployeeList.Alternate_Contact;
    this.interests = this.EmployeeList.Sector;
    this.password = this.EmployeeList.password;
    this.selectedpermissions = this.EmployeeList.Permissions;
    this.NomineeName = this.EmployeeList.Nomaniee_Name;
    this.Permanentaddress = this.EmployeeList.Permanentaddress;
    this.EmployeePanCard = this.EmployeeList.EmployeePanCard_no;
    this.EmployeeAadharCard = this.EmployeeList.EmployeeAadharCard_no;
    this.EmployeePanCard_file = this.EmployeeList.EmployeePanCard_file;
    this.EmployeeAadharCard_file = this.EmployeeList.EmployeeAadharCard_file;
    this.MobileNumber = this.EmployeeList.NomineeMobileNumber;
    this.NomineePanCard = this.EmployeeList.NomineePanCard_no;
    this.NomineeAadharCard = this.EmployeeList.NomineeAadharCard_no;
    this.NomineePanCard_file = this.EmployeeList.NomineePanCard_file;
    this.NomineeAadharCard_file = this.EmployeeList.NomineeAadharCard_file;
    this.NomineeAddress = this.EmployeeList.NomineeAddress;

    if (this.EmployeePanCard_file == undefined) {
      this.pdfname1 = "Document Not uploaded";
    } else {
      this.pdfname1 = this.EmployeePanCard_file.slice(37);
    }
    if (this.EmployeeAadharCard_file == undefined) {
      this.pdfname2 = "Document Not uploaded";
    } else {
      this.pdfname2 = this.EmployeeAadharCard_file.slice(37);
    }
    if (this.NomineePanCard_file == undefined) {
      this.pdfname3 = "Document Not uploaded";
    } else {
      this.pdfname3 = this.NomineePanCard_file.slice(37);
    }
    if (this.NomineeAadharCard_file == undefined) {
      this.pdfname4 = "Document Not uploaded";
    } else {
      this.pdfname4 = this.NomineeAadharCard_file.slice(37);
    }

    if (this.interests.some(x => x == "Finance")) {
      this.Finance_se = true;
    }
    if (this.interests.some(x => x == "CCTeam")) {
      this.CCTeam_se = true;
    }
    if (this.interests.some(x => x == "AppFeatures")) {
      this.AppFeatures_se = true;
    }

    if (this.interests.some(x => x == "Operations")) {
      this.Operations_se = true;
    }
    if (this.interests.some(x => x == "MechanicList")) {
      this.VendorList_se = true;
    }
    if (this.interests.some(x => x == "ParkingList")) {
      this.VendorParking_se = true;
    }
    if (this.interests.some(x => x == "MechanicOnbordation")) {
      this.VendorOnbordation_se = true;
    }
    if (this.interests.some(x => x == "parkingOnboradation")) {
      this.parkingOnboradation_se = true;
    }
    if (this.interests.some(x => x == "AddEmployee")) {
      this.AddEmployee_se = true;
    }
    if (this.interests.some(x => x == "ListofEmployees")) {
      this.ListofEmployees_se = true;
    }
    if (this.selectedpermissions[0].MechanicBooking_Create == true) {
      this.mech_create = true;
    }
    if (this.selectedpermissions[0].MechanicBooking_viewlist == true) {
      this.mech_view = true;
    }
    if (this.selectedpermissions[0].MechanicBooking_Edit == true) {
      this.mech_edit = true;
    }
    if (this.selectedpermissions[0].MechanicBooking_Excel == true) {
      this.mech_excel = true;
    }
    if (this.selectedpermissions[0].MechanicBooking_Share == true) {
      this.mech_share = true;
    }
    if (this.selectedpermissions[0].MechanicReg_Create == true) {
      this.MechReg_create = true;
    }
    if (this.selectedpermissions[0].MechanicReg_ViewList == true) {
      this.MechReg_view = true;
    }
    if (this.selectedpermissions[0].MechanicReg_Edit == true) {
      this.MechReg_edit = true;
    }
    if (this.selectedpermissions[0].MechanicReg_Excel == true) {
      this.MechReg_excel = true;
    }
    if (this.selectedpermissions[0].MechanicReg_Share == true) {
      this.MechReg_share = true;
    }
    if (this.selectedpermissions[0].MechanicList_Create == true) {
      this.MechList_create = true;
    }
    if (this.selectedpermissions[0].MechanicList_ViewList == true) {
      this.MechList_view = true;
    }
    if (this.selectedpermissions[0].MechanicList_Edit == true) {
      this.MechList_edit = true;
    }
    if (this.selectedpermissions[0].MechanicList_Excel == true) {
      this.MechList_excel = true;
    }
    if (this.selectedpermissions[0].MechanicList_Share == true) {
      this.MechList_share = true;
    }
    if (this.selectedpermissions[0].ParkingBooking_Create == true) {
      this.Parkbook_create = true;
    }
    if (this.selectedpermissions[0].ParkingBooking_ViewList == true) {
      this.Parkbook_view = true;
    }
    if (this.selectedpermissions[0].ParkingBooking_Edit == true) {
      this.Parkbook_edit = true;
    }
    if (this.selectedpermissions[0].ParkingBooking_Excel == true) {
      this.Parkbook_excel = true;
    }
    if (this.selectedpermissions[0].ParkingBooking_Share == true) {
      this.Parkbook_share = true;
    }
    if (this.selectedpermissions[0].VendorParking_Create == true) {
      this.VendPark_create = true;
    }
    if (this.selectedpermissions[0].VendorParking_ViewList == true) {
      this.VendPark_view = true;
    }
    if (this.selectedpermissions[0].VendorParking_Edit == true) {
      this.VendPark_edit = true;
    }
    if (this.selectedpermissions[0].VendorParking_Excel == true) {
      this.VendPark_excel = true;
    }
    if (this.selectedpermissions[0].VendorParking_Share == true) {
      this.VendPark_share = true;
    }
    if (this.selectedpermissions[0].DriverReg_Create == true) {
      this.Driver_create = true;
    }
    if (this.selectedpermissions[0].DriverReg_ViewList == true) {
      this.Driver_view = true;
    }
    if (this.selectedpermissions[0].DriverReg_Edit == true) {
      this.Driver_edit = true;
    }
    if (this.selectedpermissions[0].DriverReg_Excel == true) {
      this.Driver_excel = true;
    }
    if (this.selectedpermissions[0].DriverReg_Share == true) {
      this.Driver_share = true;
    }

    this._api.LocationList().subscribe(
      (response: any) => {
        console.log("response")
        console.log(response)
        this.Location_list = [];
        this.Location_list = response.Data;
        console.log(this.Location_list);
        for (let i = 0; i < this.Location_list.length; i++) {
          if (this.EmployeeList.Location.some((x) => x._id == this.Location_list[i]._id)) {
            this.Location_list[i].status = true;
            this.selectedlocations.push(this.Location_list[i]._id);
          }
          else {
            this.Location_list[i].status = false;
          }
        }
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
    this.http.post('https://myvacala.com/api/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.EmployeePanCard_file = res.Data;
        console.log(this.EmployeePanCard_file);
      });
    if (this.EmployeePanCard_file == undefined) {
      this.pdfname1 = "Document Not uploaded";
    } else {
      this.pdfname1 = this.EmployeePanCard_file.slice(37);
    }
  }
  fileupload2(event) {
    this.selectedfile2 = event.target.files[0];
    this.addfiles2();
  }

  addfiles2() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedfile2, this.selectedfile2.name);
    this.http.post('https://myvacala.com/api/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.EmployeeAadharCard_file = res.Data;
      });
    if (this.EmployeeAadharCard_file == undefined) {
      this.pdfname2 = "Document Not uploaded";
    } else {
      this.pdfname2 = this.EmployeeAadharCard_file.slice(37);
    }
  }
  fileupload3(event) {
    this.selectedfile3 = event.target.files[0];
    this.addfiles3();
  }

  addfiles3() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedfile3, this.selectedfile3.name);
    this.http.post('https://myvacala.com/api/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.NomineePanCard_file = res.Data;
      });
    if (this.NomineePanCard_file == undefined) {
      this.pdfname3 = "Document Not uploaded";
    } else {
      this.pdfname3 = this.NomineePanCard_file.slice(37);
    }
  }
  fileupload4(event) {
    this.selectedfile4 = event.target.files[0];
    this.addfiles4();
  }

  addfiles4() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedfile4, this.selectedfile4.name);
    this.http.post('https://myvacala.com/api/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.NomineeAadharCard_file = res.Data;

      });
    if (this.NomineeAadharCard_file == undefined) {
      this.pdfname4 = "Document Not uploaded";
    } else {
      this.pdfname4 = this.NomineeAadharCard_file.slice(37);
    }
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
        "Employee_id": this.employeeId,
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
      this._api.emp_edit(data).subscribe((res: any) => {
        console.log(res)
        alert("Employee details Updated successfully");
        this.router.navigate(['superadmin/master/listemployees']);
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
  back() {
    this.loction.back();
  }
}
