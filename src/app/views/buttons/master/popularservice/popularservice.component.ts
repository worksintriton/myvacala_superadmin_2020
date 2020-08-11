import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-popularservice',
  templateUrl: './popularservice.component.html',
  styleUrls: ['./popularservice.component.scss']
})
export class PopularserviceComponent implements OnInit {
  List: any;
  masterservice_list: any;
  subservice_list: any;
  MasterServiceName: any = "5f1ac41b55abee4870516567";
  VehicleType: any = "5f0c0cfc2f857d66950cf25f";
  VehicleType1: any = "5f0c0cfc2f857d66950cf25f";
  mainServiceName: any;
  Description: any;

  masterserive_id: any;

  forcreate: any = true;
  service_id: any;
  mainservice_list: any = [];
  vehicle_list: any;
  selectedimgae: any;
  Pic: any;
  masterservice_name: any;
  selectedvehicle: any = [];
  selectedvehicle_id: any[];
  vehicledetails_list: any = [];
  Popular_Vehicle: boolean = true;
  valdate: boolean = false;
  VehicleType_fil_data: any = undefined;
  master_fil_data: any = undefined;
  selectedimgae1: any;
  Pic1: any;
  imgtitle: any;

  popular_data: any = [];
  pop_img_title: any;
  pop_img_subtitle: any;
  imgList: any = [];
  id:any;
  data:any;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this.mainservice_list = []
    this._api.popular_service_get_daetails().subscribe((res: any) => {
      console.log("hkhh")
      console.log(res.Data)
      this.popular_data = res.Data[0].mobileappdetails[0].popular_service_datas;
      this.id= res.Data[0]._id;
      this.pop_img_title = this.popular_data[0].popular_service_title;
      this.pop_img_subtitle = this.popular_data[0].popular_service_subtile;
      this.imgList = this.popular_data[0].popular_service_image_datas;
      
    });



