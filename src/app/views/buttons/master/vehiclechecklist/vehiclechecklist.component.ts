import { Component, OnInit, Inject, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ApiService } from '../../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-vehiclechecklist',
  templateUrl: './vehiclechecklist.component.html',
  styleUrls: ['./vehiclechecklist.component.scss']
})
export class VehiclechecklistComponent implements OnInit {
  vehiclemodellist: any;
  fuellist: any = [];
  selectedfueltype: any = [];
  selectedvehiclemodellist: any = [];
  vehiclename: any;
  selectedimgae: any;
  selectedimgae1: any;
  brand_id: any;
  Pic: any;
  Pic1: any;

  vehicledetails_list: any;
  vehicle_list: any;
  brand_list: any
  vehicletypeId: any;
  PopularVehicle_list: any;
  PopularvehicleList: any;
  forcar: boolean = false;
  forbike: boolean = false;
  ManufacturerYear = [];
  ManufacturerYearto = [];
  ManufacturerYearforcar = [];
  ManufacturerYeartoforcar = [];
  startyear: any;
  endyear: any;
  ccname: any = undefined;
  VehicleType: any = undefined;
  VehicleModel: any = [];
  VehicleBrand: any=undefined;
  Popular_Vehicle: boolean = false;
  valitation: boolean = false;
  singlevehicle_data: any = undefined;
  view: boolean = false;
  fule_list: any = [];
  body_typ:any=[];
  width: any;
  height: any;
  @ViewChild('imgType', { static: false }) imgType: ElementRef;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) {
    this.singlevehicle_data = this.getFromLocal('vehicle');

  }

  ngOnInit() {
    this._api.getfuellist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.fuellist = response.Data.reverse();
        console.log("this.fuellist");
        console.log(this.fuellist);
      }
    );

    this.ManufacturerYear = [];
    this.ManufacturerYearto = [];
    let d = 1900;
    for (let a = 1; a < 125; a++) {
      d = d + 1;
      this.ManufacturerYear.push(d);
      this.ManufacturerYearto.push(d);

    }
    console.log(this.ManufacturerYear);

    this.brand_id = this.getFromLocal('brandlist');
    this._api.vehicleModellist().subscribe(
      (response: any) => {

        console.log("modeltype");
                console.log(response.Data);
        this.body_typ = response.Data
        this.vehiclemodellist=  this.body_typ;
        console.log(this.vehiclemodellist);
      }
    );
    this._api.vehiclelist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.vehicle_list = response.Data;
        console.log("dfhsjk");
        console.log(this.vehicle_list);
      }
    );
    let data = {
      "Vehicle_Brand_id": this.brand_id
    }
    this._api.vehicledetails_list(data).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.vehicledetails_list = response.Data;
        console.log(this.vehicledetails_list);
      }
    );
    setTimeout(() => {
      if (this.singlevehicle_data != undefined) {
        this.edit();
        console.log("dataget+")
        this.saveInLocal('vehicle', undefined)
      }
    }, 4000)

  }
  vechiclt_type_select(event) {
    console.log("type")
    if (this.singlevehicle_data != undefined) {
      this.vehicletypeId = this.VehicleType;
      console.log(this.vehicletypeId)
    }
    else {
      this.vehicletypeId = event.target.value;
    }
    if (this.vehicletypeId == "5f0c0d092f857d66950cf260") {
      console.log("bike")
      this.forcar = false;
      this.forbike = true;
      console.log(this.forbike)
      this.vehiclemodellist = this.body_typ;
      this.vehiclemodellist=this.vehiclemodellist.filter(x=> x.Vehicle_Type == "Two Wheeler");
      console.log(this.vehiclemodellist)
    }
    else if (this.vehicletypeId == "5f0c0cfc2f857d66950cf25f") {
      console.log("Car")
      this.forcar = true;
      this.forbike = false;
      console.log(this.forcar)
      this.vehiclemodellist = this.body_typ;
      this.vehiclemodellist=this.vehiclemodellist.filter(x=> x.Vehicle_Type == "Four Wheeler")
      console.log(this.vehiclemodellist)
    }
    console.log(this.vehicletypeId);
    let data = {
      "Vehicle_Type_id": this.vehicletypeId
    }
    console.log(data);
    this._api.vehicleBrandList(data).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.brand_list = response.Data;
        console.log(this.brand_list);
      }
    );

    this._api.PopularvehicleList(data).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.PopularvehicleList = response.Data;
        console.log(this.PopularvehicleList);
      }
    );
  }
  onCheckboxforbike(event) {

  }
  onCheckboxChagen(event) {
    if (event.target.checked == true) {
      this.selectedfueltype.push(event.target.value);
    }
    else if (event.target.checked == false) {
      this.selectedfueltype = this.selectedfueltype.filter(val => val !== event.target.value);
    }
    console.log(this.selectedfueltype)
  }

  onCheckboxmodel(event) {
    console.log(event.target.checked)
    if (event.target.checked == true) {
      this.VehicleModel.push(event.target.value);
    }
    else if (event.target.checked == false) {
      this.VehicleModel = this.VehicleModel.filter(val => val !== event.target.value);
    }
    console.log(this.VehicleModel)
  }


  // fileupload(event) {
  //   this.selectedimgae = event.target.files[0];
  //   this.addfiles1();
  // }

  addfiles() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae1, this.selectedimgae1.name);
    this.http.post('http://3.101.31.129:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.Pic1 = res.Data;
      });
  }
  // get_fuel_list(event)
  // {
  //   if (event.target.checked == true) {
  //   console.log(event.target.value);
  //   this.selectedfueltype.push(event.target.value);
  //   console.log(this.selectedfueltype);
  //   }
  //   else if (event.target.checked == false) {
  //     this.selectedfueltype = this.selectedfueltype.filter(val => val !== event.target.value);
  //     console.log(this.selectedfueltype);
  //   }
  // }
  get_fuel_list(item) {

    console.log(item);
    let data = {
      "_id": item._id,
      "Fuel_Name": item.Fuel_Type
    }
    this.selectedfueltype.push(data);
    console.log(this.selectedfueltype);

  }
  // get_vehicle_model(event)
  // {
  //   if (event.target.checked == true) {
  //     console.log(event.target.value);
  //     this.selectedvehiclemodellist.push(event.target.value);
  //     console.log(this.selectedvehiclemodellist);
  //     }
  //     else if (event.target.checked == false) {
  //       this.selectedvehiclemodellist = this.selectedvehiclemodellist.filter(val => val !== event.target.value);
  //       console.log(this.selectedvehiclemodellist);
  //     }
  // }
  get_vehicle_model(item) {

    console.log(item);
    let data = {
      "_id": item._id,
      "Name": item.VehicleModel_Name,
      "Image": item.VehicleModel_Image
    }
    this.selectedvehiclemodellist.push(data);
    console.log(this.selectedvehiclemodellist);

  }
  validation() {
    if (this.forcar) {
      if (this.VehicleBrand != undefined && (this.vehiclename != undefined && this.vehiclename != '') && this.selectedfueltype.length > 0 && this.Popular_Vehicle != undefined && this.startyear != undefined && this.endyear != undefined && (this.VehicleType != undefined) && this.VehicleModel.length > 0 && this.Pic != undefined) {
        this.valitation = true;
        this.ccname = 0;
        console.log(this.valitation)
      }
    }
    if (this.forbike == true) {
      if (this.VehicleBrand != undefined && (this.vehiclename != undefined && this.vehiclename != '') && this.selectedfueltype.length > 0 && this.Popular_Vehicle != undefined && this.startyear != undefined && this.endyear != undefined && (this.VehicleType != undefined) && this.VehicleModel.length > 0 && this.Pic != undefined) {
        this.valitation = true;
        console.log(this.valitation)
      }
    }
  }
  VehicleDetails_save() {
    this.validation();
    if (this.valitation == true) {
      if (this.singlevehicle_data == undefined) {
        let data = {
          "Vehicle_Brand_id": this.VehicleBrand,
          "Vehicle_Name": this.vehiclename,
          "Vehicle_Image": this.Pic,
          "Fuel_Type": this.selectedfueltype,
          "Vehicle_Model": this.VehicleModel,
          "mfg_year_start": this.startyear,
          "mfg_year_end": this.endyear,
          "Vehicle_CC": this.ccname,
          "Popular_Vehicle": this.Popular_Vehicle,
          "Vehicle_Type": this.VehicleType
        }

        console.log(data)
        this._api.vehicledetails_save(data).subscribe(
          (response: any) => {
            console.log(response);
            this.saveInLocal('service_list', response.data);
            alert(response.Message);
            this.ngOnInit();
            // this.router.navigateByUrl('/superadmin/master/listemployees');
            this.router.navigate(['superadmin', 'master', 'VehicleList']);

          }
        );
      }
      else {
        let data = {
          "_id": this.singlevehicle_data._id,
          "Vehicle_Brand_id": this.VehicleBrand,
          "Vehicle_Name": this.vehiclename,
          "Vehicle_Image": this.Pic,
          "Fuel_Type": this.selectedfueltype,
          "Vehicle_Model": this.VehicleModel,
          "mfg_year_start": this.startyear,
          "mfg_year_end": this.endyear,
          "Vehicle_CC": this.ccname,
          "Popular_Vehicle": this.Popular_Vehicle,
          "Vehicle_Type": this.VehicleType
        }

        console.log(data)
        this._api.vehicledetails_edit(data).subscribe(
          (response: any) => {
            console.log(response);
            this.saveInLocal('service_list', response.data);
            alert(response.Message);
            this.ngOnInit();
            // this.router.navigateByUrl('/superadmin/master/listemployees');
            this.router.navigate(['superadmin', 'master', 'VehicleList']);

          }
        );
      }


    }
    else {
      if (this.Pic == undefined) {
        alert('Please upload Image')
      }
      else {
        alert('Fill all the inputs')
      }
    }


  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  fromyear() {
    console.log(this.startyear)
    this.ManufacturerYearto = this.ManufacturerYearto.filter((res) => res > +this.startyear);

    console.log(this.ManufacturerYearto)
  }
  edit() {
    console.log(".fuellist" + this.singlevehicle_data.Vehicle_Model.length)
    this.VehicleType = this.singlevehicle_data.Vehicle_Type._id;
    this.vehiclename = this.singlevehicle_data.Vehicle_Name;
    // this.VehicleModel = this.singlevehicle_data.Vehicle_Model;
    for(let i=0; i<this.singlevehicle_data.Vehicle_Model.length; i++){
      this.VehicleModel.push(this.singlevehicle_data.Vehicle_Model[i]._id);
      console.log("sdfghjkl")
      console.log(this.VehicleModel)
    }
    for(let i=0; i<this.singlevehicle_data.Fuel_Type.length; i++){
      this.selectedfueltype.push(this.singlevehicle_data.Fuel_Type[i]._id);
      console.log("sdfghjkl")
      console.log(this.selectedfueltype)
    }
    this.startyear = this.singlevehicle_data.mfg_year_start;
    this.endyear = this.singlevehicle_data.mfg_year_end;
    this.ccname = this.singlevehicle_data.Vehicle_CC;
    this.VehicleBrand = this.singlevehicle_data.Vehicle_Brand_id._id;
    this.Pic = this.singlevehicle_data.Vehicle_Image;
    this.Popular_Vehicle = this.singlevehicle_data.Popular_Vehicle;
    this.vechiclt_type_select(event);
    // setTimeout(()=>{ this.view = true }, 4000)
    this.fule_list = []
    let array = this.fuellist
    for (let i = 0; i < array.length; i++) {
      if (this.selectedfueltype.some((x) => x == array[i]._id)) {
        this.fule_list.push({ Background_Color: array[i].Background_Color, Fuel_Type: array[i].Fuel_Type, _id: array[i]._id, checked: true })
      }
      else {
        this.fule_list.push({ Background_Color: array[i].Background_Color, Fuel_Type: array[i].Fuel_Type, _id: array[i]._id, checked: false })
      }
      this.fuellist = this.fule_list
      console.log(".fuellist")
      console.log(this.fuellist)
    }
    let arr1 = [];
    let arr2 = this.vehiclemodellist;
    for (let i = 0; i < arr2.length; i++) {
      if (this.VehicleModel.some((x) => x == arr2[i]._id)) {
        arr1.push({
          VehicleModel_Name: arr2[i].VehicleModel_Name, Vehicle_Type: arr2[i].Vehicle_Type, _id: arr2[i]._id, checked: true
        })
      }
      else {
        arr1.push({ VehicleModel_Name: arr2[i].VehicleModel_Name, Vehicle_Type: arr2[i].Vehicle_Type, _id: arr2[i]._id, checked: false })
      }
      this.vehiclemodellist = arr1;
      console.log(".VehicleModel")
      console.log(this.vehiclemodellist)
    }
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
