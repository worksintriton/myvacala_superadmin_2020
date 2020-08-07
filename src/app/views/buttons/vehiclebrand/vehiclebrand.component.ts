import { Component, OnInit,Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-vehiclebrand',
  templateUrl: './vehiclebrand.component.html',
  styleUrls: ['./vehiclebrand.component.scss']
})
export class VehiclebrandComponent implements OnInit {
  vehicle_list:any;
  VehicleType:any;
  VehicleName:any;
  VehicleBarnd:any;
  constructor(
    private router: Router,   

    private http: HttpClient,

    private _api : ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    
    this._api.vehiclelist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.vehicle_list = response.Data;
        console.log(this.vehicle_list);
      }
    ); 
  }
  createVehicleBrand()
  {
    let data={        
      "Vehicle_Type_id": this.VehicleType,
       "Vehicle_Image" : "path of the Image",
       "Vehicle_Name": this.VehicleName,
       "Vehicle_Brand": this.VehicleBarnd
    }   
    this._api.VehicleBrand_save(data).subscribe(
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
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
