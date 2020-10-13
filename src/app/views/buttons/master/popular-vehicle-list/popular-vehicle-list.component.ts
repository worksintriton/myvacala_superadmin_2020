import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service'

@Component({
  selector: 'app-popular-vehicle-list',
  templateUrl: './popular-vehicle-list.component.html',
  styleUrls: ['./popular-vehicle-list.component.scss']
})
export class PopularVehicleListComponent implements OnInit {

  ServiceName: any;
  serviceError = false;
  serviceErrorMsg: any;
  
  mainservice_id:any;

  SubServiceName: any;
  subserviceError = false;
  subserviceErrorMsg: any;
  subtitle:any;

  Description: any;
  desError = false;
  desErrorMsg: any;

  service_list: any;
  forcreate: any;
  service_id: any;
  subservice_list: any;
  masterservice_list: any;
  mainservice_list:any;
  Service_Cost:any;
  Discount_price:any;
  Included:any;
  newInclude:any;
  newSubservice:any;
  mainServiceName:any;
  Included_new:any=[];
  include_list:any=[];
  specification:any=[];
  specification_new:any=[];
  selectedimgae:any;
  Pic:any;
  selectedimgae1:any;
  Pic1:any;

  mainServiceId:any;
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
        this.mainservice_list = response.Data.reverse();
        console.log(this.mainservice_list);
      }
    );
    this._api.getsubservicelist().subscribe(
      (response: any) => {
        console.log(response);
        this.masterservice_list = response.Data.reverse();
        console.log(this.masterservice_list);

      }
    );
  }
  editservice(data) {
    let create = false;
    this.saveInLocal('subservices_Details', data);
    this.saveInLocal('foredit', create);
    console.log(data);
    this.mainServiceName=data.Service_id._id;
    this.ServiceName = data.Subservice_Name;
    this.Description = data.Desc;
    this.Discount_price=data.Discount;
    this.Service_Cost=data.Service_Cost;
    this.Included=data.Included;
    this.service_id = data._id;
    console.log(this.Discount_price)
    // this.router.navigateByUrl('/superadmin/master/create_master_service');

  }
  fileupload1(event){
    this.selectedimgae1 = event.target.files[0];
    this.addfiles();
  }
  
  addfiles()
  {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae1, this.selectedimgae1.name);
    this.http.post('https://myvacala.com/api/upload', fd)
    .subscribe((res: any) => {
    console.log(res);
    this.Pic1 = res.Data;
  });
  }
  fileupload(event){
    this.selectedimgae = event.target.files[0];
    this.addfiles1();
  }
  
  addfiles1()
  {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae, this.selectedimgae.name);
    this.http.post('https://myvacala.com/api/upload', fd)
    .subscribe((res: any) => {
    console.log(res);
    this.Pic = res.Data;
  });
  }
  subservicecreation() {

    if (this.forcreate == true || this.forcreate == undefined) {
      let data =
      {
        "Title": this.SubServiceName,
            "SubTitle": this.subtitle,
            "Service_id": this.mainServiceId,
            "Service_Image": this.Pic,
            "Thumb_Line_Image": this.Pic1,
            "Service_Name":this.mainServiceName.Service_Name,
            "ItemList": this.Included_new,
            "Original_Price": this.Service_Cost,
            "Discount_Price": this.Discount_price
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
        this._api.subservice_save(data).subscribe(
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
    }
    else {
      let data =
      {
        "Subservice_id": this.service_id,
        "Service_id": this.mainServiceName,
        "Subservice_Name": this.SubServiceName,
        "Desc": this.Description,
        "SubDesc": ["free pick up", "Wheel alignment"],
        "Time_Taken": "2hours",
        "Service_Cost": this.Service_Cost,
        "Discount":this.Discount_price,
        "Included":this.Included_new
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
  }
  addRow_new(index) {    
    this.newInclude =[this.Included] 
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
    this.newInclude = this.Included;  
    this.Included_new.push(this.newInclude);        
    console.log(this.Included_new);   
     
}

addspecificationRow() {    
  this.newSubservice = this.subtitle;  
  this.specification_new.push(this.newSubservice);        
  console.log(this.specification_new);   
   
}
mainservice_select(event)
{
  this.mainservice_id=event.target.value;
    console.log(this.mainservice_id);
    console.log(this.mainservice_list);
    for(let a =0;a<this.mainservice_list.length;a++)
    {
     if(this.mainservice_list[a]._id==this.mainservice_id)
     {
       console.log(this.mainservice_list[a])
       this.mainServiceName=this.mainservice_list[a];
     } 
    }
}
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
  
deleteRow_new(dynamic,i) {  
  console.log(dynamic,i, this.Included_new)
  for(let b=0; b<this.Included_new.length;b++)
  {
    if(this.Included_new[b]==dynamic)
    {
      //this.Location_list[i].status="true";
      this.Included_new.splice(b, 1);
    }
    console.log(this.Included_new);
  }
}  
deleteRow(dynamic,i) {  
  console.log(dynamic,i, this.specification_new)
  for(let b=0; b<this.specification_new.length;b++)
  {
    if(this.specification_new[b]==dynamic)
    {
      //this.Location_list[i].status="true";
      this.specification_new.splice(b, 1);
    }
    console.log(this.specification_new);
  }
   
}
}

