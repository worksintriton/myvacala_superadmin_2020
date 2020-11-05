import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-popular-vehicle',
  templateUrl: './popular-vehicle.component.html',
  styleUrls: ['./popular-vehicle.component.scss']
})
export class PopularVehicleComponent implements OnInit {
  List: any = [];
  vehicledetails_list: any;
  vehicle_list: any;
  vehicle_brand_list: any;
  fuelList: any;
  vehiclebody_list: any;
  VehicleType: any = undefined;
  VehicleBrand: any = undefined;
  VehicleModel: any = undefined;
  fuletype: any = undefined;
  vehiclebody: any = undefined;

  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    this.List = [];
    this._api.vehiclenamedetails_list().subscribe(
      (response: any) => {
        console.log(response.Data);

        console.log("vehicledetails_list");
        let array = response.Data.reverse();
        for (let i = 0; i < array.length; i++) {
          if (array[i].Popular_Vehicle == true) {
            this.List.push(array[i]);
            this.vehicledetails_list = this.List;
          }
        }

        // this.List = response.Data;

      }
    );


    this._api.vehiclelist().subscribe(
      (response: any) => {
        // console.log(response.Data);
        this.vehicle_list = response.Data;
        // console.log("vehicle_list");
        // console.log(this.vehicle_list);
      }
    );

    this._api.vehiclebrand().subscribe(
      (response: any) => {
        // console.log(response.Data);
        this.vehicle_brand_list = response.Data;
        // console.log("vehicle_brand_list");
        // console.log(this.vehicle_brand_list);
      }
    );
    this._api.getfuellist().subscribe(
      (response: any) => {
        // console.log(response);
        this.fuelList = response.Data;

      }
    );
    this._api.vehicleModellist().subscribe(
      (response: any) => {
        // console.log(response);
        this.vehiclebody_list = response.Data;

      }
    );
  }
  get_fuel_list(item) {
    
  Swal.fire({
    title: 'Are you sure?',
    text: 'If you delete this data it will affect existing user details.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      let data = {
        "_id": item._id
      }
      this._api.vehiclenameDelete(data).subscribe(
        (response: any) => {
          // console.log(response);
          if (response.Code == 200) {
            alert("Vehicle Deleted successfully");
            this.ngOnInit();
          }
          else {
            alert("sorry");
          }
        }
      );
     
      // Swal.fire(
      //   'Deleted!',
      //   'Your imaginary file has been deleted.',
      //   'success'
      // )
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your data is safe.',
        'error'
      )
    }
  })
    // console.log(item)
   
  }
  edit_list_data(item) {
    this.saveInLocal('vehicle', item);
    console.log(item)
    this.router.navigate(['superadmin', 'master', 'VehicleName']);
  }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }


  filter() {
    if (this.VehicleType != undefined || this.VehicleBrand != undefined || this.VehicleModel != undefined || this.fuletype != undefined || this.vehiclebody != undefined) {
      this.vehicledetails_list = this.List;
      if (this.VehicleType != undefined) {
        if(this.VehicleType == "All"){
          this.vehicledetails_list = this.List;
        }
        else{
          this.vehicledetails_list = this.vehicledetails_list.filter((x) => x.Vehicle_Type._id == this.VehicleType)
          console.log(this.vehicledetails_list)
        }
      
      }
      if (this.VehicleBrand != undefined) {
        if(this.VehicleBrand == "All"){
          this.vehicledetails_list = this.vehicledetails_list;
        }
        else{
          this.vehicledetails_list = this.vehicledetails_list.filter((x) => x.Vehicle_Brand_id._id == this.VehicleBrand)
          console.log(this.vehicledetails_list)
        }
       
      }
      if (this.VehicleModel != undefined) {
        if(this.VehicleModel == "All"){
          this.vehicledetails_list = this.vehicledetails_list;
        }
        else{
          this.vehicledetails_list = this.vehicledetails_list.filter((x) => x.Vehicle_Name == this.VehicleModel)
          console.log(this.vehicledetails_list)
        }
        
      }
      if (this.fuletype != undefined) {
        if(this.fuletype == "All"){
          this.vehicledetails_list = this.vehicledetails_list;
        }
        else{
          this.vehicledetails_list = this.vehicledetails_list.filter((x) => x.Fuel_Type.some((y) => y._id == this.fuletype))
          console.log(this.vehicledetails_list)
        }
        
      }
      if (this.vehiclebody != undefined) {
        if(this.vehiclebody == "All"){
          this.vehicledetails_list = this.vehicledetails_list;
        }
        else{
          this.vehicledetails_list = this.vehicledetails_list.filter((x) => x.Vehicle_Model.some((y) => y._id == this.vehiclebody))
          console.log(this.vehicledetails_list)
        }
        
      }
    }
    else {
      alert("Need valid input")
    }

  }

  refresh() {
    this.VehicleType = undefined;
    this.VehicleBrand = undefined;
    this.VehicleModel = undefined;
    this.fuletype = undefined;
    this.vehiclebody = undefined;
    this.vehicledetails_list = this.List;
  }


  popular(item) {
    let data =
    {
      "_id": item._id,
      "Popular_Vehicle": item.Popular_Vehicle == true ? false : true,
    }

    console.log(data)
    this._api.vehicledetails_edit(data).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code == 401) {
          alert(response.Message);
        } else {
          alert("Vehicle status updated to Unpopular");
          // this.forcreate = true;
          //this.router.navigate(['/superadmin/master/create_master_service']);
          this.ngOnInit();
        }
      }
    );
  }
}
