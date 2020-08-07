import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  VehicleType: any = null;
  VehicleBrand: any;
  VehicleName: any;
  vehicle_list: any
  forcreate: any = true;
  selectedimgae: any;
  Pic: any;
  editbranditem: any;


  vehicletypeId: any;
  vehicletypelist: any;
  vehicle_brand_list: any;
  brandid: any;
  Vehicle_type: any= "5f0c0cfc2f857d66950cf25f";
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    this. vechiclt_type_select();
    this._api.vehiclelist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.vehicle_list = response.Data;
        console.log(this.vehicle_list);
      }
    );

    // this.editbranditem = this.getFromLocal('editbranditems');
    // console.log(this.editbranditem);
    //this.VehicleType=this.editbranditem.Vehicle_Type_id;
    // this.VehicleBrand = this.editbranditem.Vehicle_Brand_Name;

  }
  openBrand(item) {
    this.saveInLocal('brandlist', item);
    this.router.navigate(['/superadmin/master/Vehiclechecklist']);
  }
  deletebrand(i) {
    let data = {

      "_id": i

    }
    console.log(data);
    this._api.vehiclebrand_delete(data).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code == 200) {
          alert(response.Message);
          this.ngOnInit();
        }
        else {
          alert("sorry");
        }

      }
    );
  }
  editvehicle_brand(item) {
    console.log(item);
    window.scroll(0, 0);
    this.forcreate = false;
    // this.saveInLocal('editbranditems', item);
    this.VehicleType = item.Vehicle_Type_id;
    this.VehicleBrand = item.Vehicle_Brand_Name;
    this.brandid = item._id;
    // this.router.navigate(['/superadmin/master/Brand']);
  }
  vechiclt_type_select() {
    console.log(this.Vehicle_type);
    let data = {
      "Vehicle_Type_id": this.Vehicle_type
    }
    console.log(data);
    this._api.vehicleBrandList(data).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.vehicle_brand_list = response.Data;
        console.log(this.vehicle_brand_list);
      }
    );
  }

  editservice(data) {
    let create = false;
    this.saveInLocal('subservices_Details', data);
    this.saveInLocal('foredit', create);
    console.log(data);
    this.VehicleType = data.Subservice_Name;
    this.VehicleBrand = data.Desc;
    this.VehicleName = data._id;

    // this.router.navigateByUrl('/superadmin/master/create_master_service');

  }
  vehicle_save() {
    if ((this.VehicleBrand != undefined && this.VehicleBrand != '') && this.VehicleType != null) {
      console.log(this.forcreate);
      if (this.forcreate == true || this.forcreate == undefined) {
        let data =
        {
          "Vehicle_Type_id": this.VehicleType,
          "Vehicle_Brand_Image": '',
          "Vehicle_Brand_Name": this.VehicleBrand

        }

        console.log(data);

        this._api.vehiclebrandcreation(data).subscribe(
          (response: any) => {
            console.log(response);
            if (response.Code == 422) {
              alert(response.Message);
            } else {
              alert(response.Message);
              // this.router.navigate(['/superadmin/master/create_master_service'])
              this.ngOnInit();
              this.VehicleType = undefined;
              this.VehicleBrand = undefined;
              this.forcreate = true
            }
          }
        );
      }

      else {
        console.log("data");
        let data =
        {
          "Vehicle_Type_id": this.VehicleType,
          "Vehicle_Brand_Image": '',
          "Vehicle_Brand_Name": this.VehicleBrand,
          "Vehiclebrand_id": this.brandid,
        }
        console.log(data);

        this._api.VehicleBrandEdit(data).subscribe(
          (response: any) => {
            console.log(response);
            if (response.Code == 401) {
              alert(response.Message);
            } else {
              alert(response.Message);
              // this.saveInLocal("foredit", true);
              //this.router.navigate(['/superadmin/master/create_master_service']);
              this.ngOnInit();

            }
          }
        );

      }
    }
    else {
      alert('Enter the valid input')
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
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
}

