import { Component, OnInit, Inject,ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ApiService } from '../../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-createsubservices',
  templateUrl: './createsubservices.component.html',
  styleUrls: ['./createsubservices.component.scss']
})
export class CreatesubservicesComponent implements OnInit {
  ServiceName: any;
  List: any;
  serviceError = false;
  serviceErrorMsg: any;

  mainservice_id: any = undefined;

  SubServiceName: any;
  subserviceError = false;
  subserviceErrorMsg: any;
  subtitle: any;

  Description: any;
  desError = false;
  desErrorMsg: any;

  service_list: any;
  forcreate: any;
  service_id: any;
  subservice_list: any;
  masterservice_list: any;
  mainservice_list: any;
  Service_Cost: any;
  Discount_price: any;
  Included: any;
  newInclude: any;
  newSubservice: any;
  mainServiceName: any;
  Included_new: any = [];
  include_list: any = [];
  specification: any = [];
  specification_new: any = [];
  selectedimgae: any;
  Pic: any = undefined;
  selectedimgae1: any;
  Pic1: any = undefined;
  sub_service_id: any;
  mainServiceId: any;
  Vehicle_Name_id: any = [];
  sub_ser_Spec1: any;
  vehicledetails_list: any = [];
  validate: boolean = false;
  Thmp_list: any = [];
  mainservice_fil_data: any = undefined;
  vehicle_list: any;
  Vehiclename_fil_data: any = undefined;
  vehicle_type: any;
  VehicleType: any = undefined;
  main_list: any;
  vihicle_list: any = [];
  Count: any;
  width: any;
  height: any;
  @ViewChild('imgType', { static: false }) imgType: ElementRef;
  @ViewChild('imgType1', { static: false }) imgType1: ElementRef;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    // this.newInclude =[];  
    //   this.Included.push(this.newInclude);  
    //   console.log(this.Included)
    this._api.getmainservicelist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.main_list = response.Data;
        this.mainservice_list = this.main_list
        console.log("this.mainservice_list");
        console.log(this.mainservice_list);
      }
    );
    this._api.getsubservicelist().subscribe(
      (response: any) => {
        console.log(response);
        this.List = response.Data;
        this.masterservice_list = this.List.filter(x => x.Service_id.Popular == false);
        console.log(this.masterservice_list);

      }
    );

    this._api.vehiclelist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.vehicle_type = response.Data;
        console.log("dfhsjk");
        console.log(this.vehicle_type);
      }
    );

    this._api.vehiclenamedetails_list().subscribe(
      (response: any) => {
        console.log("response.Data");
        console.log(response.Data);
        this.vehicledetails_list = [];
        this.vehicle_list = response.Data;
        for (let a = 0; a < response.Data.length; a++) {
          let data = {
            "Vehicle_Name": response.Data[a].Vehicle_Name,
            "Fuel_Type": response.Data[a].Fuel_Type,
            "Vehicle_Image": response.Data[a].Vehicle_Image,
            "_id": response.Data[a]._id,
            "Vehicle_Type": response.Data[a].Vehicle_Brand_id.Vehicle_Type_id,
            "Vehicle_Brand_Name": response.Data[a].Vehicle_Brand_id.Vehicle_Brand_Name,
            "mfg_year_start": response.Data[a].mfg_year_start,
            "mfg_year_end": response.Data[a].mfg_year_end,
            "Vehicle_Model": response.Data[a].Vehicle_Model,
            "status": "true"
          }
          this.vehicledetails_list.push(data);
          this.vihicle_list.push(data);
        }
        // console.log(response.Data);
        // this.vehicle_list = response.Data;

        console.log(this.vihicle_list);
      }
    );



  }
  editservice(data) {
    this.VehicleType = data.Vehicle_Name_id[0].Vehicle_Type;
    // this.vechiclt_type_select();
    this.vehicledetails_list.map((x) => x.status = "true");
    this.forcreate = false;
    this.sub_service_id = data._id;
    this.SubServiceName = data.sub_ser_Title;
    this.mainservice_id = data.Service_id._id;
    this.Pic = data.sub_ser_image;
    this.Thmp_list = data.sub_ser_display_img;
    this.Included_new = data.ItemList;
    this.Service_Cost = data.Original_Price;
    this.Discount_price = data.Discount_Price;
    this.specification_new = data.sub_ser_Spec1;
    console.log(this.mainservice_id)
    this.Count = data.Count_type;
    this.Vehicle_Name_id = [];
    for (let i = 0; i < data.Vehicle_Name_id.length; i++) {
      this.Vehicle_Name_id.push(data.Vehicle_Name_id[i]._id)
    }

    this.vehicledetails_list.map((x) => {
      if (this.Vehicle_Name_id.some(y => y == x._id)) {
        x.status = "false";
      }
    })
    // for (let a = 0; a < this.vehicledetails_list.length; a++) {
    //   if (this.Vehicle_Name_id == this.vehicledetails_list[a]._id) {
    //     this.vehicledetails_list[a].status = "false";
    //     console.log(this.vehicledetails_list[a]._id);
    //     console.log(this.Vehicle_Name_id);
    //   }
    //   else {
    //     this.vehicledetails_list[a].status = "true";
    //   }
    // }
    window.scrollTo(0, 0);
    // this.router.navigateByUrl('/superadmin/master/create_master_service');

  }
 
 
  subservicecreation() {
    this.validation();
    if (this.validate == true) {
      if (this.forcreate == true || this.forcreate == undefined) {
        console.log("sdfsdasg")
        let data =

        {
          "sub_ser_Title": this.SubServiceName,
          "Service_id": this.mainservice_id,
          "sub_ser_image": this.Pic,
          "sub_ser_display_img": this.Thmp_list,
          "ItemList": this.Included_new,
          "Original_Price": this.Service_Cost,
          "Discount_Price": this.Discount_price,
          "Vehicle_Name_id": this.Vehicle_Name_id,
          "sub_ser_Spec1": this.specification_new,
          "Count_type": this.Count,

        }
        console.log(data);
        // if (this.ServiceName == '') {
        //   this.serviceError = true;
        //   this.serviceErrorMsg = 'Service Name Required.';
        // }
        // else if (this.Description == '') {
        //   this.desError = true;
        //   this.desErrorMsg = 'Description Required.';
        // }
        // else {
        this._api.subservice_save(data).subscribe(
          (response: any) => {
            console.log(response);
            if (response.Code == 422) {
              alert(response.Message);
            } else {
              this.ngOnInit();
              this.reset();
              alert(response.Message);

              // this.router.navigate(['/superadmin/master/create_master_service'])

            }

          }
        );
        // }
      }
      else {
        let data =
        {
          "Subservice_id": this.sub_service_id,
          "sub_ser_Title": this.SubServiceName,
          "Service_id": this.mainservice_id,
          "sub_ser_image": this.Pic,
          "sub_ser_display_img": this.Thmp_list,
          "ItemList": this.Included_new,
          "Original_Price": this.Service_Cost,
          "Discount_Price": this.Discount_price,
          "Vehicle_Name_id": this.Vehicle_Name_id,
          "sub_ser_Spec1": this.specification_new,
          "Count_type": this.Count,
        }
        console.log(data);


        this._api.subservice_edit(data).subscribe(
          (response: any) => {
            console.log(response);
            if (response.Code == 401) {
              alert(response.Message);
            } else {
              this.ngOnInit();
              this.reset();
              alert(response.Message);
              this.forcreate = true;
              //this.router.navigate(['/superadmin/master/create_master_service']);

            }
          }
        );

      }
    }
    else {
      if (this.Pic == undefined || this.Thmp_list.length == 0) {
        alert("Please upload image")
      }
      else {
        alert("Please fill all the fields")
      }
    }

  }
  addRow_new(index) {
    this.newInclude = [this.Included]
    this.Included.push(this.newInclude);
    console.log(this.Included);
    //return true;  
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  addRow() {
    if (this.Included != undefined && this.Included != '') {
      this.newInclude = this.Included;
      this.Included_new.push({ "title": this.newInclude });
      console.log(this.Included_new);
      this.Included = undefined;
    }
    else {
      alert("Please fill the Included field")
    }


  }
  addimg() {
    if (this.Pic1 != undefined) {
      this.Thmp_list.push(this.Pic1);
      this.Pic1 = undefined
      console.log(this.Thmp_list);
    }
    else {
      alert("Please choose a image")
    }
  }
  deleteimg(dynamic, i) {
    console.log(dynamic, i, this.Thmp_list)
    for (let b = 0; b < this.Thmp_list.length; b++) {
      if (this.Thmp_list[b] == dynamic) {
        //this.Location_list[i].status="true";
        this.Thmp_list.splice(b, 1);
      }
      console.log(this.Thmp_list);
    }
  }
  addspecificationRow() {
    if (this.subtitle != undefined && this.subtitle != '') {
      this.newSubservice = this.subtitle;
      this.specification_new.push(this.newSubservice);
      console.log(this.specification_new);
      this.subtitle = undefined;
    }
    else {
      alert("Please fill the specification field")
    }


  }
  // mainservice_select(event) {
  //   this.mainservice_id = event.target.value;
  //   console.log(this.mainservice_id);
  //   console.log(this.mainservice_list);
  //   for (let a = 0; a < this.mainservice_list.length; a++) {
  //     if (this.mainservice_list[a]._id == this.mainservice_id) {
  //       console.log(this.mainservice_list[a])
  //       this.mainServiceName = this.mainservice_list[a];
  //     }
  //   }
  // }
  deleteservice(i) {
    let data = {

      "Subservice_id": i

    }
    console.log(data);
    this._api.deletesubservice_list(data).subscribe(
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

  deleteRow_new(dynamic, i) {
    console.log(dynamic, i, this.Included_new)
    for (let b = 0; b < this.Included_new.length; b++) {
      if (this.Included_new[b] == dynamic) {
        //this.Location_list[i].status="true";
        this.Included_new.splice(b, 1);
      }
      console.log(this.Included_new);
    }
  }
  deleteRow(dynamic, i) {
    console.log(dynamic, i, this.specification_new)
    for (let b = 0; b < this.specification_new.length; b++) {
      if (this.specification_new[b] == dynamic) {
        //this.Location_list[i].status="true";
        this.specification_new.splice(b, 1);
      }
      console.log(this.specification_new);
    }

  }


  get_vehicle_list(item, i) {
    this.vehicledetails_list[i].status = "false";
    // this.Vehicle_Name_id = item._id;
    // for (let a = 0; a < this.vehicledetails_list.length; a++) {
    //   if (a != i) {
    //     this.vehicledetails_list[a].status = "true";
    //   }
    // }


    this.Vehicle_Name_id.push(item._id);
    console.log(this.Vehicle_Name_id);
  }
  remove_vehicle_list(items, i) {
    this.vehicledetails_list[i].status = "true";
    // console.log(items,i, this.selectedvehicle)
    for (let b = 0; b < this.Vehicle_Name_id.length; b++) {
      if (this.Vehicle_Name_id[b] == items._id) {
        // this.vehicledetails_list[i].status="true";
        this.Vehicle_Name_id.splice(b, 1);
      }

    }
    console.log(this.Vehicle_Name_id);


  }
  validation() {
    if ((this.Count != undefined) && (this.SubServiceName != undefined && this.SubServiceName != '') && this.mainservice_id != undefined && this.Pic != undefined && this.Thmp_list.length > 0 && this.Included_new.length > 0 && (this.Service_Cost != undefined && this.Service_Cost != '') && (this.Discount_price != undefined && this.Discount_price != '') && this.Vehicle_Name_id != undefined && this.specification_new.length > 0) {
      this.validate = true;
    }
    else {
      this.validate = false;
    }
  }
  reset() {
    this.vehicledetails_list.map((x) => x.status = "true");
    this.SubServiceName = undefined;
    this.mainservice_id = undefined;
    this.Pic = undefined;
    this.Pic1 = undefined;
    this.Thmp_list = [];
    this.Included_new = [];
    this.Service_Cost = undefined;
    this.Discount_price = undefined;
    this.Vehicle_Name_id = [];
    this.specification_new = [];
    this.subtitle = undefined;
    this.Included = undefined;
    this.Count = undefined;
  }


  filter() {
    if (this.mainservice_fil_data != undefined || this.Vehiclename_fil_data != undefined) {
      this.masterservice_list = this.List.filter(x => x.Service_id.Popular == false);
      if (this.mainservice_fil_data != undefined) {
        this.masterservice_list = this.masterservice_list.filter((x) => x.Service_id._id == this.mainservice_fil_data)
        console.log(this.masterservice_list)
      }

      if (this.Vehiclename_fil_data != undefined) {
        this.masterservice_list = this.masterservice_list.filter((x) => x.Vehicle_Name_id.some((y) => y._id == this.Vehiclename_fil_data))
        console.log(this.masterservice_list)
      }

    }
    else {
      alert("Need valid input")
    }

  }

  refresh() {
    this.masterservice_list = this.List.filter(x => x.Service_id.Popular == false);
  }


  vechiclt_type_select() {
    this.mainservice_list = this.main_list;
    this.vehicledetails_list = this.vihicle_list;
    if (this.VehicleType != undefined) {
      this.mainservice_list = this.mainservice_list.filter(x => (x.Vehicle_Type_id._id == this.VehicleType && x.Popular == false));
      this.vehicledetails_list = this.vehicledetails_list.filter(x => x.Vehicle_Type == this.VehicleType);
      console.log(this.mainservice_list)
    }

    // console.log("type")
    // if (this.singlevehicle_data != undefined) {
    //   this.vehicletypeId = this.VehicleType;
    //   console.log(this.vehicletypeId)
    // }
    // else {
    //   this.vehicletypeId = event.target.value;
    // }
    // if (this.vehicletypeId == "5f0c0d092f857d66950cf260") {
    //   console.log("bike")
    //   this.forcar = false;
    //   this.forbike = true;
    //   console.log(this.forbike)
    //   this.vehiclemodellist = this.body_typ;
    //   this.vehiclemodellist=this.vehiclemodellist.filter(x=> x.Vehicle_Type == "Two Wheeler");
    //   console.log(this.vehiclemodellist)
    // }
    // else if (this.vehicletypeId == "5f0c0cfc2f857d66950cf25f") {
    //   console.log("Car")
    //   this.forcar = true;
    //   this.forbike = false;
    //   this.vehiclemodellist = this.body_typ;
    //   this.vehiclemodellist=this.vehiclemodellist.filter(x=> x.Vehicle_Type == "Four Wheeler")
    //   console.log(this.vehiclemodellist)
    // }
    // console.log(this.vehicletypeId);
    // let data = {
    //   "Vehicle_Type_id": this.vehicletypeId
    // }
    // console.log(data);
    // this._api.vehicleBrandList(data).subscribe(
    //   (response: any) => {
    //     console.log(response.Data);
    //     this.brand_list = response.Data;
    //     console.log(this.brand_list);
    //   }
    // );

    // this._api.PopularvehicleList(data).subscribe(
    //   (response: any) => {
    //     console.log(response.Data);
    //     this.PopularvehicleList = response.Data;
    //     console.log(this.PopularvehicleList);
    //   }
    // );
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

  fileupload1(event) {
    console.log("this.width")
    this.selectedimgae1 = event.target.files[0];
    let fr = new FileReader();
    fr.onload = () => { // when file has loaded
      var img = new Image();
      img.onload = () => {
        this.width = img.width;
        this.height = img.height;
        console.log(this.width, this.height);
        if(this.width == 100 && this.height == 100){
          this.addfiles();
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

    fr.readAsDataURL(this.selectedimgae1);
    this.imgType1.nativeElement.value = ""; // clear the value after upload
  }
  addfiles() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae1, this.selectedimgae1.name);
    this.http.post('http://3.101.31.129:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.Pic1 = res.Data;
      });
  }
}
