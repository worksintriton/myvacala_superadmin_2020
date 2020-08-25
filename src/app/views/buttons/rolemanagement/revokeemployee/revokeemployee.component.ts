import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-revokeemployee',
  templateUrl: './revokeemployee.component.html',
  styleUrls: ['./revokeemployee.component.scss']
})
export class RevokeemployeeComponent implements OnInit {
  List: any;
  emp_list: any;
  Location_list: any;
  loc: any;
  empid: any;
  emailid: any;
  phone: any;
  status: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {

    this._api.emp_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.List = response.Data.reverse();
        this.emp_list = [];
        console.log(this.emp_list);
        for (let i = 0; i < this.List.length; i++) {
          if (this.List[i].employee_status == "Suspended") {
            this.emp_list.push(this.List[i])
          }
        }
      }
    );
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
  revoke(i) {

    console.log(i);
    let data = {
      "Employee_id": i,
      "employee_status": "Working",

    }
    console.log(data);
    this._api.emp_edit(data).subscribe(
      (response: any) => {
        console.log(response);
        alert("Employee revoked Successfully");
        this.ngOnInit();
      }
    );
  }
  Edit_Employee(data) {
    this.saveInLocal('Employee_list', data);
    console.log(data);
    this.router.navigate(['superadmin/master/edit_employees']);
    this.saveInLocal('foredit', false);
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  filter() {
    if (this.loc != undefined || (this.empid != undefined && this.empid != '') || (this.emailid != undefined && this.emailid != '') || (this.phone != undefined && this.phone != '') || this.status != undefined) {
      this.emp_list = this.List;
      if (this.loc != undefined) {
        this.emp_list = this.emp_list.filter((x) => x.Location.some((y) => y._id == this.loc))
        console.log(this.emp_list)
      }
      if (this.empid != undefined && this.empid != '') {
        this.emp_list = this.emp_list.filter((x) => x.Employee_Id == this.empid)
        console.log(this.emp_list)
      }
      if (this.emailid != undefined && this.emailid != '') {
        this.emp_list = this.emp_list.filter((x) => x.Email_Id == this.emailid)
        console.log(this.emp_list)
      }
      if (this.phone != undefined && this.phone != '') {
        this.emp_list = this.emp_list.filter((x) => x.Primary_Contact == this.phone)
        console.log(this.emp_list)
      }
      if (this.status != undefined) {
        this.emp_list = this.emp_list.filter((x) => x.employee_status == this.status)
        console.log(this.emp_list)
      }

    }
    else {
      alert("Need valid input")
    }

  }

  refresh() {
    this.loc = undefined;
    this.empid = undefined;
    this.emailid = undefined;
    this.phone = undefined;
    this.status = undefined;

    this.emp_list = [];
    console.log(this.emp_list);
    for (let i = 0; i < this.List.length; i++) {
      if (this.List[i].employee_status == "Suspended") {
        this.emp_list.push(this.List[i])
      }
    }
  }
}