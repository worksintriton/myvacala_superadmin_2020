import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-enginecc',
  templateUrl: './enginecc.component.html',
  styleUrls: ['./enginecc.component.scss']
})
export class EngineccComponent implements OnInit {

  forcreate: any;
  VehicleModel: any;
  vehiclemodelList: any;
  vehiclemodelError: any;
  vehiclemodelErrorMsg: any;
  vehiclemodelId: any;
  selectedimgae: any;
  Pic: any = "http://3.101.31.129:3000/api/uploads/82ea92a8-3833-4aa9-84c7-772d1eb28186.png";
  vehicle_list: any;
  VehicleType: any = "Two Wheeler";
  Vehiclecc: any;
  val: boolean = false;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,

    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this.forcreate = true;
    this._api.vehicleModellist().subscribe(
      (response: any) => {
        console.log(response);
        this.vehiclemodelList = response.Data;
        this.vehiclemodelList = this.vehiclemodelList.filter(x => x.Vehicle_Type == "Two Wheeler");
        console.log(this.vehiclemodelList)
      }
    );
    this._api.vehiclelist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.vehicle_list = response.Data;
        console.log(this.vehicle_list);
      }
    );
  }

  editservice(data) {
    this.forcreate = false;
    console.log(data);
    this.Vehiclecc = data.VehicleModel_Name;
    this.vehiclemodelId = data._id;
    this.Pic= data.VehicleModel_Image;


    //console.log(this.fuelId);
    //this.router.navigateByUrl('/superadmin/master/create_master_service');

  }
  VehicleModal_save() {
    this.validation();
    if (this.val == true) {
      console.log(this.forcreate);
      if (this.forcreate == true || this.forcreate == undefined) {
        let data =
        {
          "VehicleModel_Name": this.Vehiclecc,
          "VehicleModel_Image": this.Pic,
          "Vehicle_Type": this.VehicleType,


        }
        console.log(data);
        if (this.VehicleModel == '') {
          this.vehiclemodelError = true;
          this.vehiclemodelErrorMsg = 'Vehicle Name Required.';
        }

        else {
          this._api.vehicleModel_save(data).subscribe(
            (response: any) => {
              console.log(response);
              if (response.Code == 401) {
                alert(response.Message);
              } else {
                this.saveInLocal('VehicleDetails', response.data);
                this.reset();
                this.ngOnInit();
                alert("Engine CC Created Successfully");

              }
            }
          );
        }
      }
      else {
        let data =
        {
          "Vehiclemodel_id": this.vehiclemodelId,
          "VehicleModel_Name": this.Vehiclecc,
          "VehicleModel_Image": this.Pic,
          "Vehicle_Type": this.VehicleType,


        }
        console.log(data);
        if (this.VehicleModel == '') {
          this.vehiclemodelError = true;
          this.vehiclemodelErrorMsg = 'vehiclemodel Name Required.';
        }

        else {
          this._api.vehicleModel_edit(data).subscribe(
            (response: any) => {
              console.log(response);
              if (response.Code == 401) {
                alert(response.Message);
              } else {
                this.saveInLocal('VehicleDetails', response.data);
                this.reset();
                this.ngOnInit();
                alert("Engine CC Updated Successfully");
              }
            }
          );
        }

      }
    }
    else {
      alert("Fill all the fields")
    }



  }
  fileupload1(event) {
    this.selectedimgae = event.target.files[0];
    this.addfiles1();
  }

  addfiles1() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae, this.selectedimgae.name);
    this.http.post('http://3.101.31.129:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.Pic = res.Data;
      });
  }
  VehicleModel_delete(i) {
    let data = {

      "Vehiclemodel_id": i

    }
    console.log(data);
    this._api.VehicleModel_delete(data).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code == 200) {
          alert("Engine CC Deleted Successfully");
          this.ngOnInit();
        }
        else {
          alert("sorry");
        }

      }
    );
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  validation() {
    if ((this.Vehiclecc != undefined && this.Vehiclecc != '') && (this.Pic != undefined)) {
      this.val = true;
    }
    else {
      this.val = false;
    }
  }
  reset() {
    this.forcreate = true;
    this.Vehiclecc = undefined;
    this.Pic = undefined;
  }
}
