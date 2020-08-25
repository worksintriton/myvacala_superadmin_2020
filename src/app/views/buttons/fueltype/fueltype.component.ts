import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-fueltype',
  templateUrl: './fueltype.component.html',
  styleUrls: ['./fueltype.component.scss']
})
export class FueltypeComponent implements OnInit {
  forcreate: any;
  fuelType: any = undefined;
  fuelList: any;
  fuelError: any;
  fuelErrorMsg: any;
  fuelId: any;
  colorCode: any =undefined;
  color: any = [
    { code: "#FFFF00", name: "Yellow" },
    { code: "#008000", name: "Green" },
    { code: "#0276FD", name: "Picasso Blue" },
    { code: "#138F6A", name: "Garden hose" },
    { code: "#5D478B", name: "Medium purple4" },
    { code: "#646F5E", name: "seaweed" },
    { code: "#6959CD", name: "Slateblue3" },
    { code: "#6E6E6E", name: "Gray43" },
    { code: "#802A2A", name: "Brown" },
    { code: "#871F78", name: "Darkpurple" },
    { code: "#993300", name: "Chocolate" },
    { code: "#CC00FF", name: "Grape" },
  ]
  view_drop: boolean = false;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,

    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this.forcreate = true;
    this._api.getfuellist().subscribe(
      (response: any) => {
        console.log(response);
        this.fuelList = response.Data.reverse();

      }
    );
  }

  editservice(data) {
    let create = false;
    this.saveInLocal('FuelDetails', data);
    this.saveInLocal('foredit', create);
    console.log(data);
    this.fuelType = data.Fuel_Type;
    this.fuelId = data._id;
    this.colorCode = data.Background_Color_name;
    this.forcreate = false;
    console.log(this.fuelId);
    //this.router.navigateByUrl('/superadmin/master/create_master_service');

  }
  fuelType_Save() {
    console.log(this.forcreate);
    if ((this.fuelType != undefined && this.fuelType != '') && ((this.colorCode != undefined && this.colorCode != ''))) {
      if (this.forcreate == true || this.forcreate == undefined) {
        let color_data = this.color.filter((x) => x.name == this.colorCode)
        console.log(color_data)
        let data =
        {

          "Fuel_Type": this.fuelType,
          "Background_Color": color_data[0].code,
          "Background_Color_name": color_data[0].name
        }
        console.log(data);
        if (this.fuelType == '') {
          this.fuelError = true;
          this.fuelErrorMsg = 'Fuel Name Required.';
        }

        else {
          this._api.FuelType_save(data).subscribe(
            (response: any) => {
              console.log(response);
              if (response.Code == 401) {
                alert(response.Message);
              } else {
                this.saveInLocal('fuelList', response.data);
                alert("Fuel Type Created Successfully");
                this.ngOnInit();
                this.fuelType = undefined;
                this.colorCode = undefined;
              }
            }
          );
        }
      }
      else {
        let color_data = this.color.filter((x) => x.name == this.colorCode)
        console.log(color_data)
        let data =
        {
          "Fueltype_id": this.fuelId,
          "Fuel_Type": this.fuelType,
          "Background_Color": color_data[0].code,
          "Background_Color_name": color_data[0].name

        }
        console.log(data);
        if (this.fuelType == '') {
          this.fuelError = true;
          this.fuelErrorMsg = 'Fuel Name Required.';
        }

        else {
          this._api.FuelType_edit(data).subscribe(
            (response: any) => {
              console.log(response);
              if (response.Code == 401) {
                alert("Fuel Type Updated Successfully");
              } else {
                this.saveInLocal('FuelDetails', response.data);
                alert(response.Message);
                this.saveInLocal("foredit", true);
                this.ngOnInit();
                this.fuelType = undefined;
                this.colorCode=undefined;
              }
            }
          );
        }

      }
    }
    else {
      alert('Fill all the fields')
    }



  }
  FuelType_delete(i) {
    let data = {

      "Fuel_id": i

    }
    console.log(data);
    this._api.FuelType_delete(data).subscribe(
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
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  reset(){
    this.forcreate = true;
    this.fuelType = undefined;
    this.colorCode=undefined;
  }
}
