import { Component, OnInit, Inject, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-vehicle-model',
  templateUrl: './vehicle-model.component.html',
  styleUrls: ['./vehicle-model.component.scss']
})
export class VehicleModelComponent implements OnInit {

  forcreate: any;
  VehicleModel: any;
  vehiclemodelList: any;
  vehiclemodelError: any;
  vehiclemodelErrorMsg: any;
  vehiclemodelId: any;
  selectedimgae: any;
  Pic: any;
  vehicle_list: any;
  VehicleType: any = "Four Wheeler";
  val: boolean = false;
  width: any;
  height: any;
  @ViewChild('imgType', { static: false }) imgType: ElementRef;
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
        this.vehiclemodelList = this.vehiclemodelList.filter(x => x.Vehicle_Type == "Four Wheeler")
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
    this.VehicleModel = data.VehicleModel_Name;
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
          "VehicleModel_Name": this.VehicleModel,
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
                alert("Vehicle Body Type Created Successfully");
                this.ngOnInit();
                this.reset();
              }
            }
          );
        }
      }
      else {
        let data =
        {
          "Vehiclemodel_id": this.vehiclemodelId,
          "VehicleModel_Name": this.VehicleModel,
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
                alert("Vehicle Body Type Updated Successfully");
                this.reset();
                this.ngOnInit();

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
 
  VehicleModel_delete(i) {
    let data = {

      "Vehiclemodel_id": i

    }
    console.log(data);
    this._api.VehicleModel_delete(data).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code == 200) {
          alert("Vehicle Body Type Deleted Successfully");
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
    if ((this.VehicleModel != undefined && this.VehicleModel != '') && (this.Pic != undefined)) {
      this.val = true;
    }
    else {
      this.val = false;
    }
  }
  reset(){
    this.forcreate = true;
    this.VehicleModel = undefined;
    this.Pic = undefined;
  }

  fileupload(event) {
    console.log("this.width")
    this.selectedimgae = event.target.files[0];
    let fr = new FileReader();
    fr.onload = () => { // when file has loaded
      var img = new Image();
      img.onload = () => {
        this.width = img.width;
        this.height = img.height;
        console.log(this.width, this.height);
        if(this.width == 100 && this.height == 100){
          this.addfiles1();
        }
        else{
          Swal.fire(
            'Sorry',
            'Image Size Should be 100*100',
            'error'
          )
      
        }
      };

      img.src = fr.result as string; // The data URL 
    };

    fr.readAsDataURL(this.selectedimgae);
    this.imgType.nativeElement.value = ""; // clear the value after upload
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
}
