import { Component, OnInit ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss']
})
export class ParkingComponent implements OnInit {
  vehicle_list:any;
  VehicleType:any;
  Parkingname:any;
  Ownername:any;
  ownerprimarycontact:any;
  Secondcontact:any;
  poccontact:any;
  gst:any;
  gstaddress:any;
  map:any;
  lat:any;
  lang:any;
  owner_email:any;
  poc_email:any;
  bikeslots:any;
  carslots:any;

  
  newInclude:any;
  Included_new:any[]=[];
  include_list:any[]=[];
  Included:any;
  amount:any;

  newInclude1:any;
  Included_new1:any[]=[];
  include_list1:any[]=[];
  Included1:any;
  amount1:any;

  newInclude2:any;
  Included_new2:any[]=[];
  include_list2:any[]=[];
  Included2:any;
  amount2:any;

  newInclude3:any;
  Included_new3:any[]=[];
  include_list3:any[]=[];
  Included3:any;
  amount3:any;

  newInclude4:any;
  Included_new4:any[]=[];
  include_list4:any[]=[];
  Included4:any;
  amount4:any;

  newInclude5:any;
  Included_new5:any[]=[];
  include_list5:any[]=[];
  Included5:any;
  amount5:any;

  newInclude6:any;
  Included_new6:any[]=[];
  include_list6:any[]=[];
  Included6:any;
  amount6:any;

  newInclude7:any;
  Included_new7:any[]=[];
  include_list7:any[]=[];
  Included7:any;
  amount7:any;
  slotdate1:any;

  bikeslot1:any;
  bike_inlcude1:any[]=[];
  bikeslot2:any;
  bike_inlcude2:any[]=[];
  include_bike1:any[]=[];
  include_bike2:any[]=[];
  area1:any;
  floor1:any;
  slot1:any;

  SlotWeekDaytime1:any;
  SlotWeekDaytime2:any;
  SlotWeekDaytime3:any;
  SlotWeekDaytime4:any;
  SlotWeekDaytime5:any;
  SlotWeekDaytime6:any;
  SlotWeekDaytime7:any;
  SlotWeekDaytime8:any;
  SlotWeekDaytime9:any;
  SlotWeekDaytime10:any;
  SlotWeekDaytime11:any;
  SlotWeekDaytime12:any;
  SlotWeekDaytime13:any;
  SlotWeekDaytime14:any;
  SlotWeekDaytime15:any;
  SlotWeekDaytime16:any;
  AreaName:any;
  SubAreaName:any;
  SlotNumber:any;
  RentperTime:any;
  timefor:any;
  time1:any;
  fortwowheeler:boolean;
  forwfourwheeler:boolean;
  forboth:boolean;