    // this.forcreate = this.getFromLocal('foredit');
    console.log(this.forcreate);
    this._api.getservicelist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.masterservice_list = response.Data;
        console.log(this.masterservice_list);
      }
    );
    this._api.getmainservicelist().subscribe(
      (response: any) => {
        console.log("vgh");
        console.log(response.Data);
        this.List = response.Data;
        for (let i = 0; i < this.List.length; i++) {
          if (this.List[i].Popular == true) {
            this.mainservice_list.push(this.List[i])
          }
        }

      }
    );
    this._api.vehiclelist().subscribe(
      (response: any) => {
        this.vehicle_list = [];
        for (let a = 0; a < response.Data.length; a++) {
          let data = {
            "Vehicle_Type": response.Data[a].Vehicle_Type,
            "_id": response.Data[a]._id,
            "status": "true"
          }
          this.vehicle_list.push(data);
        }
        // console.log(response.Data);
        // this.vehicle_list = response.Data;
        console.log(this.vehicle_list);
      }
    );

    this._api.vehiclenamedetails_list().subscribe(
      (response: any) => {
        console.log("response.Data");
        console.log(response.Data);
        this.vehicledetails_list = [];
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
            "status": "false"
          }
          this.vehicledetails_list.push(data);
        }
        // console.log(response.Data);
        // this.vehicle_list = response.Data;

        console.log(this.vehicledetails_list);
      }
    );


  }
  deleteservice(i) {
    let data = {

      "Service_id": i

    }
    console.log(data);
    this._api.deletemainservice(data).subscribe(
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
  open_banner(item) {
    //this.saveInLocal('Master_Service',item);
    this.router.navigate(['/superadmin/master/MainServiceBanner']);

  }
  get_vehicle_name(item, i) {
    this.vehicle_list[i].status = "false";
    console.log(item);
    let data = {
      "Vechicle_Type": item.Vehicle_Type,
      "_id": item._id
    }
    this.selectedvehicle.push(item.Vehicle_Type);
    console.log(this.selectedvehicle);

  }
  remove_vehicle_name(items, i) {
    console.log(items, i, this.selectedvehicle)
    for (let b = 0; b < this.selectedvehicle.length; b++) {
      if (this.selectedvehicle[b] == items.Display_Name) {
        this.vehicle_list[i].status = "true";
        this.selectedvehicle.splice(b, 1);
      }
      console.log(this.selectedvehicle);
    }



  }


  get_vehicle_list(item, i) {
    this.vehicledetails_list[i].status = "false";
    // console.log(item);
    // let data={
    //   "Vechicle_Type": item.Vehicle_Type,
    //   "_id":item._id
    // }
    // this.selectedvehicle.push(item.Vehicle_Type);
    // console.log(this.selectedvehicle);

  }
  remove_vehicle_list(items, i) {
    this.vehicledetails_list[i].status = "true";
    // console.log(items,i, this.selectedvehicle)
    // for(let b=0; b<this.selectedvehicle.length;b++)
    // {
    //   if(this.selectedvehicle[b]==items.Display_Name)
    //   {
    //     this.vehicledetails_list[i].status="true";
    //     this.selectedvehicle.splice(b, 1);
    //   }
    //   console.log(this.selectedvehicle);
    // }



  }
  get_vehicle_name_i(item) {
    console.log(item);
    let data = {
      "Vechicle_Type": item.Vehicle_Type,
      "_id": item._id
    }
    console.log(data);
    this.selectedvehicle.push(item.Vehicle_Type);
    console.log(this.selectedvehicle);
    this.selectedvehicle_id.push(item._id);
    console.log(this.selectedvehicle_id);
  }
  editservice(data) {

    this.forcreate = false;
    this.mainServiceName = data.Service_Name;
    this.Description = data.Desc;
    this.Pic = data.Service_Image;
    this.VehicleType = data.Vehicle_Type_id._id;
    this.Popular_Vehicle = data.Popular;
    this.service_id = data._id;
    window.scrollTo(0, 0);


  }
  masterservicelist(event) {
    this.masterserive_id = event.target.value;
    console.log(this.masterserive_id);
    console.log(this.masterservice_list);

    for (let a = 0; a < this.masterservice_list.length; a++) {
      if (this.masterservice_list[a]._id == this.masterserive_id) {
        console.log(this.masterservice_list[a])
        this.masterservice_name = this.masterservice_list[a];
      }
    }
  }


  fileupload1(event) {
    this.selectedimgae1 = event.target.files[0];
    this.addfiles();
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
  fileupload(event) {
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
  subservicecreation() {
    this.validation();
    if (this.valdate == true) {
      console.log(this.forcreate);
      if (this.forcreate == true || this.forcreate == undefined) {
        let data =
        {

          "Service_Name": this.mainServiceName,
          "Master_Service_id": this.MasterServiceName,
          // "Master_Service_Name": "Book a Mechanic",
          // "Vehicle_Type": this.selectedvehicle,
          "Vehicle_Type_id": this.VehicleType,
          "Service_Image": this.Pic,
          "Desc": this.Description,
          "Popular": this.Popular_Vehicle,
        }
        console.log(data);

        this._api.createmainservice(data).subscribe(
          (response: any) => {
            console.log(response);
            if (response.Code == 422) {
              alert(response.Message);
            } else {
              alert(response.Message);
              // this.router.navigate(['/superadmin/master/create_master_service'])
              this.ngOnInit();
            }
          }
        );
        this.reset();
      }
      else {
        let data =
        {
          "Service_id": this.service_id,
          "Service_Name": this.mainServiceName,
          "Master_Service_id": this.MasterServiceName,
          // "Master_Service_Name": "Book a Mechanic",
          // "Vehicle_Type": this.selectedvehicle,
          "Vehicle_Type_id": this.VehicleType,
          "Service_Image": this.Pic,
          "Desc": this.Description,
          "Popular": this.Popular_Vehicle,

        }
        console.log(data);

        this._api.editmainservice(data).subscribe(
          (response: any) => {
            console.log(response);
            if (response.Code == 401) {
              alert(response.Message);
            } else {
              alert(response.Message);
              this.forcreate = true;
              //this.router.navigate(['/superadmin/master/create_master_service']);
              this.ngOnInit();
            }
          }
        );
        this.reset();
      }
    }
    else {
      if (this.Pic == undefined) {
        alert("Please upload image")
      }
      else {
        alert("Please fill all the fields")
      }
    }
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  popular(item) {
    let data =
    {
      "Service_id": item._id,
      "Popular": item.Popular == true ? false : true,

    }
    console.log(data);

    this._api.editmainservice(data).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code == 401) {
          alert(response.Message);
        } else {
          alert(response.Message);
          this.forcreate = true;
          //this.router.navigate(['/superadmin/master/create_master_service']);
          this.ngOnInit();
        }
      }
    );
  }
  validation() {
    if ((this.pop_img_title != undefined && this.pop_img_title != '') && (this.pop_img_subtitle != undefined && this.pop_img_subtitle != '')) {
      this.valdate = true;
    }
    else {
      this.valdate = false;
    }
  }
  reset() {
    this.pop_img_title = undefined;
    this.pop_img_subtitle = undefined;
    this.imgList = [];
  }



  filter() {
    if (this.VehicleType_fil_data != undefined || this.master_fil_data != undefined) {
      this.mainservice_list = this.List;
      if (this.master_fil_data != undefined) {
        this.mainservice_list = this.mainservice_list.filter((x) => x.Master_Service_id._id == this.master_fil_data)
        console.log(this.mainservice_list)
      }
      if (this.VehicleType_fil_data != undefined) {
        this.mainservice_list = this.mainservice_list.filter((x) => x.Vehicle_Type_id._id == this.VehicleType_fil_data)
        console.log(this.mainservice_list)
      }

    }
    else {
      alert("Need valid input")
    }

  }

  refresh() {
    this.mainservice_list = this.List;
  }


  addimg() {
    if (this.Pic1 != undefined && (this.imgtitle != undefined && this.imgtitle != '')) {
      this.imgList.push({ "title": this.imgtitle, "images_link": this.Pic1 });
      this.Pic1 = undefined
      console.log(this.imgList);
    }
    else {
      alert("Fill all the fields")
    }
  }
  deleteimg(dynamic, i) {
    console.log(dynamic, i, this.imgList)
    for (let b = 0; b < this.imgList.length; b++) {
      if (this.imgList[b] == dynamic) {
        //this.Location_list[i].status="true";
        this.imgList.splice(b, 1);
      }
      console.log(this.imgList);
    }
  }

  popularedit() {
    this.validation();
    if (this.valdate == true) {
      if(this.VehicleType1=="5f0c0cfc2f857d66950cf25f"){
        this.data =
        {
          "_id": this.id,
          "mobileappdetails": [
            {
              "Email": "mohammedimthi2395@gmail.com",
              "phone_number": "9514497862",
              "Android_share_link": "https://play.google.com/store",
              "Ios_share_link": "https://play.google.com/store",
              "popular_service_datas":[
                {
                  "Vehicle_type": "Four Wheeler",
                  "popular_service_title": this.pop_img_title,
                  "popular_service_subtile": this.pop_img_subtitle,
                  "popular_service_image_datas": this.imgList
                },
                this.popular_data[1]
              ]
            }
          ]
  
  
        }
      }
      else{
        this.data =
        {
          "_id": this.id,
          "mobileappdetails": [
            {
              "Email": "mohammedimthi2395@gmail.com",
              "phone_number": "9514497862",
              "Android_share_link": "https://play.google.com/store",
              "Ios_share_link": "https://play.google.com/store",
              "popular_service_datas":[
                this.popular_data[0],
                {
                  "Vehicle_type": "Two Wheeler",
                  "popular_service_title": this.pop_img_title,
                  "popular_service_subtile": this.pop_img_subtitle,
                  "popular_service_image_datas": this.imgList
                },
                
              ]
            }
          ]
  
  
        }
      }
     
      console.log(this.data);

      this._api.popular_service_edit(this.data).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code == 422) {
            alert(response.Message);
          } else {
            alert(response.Message);
            // this.router.navigate(['/superadmin/master/create_master_service'])
            this.ngOnInit();
            this.VehicleType1 = "5f0c0cfc2f857d66950cf25f";
          }
        }
      );
      this.reset();
    }
    else {

      alert("Please fill all the fields")

    }
  }
  loaddata(){
    if(this.VehicleType1=="5f0c0cfc2f857d66950cf25f"){
      this.pop_img_title = this.popular_data[0].popular_service_title;
      this.pop_img_subtitle = this.popular_data[0].popular_service_subtile;
      this.imgList = this.popular_data[0].popular_service_image_datas;
    }
    else if(this.VehicleType1=="5f0c0d092f857d66950cf260"){
      this.pop_img_title = this.popular_data[1].popular_service_title;
      this.pop_img_subtitle = this.popular_data[1].popular_service_subtile;
      this.imgList = this.popular_data[1].popular_service_image_datas;
    }
  }
}