import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {
  vehicle_list:any;
  vehicletypeId:any;
  vehicletypelist:any;
  constructor( 
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    
    this._api.vehiclelist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.vehicletypelist = response.Data;
        console.log(this.vehicletypelist);
      }
    ); 
  }
  openBrand(item)
  {
    this.saveInLocal('brandlist', item);
    this.router.navigate(['/superadmin/master/Vehiclechecklist']);
  }
  editvehicle_brand(item)
  {
    this.saveInLocal('editbranditems', item);
    this.router.navigate(['/superadmin/master/Brand']);
  }
  vechiclt_type_select(event)
  {
    this.vehicletypeId=event.target.value;
    console.log(this.vehicletypeId);
    let data={
      "Vehicle_Type_id":this.vehicletypeId
    }
    console.log(data);
    this._api.vehicleBrandList(data).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.vehicle_list = response.Data;
        console.log(this.vehicle_list);
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