  constructor(
     private router: Router,   

    private http: HttpClient,

    private _api : ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    this.VehicleType=" ";
    this.AreaName=" ";
    this.SubAreaName="";
    this.RentperTime="";
    this.SlotNumber="";
    this.timefor="";

    this.forboth=false;
    this.fortwowheeler=false;
    this.forwfourwheeler=false;

    this.SlotWeekDaytime1="00:00";
    this.SlotWeekDaytime3="00:00";
    this.SlotWeekDaytime5="00:00";
    this.SlotWeekDaytime7="00:00";
    this.SlotWeekDaytime9="00:00";
    this.SlotWeekDaytime11="00:00";  
    this.SlotWeekDaytime13="00:00";
    this.SlotWeekDaytime4="00:00";
    this.SlotWeekDaytime2="00:00";
    this.SlotWeekDaytime6="00:00";
    this.SlotWeekDaytime8="00:00";
    this.SlotWeekDaytime10="00:00";
    this.SlotWeekDaytime12="00:00";   
    this.SlotWeekDaytime14="00:00";
    this._api.vehiclelist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.vehicle_list = response.Data;
        console.log(this.vehicle_list);
      }
    ); 
  }
  eventCheck(event){
    console.log(event.checked);
    if(event.checked==true)
    {
      this.SlotWeekDaytime3=this.SlotWeekDaytime1;
      this.SlotWeekDaytime5=this.SlotWeekDaytime1;
      this.SlotWeekDaytime7=this.SlotWeekDaytime1;
      this.SlotWeekDaytime9=this.SlotWeekDaytime1;
      this.SlotWeekDaytime11=this.SlotWeekDaytime1;    
      this.SlotWeekDaytime13=this.SlotWeekDaytime1;
    }
    else
    {
      this.SlotWeekDaytime3="00:00";
      this.SlotWeekDaytime5="00:00";
      this.SlotWeekDaytime7="00:00";
      this.SlotWeekDaytime9="00:00";
      this.SlotWeekDaytime11="00:00";  
      this.SlotWeekDaytime13="00:00";
    }
    
    }
    eventCheck2(event){
      console.log(event.checked);
      if(event.checked==true)
      {
      this.SlotWeekDaytime4=this.SlotWeekDaytime2;
      this.SlotWeekDaytime6=this.SlotWeekDaytime2;
      this.SlotWeekDaytime8=this.SlotWeekDaytime2;
      this.SlotWeekDaytime10=this.SlotWeekDaytime2;
      this.SlotWeekDaytime12=this.SlotWeekDaytime2;    
      this.SlotWeekDaytime14=this.SlotWeekDaytime2;
      }
      else{
        
    this.SlotWeekDaytime4="00:00";
    this.SlotWeekDaytime2="00:00";
    this.SlotWeekDaytime6="00:00";
    this.SlotWeekDaytime8="00:00";
    this.SlotWeekDaytime10="00:00";
    this.SlotWeekDaytime12="00:00";   
    this.SlotWeekDaytime14="00:00";
      }
      }
      parkingCreation()
      {
        let data={

        }
      }
  create_parking_slot()
  {
    this.SlotWeekDaytime1=this.SlotWeekDaytime1;
    this.SlotWeekDaytime2=this.SlotWeekDaytime2;
    console.log(this.SlotWeekDaytime1,this.SlotWeekDaytime2);
    let slot_available_data=[
      {
        "week":"Monday",
        "Start_Time":this.SlotWeekDaytime1,
        "End_Time": this.SlotWeekDaytime2
      },
      {
        "week":"Tuesday",
        "Start_Time":this.SlotWeekDaytime3,
        "End_Time": this.SlotWeekDaytime4
      },
      {
        "week":"Wednesday",
        "Start_Time":this.SlotWeekDaytime5,
        "End_Time": this.SlotWeekDaytime6
      },
      {
        "week":"Thursday",
        "Start_Time":this.SlotWeekDaytime7,
        "End_Time": this.SlotWeekDaytime8
      },
      {
        "week":"Friday",
        "Start_Time":this.SlotWeekDaytime9,
        "End_Time": this.SlotWeekDaytime10
      },
      {
        "week":"Saturday",
        "Start_Time":this.SlotWeekDaytime11,
        "End_Time": this.SlotWeekDaytime12
      },
      {
        "week":"Friday",
        "Start_Time":this.SlotWeekDaytime13,
        "End_Time": this.SlotWeekDaytime14
      }

    ]    
    let data={    
      "Vehicle_type":this.VehicleType,
      "Area_Name" : this.AreaName,
      "Vendor_Id": "5efaf3af7159b871f31170a0",
      "Sub_Area_Name" : this.SubAreaName,
       "Slot_Number" :this.SlotNumber,
      "Slot_Available_Week" :slot_available_data ,
      "Rent_Time" : this.RentperTime,
       "Rent_Rupees" : this.timefor  
}
this._api.slotList_save(data).subscribe(
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
  addweekdays()
  {
    this.newInclude ={"time1":this.SlotWeekDaytime1, "time2":this.SlotWeekDaytime2,"amount":this.amount};  
    this.Included_new.push(this.newInclude);        
    console.log(this.Included_new); 
    this.SlotWeekDaytime1="00:00";
    this.SlotWeekDaytime2="00:00";
    this.amount="";
  
  }
  deleteaddweekdays(i)
  {
    this.Included_new.splice(i, 1);
  }
  addtuesday()
  {
    this.newInclude1 ={"time1":this.SlotWeekDaytime3, "time2":this.SlotWeekDaytime4,"amount":this.amount1};  
    this.Included_new1.push(this.newInclude1);        
    console.log(this.Included_new1); 
    this.SlotWeekDaytime3="00:00";
    this.SlotWeekDaytime4="00:00";
    this.amount1="";
  
  }
  deletetuesday(i)
  {
    this.Included_new1.splice(i, 1);
  }
  addwedday()
  {
    this.newInclude2 ={"time1":this.SlotWeekDaytime5, "time2":this.SlotWeekDaytime6,"amount":this.amount2};  
    this.Included_new2.push(this.newInclude2);        
    console.log(this.Included_new2); 
    this.SlotWeekDaytime5="00:00";
    this.SlotWeekDaytime6="00:00";
    this.amount2="";
  
  }
  deletewedsday(i)
  {
    this.Included_new2.splice(i, 1);
  }
  addthursday()
  {
    this.newInclude3 ={"time1":this.SlotWeekDaytime7, "time2":this.SlotWeekDaytime8,"amount":this.amount3};  
    this.Included_new3.push(this.newInclude3);        
    console.log(this.Included_new3); 
    this.SlotWeekDaytime7="00:00";
    this.SlotWeekDaytime8="00:00";
    this.amount3="";
  
  }
  deletethursday(i)
  {
    this.Included_new3.splice(i, 1);
  }
  addfriday()
  {
    this.newInclude4 ={"time1":this.SlotWeekDaytime9, "time2":this.SlotWeekDaytime10,"amount":this.amount4};  
    this.Included_new4.push(this.newInclude4);        
    console.log(this.Included_new4); 
    this.SlotWeekDaytime9="00:00";
    this.SlotWeekDaytime10="00:00";
    this.amount4="";
  
  }
  deletefriday(i)
  {
    this.Included_new4.splice(i, 1);
  }
  addsaturday()
  {
    this.newInclude5 ={"time1":this.SlotWeekDaytime11, "time2":this.SlotWeekDaytime12,"amount":this.amount5};  
    this.Included_new5.push(this.newInclude5);        
    console.log(this.Included_new5); 
    this.SlotWeekDaytime11="00:00";
    this.SlotWeekDaytime12="00:00";
    this.amount5="";
  
  }
  deletesaturday(i)
  {
    this.Included_new5.splice(i, 1);
  }
  addsunday()
  {
    this.newInclude6 ={"time1":this.SlotWeekDaytime13, "time2":this.SlotWeekDaytime14,"amount":this.amount6};  
    this.Included_new6.push(this.newInclude6);        
    console.log(this.Included_new6); 
    this.SlotWeekDaytime13="00:00";
    this.SlotWeekDaytime14="00:00";
    this.amount6="";
  
  }
  deletesunday(i)
  {
    this.Included_new6.splice(i, 1);
  }

  addweekdays2()
  {
    this.newInclude7 ={"date1":this.slotdate1,"time1":this.SlotWeekDaytime15, "time2":this.SlotWeekDaytime16,"amount":this.amount2};  
    this.Included_new7.push(this.newInclude7);        
    console.log(this.Included_new7); 
    this.SlotWeekDaytime15="00:00";
    this.SlotWeekDaytime16="00:00";
    this.amount7="";
  
  }
  deleteaddweekdays2(i)
  {
    this.Included_new7.splice(i, 1);
  }
  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
}
addbikeslot()
{
  this.bikeslot1 =this.bikeslots;  
  for(let a =0; a<this.bikeslot1;a++ ){
    this.include_bike1.push(this.bikeslot1);        
    console.log(this.include_bike1); 
  }
  this.bikeslots="";
}
deletebike(i){
  this.include_bike1.splice(i, 1);
}
addcarslot()
{
  this.bikeslot2 =this.carslots;  
  for(let a =0; a<this.bikeslot2;a++ ){
    this.include_bike2.push(this.bikeslot2);        
    console.log(this.include_bike2); 
  }
  this.carslots="";
}
deletcar(i){
  this.include_bike2.splice(i, 1);
}

changepermission(event)
  {
    if (event.target.checked == true) {
      
      this.fortwowheeler=true;
    }  
    else
    {
      this.fortwowheeler=false;

    } 
  }
  changeparkingpermission(event){
    console.log(event)
    if (event.target.checked == true) {
     
      this.forwfourwheeler = true;
      
    }
    else
    {
      this.forwfourwheeler = false; 
    }
  
     
    
  }
  
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  
  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
