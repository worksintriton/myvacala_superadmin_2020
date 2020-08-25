import { Component, OnInit, Inject,  ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
import { trigger } from '@angular/animations';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-createmasterservice',
  templateUrl: './createmasterservice.component.html',
  styleUrls: ['./createmasterservice.component.scss']
})
export class CreatemasterserviceComponent implements OnInit {
  List: any;
  ServiceName: any;
  serviceError = false;
  serviceErrorMsg: any;

  Description: any;
  desError = false;
  desErrorMsg: any;

  service_list: any;
  forcreate: any;
  service_id: any;

  selectedimgae: any;
  Pic: any;
  Location_list: any;
  selectedlocations: any = [];
  selectedvehicle: any = [];

  vehiclelist: any;
  Location_fil_data: any = undefined;
  valdate: boolean = false;
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
    this.forcreate = this.getFromLocal('foredit');
    this._api.getservicelist().subscribe(
      (response: any) => {
        console.log(response);
        this.List = response.Data.reverse();
        this.service_list = this.List;
        console.log(this.service_list);
      }
    );

    this._api.vehiclelist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.vehiclelist = response.Data;
        console.log(this.vehiclelist);
      }
    );

    this._api.LocationList().subscribe(
      (response: any) => {
        console.log("response")
        console.log(response)
        this.Location_list = [];
        for (let a = 0; a < response.Data.length; a++) {
          let data = {
            "Display_Name": response.Data[a].Display_Name,
            "Image": response.Data[a].Image,
            "Location_id": response.Data[a]._id,
            "status": "true",
            "Pincodes": response.Data[a].Pincodes,
          }
          this.Location_list.push(data);
        }
        // console.log(response.Data);
        // this.Location_list = response.Data;
        console.log(this.Location_list);
      }
    );


  }
  open_mainservice(item) {
    this.saveInLocal('Master_Service', item);
    //this.router.navigate(['/superadmin/master/create_main_service']);

  }
  open_banner(item) {
    //this.saveInLocal('Master_Service',item);
    //  this.router.navigate(['/superadmin/master/MasterServiceBanner']);

  }
  editservice(data) {
    this.forcreate = false;
    this.ServiceName = data.Masterservice_Name;
    this.Description = data.Desc;
    this.service_id = data._id;
    this.Pic = data.Service_Image;
    this.selectedlocations = data.Serviceavailable_Location;
    let loc = data.Serviceavailable_Location;
    for(let i=0; i<loc.length; i++){
      this.Location_list.map((x)=>{
        if(x.Display_Name == loc[i]){
          x.status = "false"
        }
      }); 
      console.log(this.Location_list)
    }
  }
  // get_vehicle_name(item)
  // {
  //   console.log(item);
  //   let data={
  //     "Vechicle_Type": item.Display_Name
  //   }
  //   this.selectedvehicle.push(data);
  //   console.log(this.selectedvehicle);
  // }
  get_location_name(item, i) {
    this.Location_list[i].status = "false";
    console.log(item);
    // let data = {
    //   "Serviceavailable_Location": item.Display_Name
    // }
    this.selectedlocations.push(item.Display_Name);
    console.log(this.selectedlocations);

  }
  remove_location_name(items, i) {
    console.log(items, i, this.selectedlocations)
    for (let b = 0; b < this.selectedlocations.length; b++) {
      if (this.selectedlocations[b] == items.Display_Name) {
        this.Location_list[i].status = "true";
        this.selectedlocations.splice(b, 1);
      }
      console.log(this.selectedlocations);
    }



  }
  masterservicecreation() {
    this.validation();
    if (this.valdate == true) {
      if (this.forcreate == true || this.forcreate == undefined) {
        let data =
        {

          "Masterservice_Name": this.ServiceName,
          "Serviceavailable_Location": this.selectedlocations,
          "Service_Image": this.Pic,
          "Desc": this.Description,
          // "services": this.selectedlocations,
          // "Vehicle_Type": this.selectedvehicle

        }
        console.log(data);
        if (this.ServiceName == '') {
          this.serviceError = true;
          this.serviceErrorMsg = 'Service Name Required.';
        }
        else if (this.Description == '') {
          this.desError = true;
          this.desErrorMsg = 'Description Required.';
        }
        else {
          this._api.Masterservice_save(data).subscribe(
            (response: any) => {
              console.log(response);
              if (response.Code == 401) {
                alert(response.Message);
              } else {
                this.reset() ;
                this.saveInLocal('service_list', response.data);
                alert(response.Message);
                this.ngOnInit();

              }
            }
          );
        }
      }
      else {
        let data =
        {

          "Service_id": this.service_id,
          "Masterservice_Name": this.ServiceName,
          "Serviceavailable_Location": this.selectedlocations,
          "Service_Image": this.Pic,
          "Desc": this.Description,

        }
        console.log(data);
        if (this.ServiceName == '') {
          this.serviceError = true;
          this.serviceErrorMsg = 'Service Name Required.';
        }
        else if (this.Description == '') {
          this.desError = true;
          this.desErrorMsg = 'Description Required.';
        }
        else {
          this._api.Masterservice_edit(data).subscribe(
            (response: any) => {
              console.log(response);
              if (response.Code == 401) {
                alert(response.Message);
              } else {
                this.reset() ;
                this.ngOnInit();
                this.saveInLocal('service_list', response.data);
                alert(response.Message);
                this.saveInLocal("PickupBoy_Details", "");
                this.saveInLocal("foredit", true);
                this.router.navigate(['/superadmin/master/create_master_service']);

              }
            }
          );
        }

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
  
  deleteservice(i) {
    let data = {

      "Service_id": i

    }
    console.log(data);
    this._api.deleteservice_list(data).subscribe(
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

  filter() {
    this.service_list = this.List;
    if (this.Location_fil_data != undefined) {
      this.service_list = this.service_list.filter((x) => x.Serviceavailable_Location.some((y) => y == this.Location_fil_data))
      console.log(this.service_list)

    }
    else {
      alert("Need valid input")
    }

  }
  validation() {
    if ((this.ServiceName != undefined && this.ServiceName != '') && this.selectedlocations.length > 0 && this.Pic != undefined && (this.Description != undefined && this.Description != '')) {
      this.valdate = true;
    }
    else {
      this.valdate = false;
    }
  }
  reset() {
    this.ServiceName = undefined;
    this.Description = undefined;
    this.Pic = undefined;
    this.selectedlocations = [];
    this.Location_list.map((x)=>{
        x.status = "true"
    });
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
