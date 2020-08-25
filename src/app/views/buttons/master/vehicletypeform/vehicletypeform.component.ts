import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-vehicletypeform',
  templateUrl: './vehicletypeform.component.html',
  styleUrls: ['./vehicletypeform.component.scss']
})
export class VehicletypeformComponent implements OnInit {
  VehicleType:any;
  VehicleBrand:any;
  VehicleName:any;
  vehicle_list:any
  forcreate:any;
  constructor( 
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

    ngOnInit() {
    
      this._api.vehiclelist().subscribe(
        (response: any) => {
          console.log(response.Data);
          this.vehicle_list = response.Data.reverse();
          console.log(this.vehicle_list);
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
  
      if (this.forcreate == true || this.forcreate == undefined) {
        let data =
        {
          "Vehicle_Type":this.VehicleType,
          "Vehicle_Image":"Image path of vehicle",
          "Vehicle_Name": this.VehicleName,
          "Vehicle_Brand": this.VehicleBrand    
        }
        console.log(data);
  
          this._api.vehiclecreation(data).subscribe(
            (response: any) => {
              console.log(response);
              if (response.Code == 422) {
                alert(response.Message);
              } else {
                alert(response.Message);
                // this.router.navigate(['/superadmin/master/create_master_service'])
  
              }
            }
          );
        }
      
      else {
        let data =
        {
          "Vehicle_Type":this.VehicleType,
          "Vehicle_Image":"Image path of vehicle",
          "Vehicle_Name": this.VehicleName,
          "Vehicle_Brand": this.VehicleBrand    
        }
        console.log(data);
     
          this._api.subservice_edit(data).subscribe(
            (response: any) => {
              console.log(response);
              if (response.Code == 401) {
                alert(response.Message);
              } else {
                alert(response.Message);
                this.saveInLocal("foredit", true);
                //this.router.navigate(['/superadmin/master/create_master_service']);
  
              }
            }
          );
        
      }
    }
    saveInLocal(key, val): void {
      this.storage.set(key, val);
    }
  
    getFromLocal(key): any {
      return this.storage.get(key);
    }
  }
  