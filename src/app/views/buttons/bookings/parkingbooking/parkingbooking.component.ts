import { Component, OnInit ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-parkingbooking',
  templateUrl: './parkingbooking.component.html',
  styleUrls: ['./parkingbooking.component.scss']
})
export class ParkingbookingComponent implements OnInit {

  parking_booking_list:any;
  parking_list:any;
  listall:any;
  bookingtablelist:any;
  constructor(
    private router: Router,   

   private http: HttpClient,

   private _api : ApiService,
   @Inject(SESSION_STORAGE) private storage: StorageService) { }

 ngOnInit() { 
   this._api.parking_bookingList().subscribe(
     (response: any) => {
       console.log(response.Data);
       this.parking_list=[];  
       for(let a=0;a<response.Data.length;a++)
       {
          let d={
            select_status:false,
Booking_Confirmation_Amount: response.Data[a].Booking_Confirmation_Amount,
Booking_Id: response.Data[a].Booking_Id,
Booking_In_Date: response.Data[a].Booking_In_Date,
Booking_Out_Date: response.Data[a].Booking_Out_Date,
Charge_per_hour: response.Data[a].Charge_per_hour,
Check_In_Time: response.Data[a].Check_In_Time,
Check_Out_Time: response.Data[a].Check_Out_Time,
City_Booking: response.Data[a].City_Booking,
Customer_Invoice: response.Data[a].Customer_Invoice,
Customer_Name: response.Data[a].Customer_Name,
Customer_Phone: response.Data[a].Customer_Phone,
Final_Payable_Amount: response.Data[a].Final_Payable_Amount,
Floor_Name: response.Data[a].Floor_Name,
Number_hours_booked:response.Data[a].Number_hours_booked,
Parking_Area_Location: response.Data[a].Parking_Area_Location,
Parking_Area_Name: response.Data[a].Parking_Area_Name,
Slot_Number: response.Data[a].Slot_Number,
Sub_Floor_Name: response.Data[a].Sub_Floor_Name,
Usage_Hours: response.Data[a].Usage_Hours,
Vehicle_Type: response.Data[a].Vehicle_Type,
Vendor_Invoice: response.Data[a].Vendor_Invoice,
createdAt: response.Data[a].createdAt,
updatedAt: response.Data[a].updatedAt,
__v:0,
_id: response.Data[a]._id,


          }
          this.parking_list.push(d);
       }
       this.parking_list = response.Data;
       console.log(this.parking_list);
       this.listall=this.parking_list;
     }
   ); 
 }
 changepermission_parking(event)
 {
   console.log(event.target);
   this.parking_list=[];
   if(event.target.checked==true)
   {
     for(let a=0;a<this.listall.length;a++)
     {
        let d={
          select_status:true,
          Booking_Confirmation_Amount: this.listall[a].Booking_Confirmation_Amount,
          Booking_Id: this.listall[a].Booking_Id,
          Booking_In_Date: this.listall[a].Booking_In_Date,
          Booking_Out_Date: this.listall[a].Booking_Out_Date,
          Charge_per_hour: this.listall[a].Charge_per_hour,
          Check_In_Time: this.listall[a].Check_In_Time,
          Check_Out_Time: this.listall[a].Check_Out_Time,
          City_Booking: this.listall[a].City_Booking,
          Customer_Invoice: this.listall[a].Customer_Invoice,
          Customer_Name: this.listall[a].Customer_Name,
          Customer_Phone: this.listall[a].Customer_Phone,
          Final_Payable_Amount: this.listall[a].Final_Payable_Amount,
          Floor_Name: this.listall[a].Floor_Name,
          Number_hours_booked:this.listall[a].Number_hours_booked,
          Parking_Area_Location: this.listall[a].Parking_Area_Location,
          Parking_Area_Name: this.listall[a].Parking_Area_Name,
          Slot_Number: this.listall[a].Slot_Number,
          Sub_Floor_Name: this.listall[a].Sub_Floor_Name,
          Usage_Hours: this.listall[a].Usage_Hours,
          Vehicle_Type: this.listall[a].Vehicle_Type,
          Vendor_Invoice: this.listall[a].Vendor_Invoice,
          createdAt: this.listall[a].createdAt,
          updatedAt: this.listall[a].updatedAt,
          __v:0,
          _id: this.listall[a]._id,
        }
        this.parking_list.push(d);
     } 
   }
   else{
     for(let a=0;a<this.listall.length;a++)
        {
           let d={
             select_status:false,
             Booking_Confirmation_Amount: this.listall[a].Booking_Confirmation_Amount,
             Booking_Id: this.listall[a].Booking_Id,
             Booking_In_Date: this.listall[a].Booking_In_Date,
             Booking_Out_Date: this.listall[a].Booking_Out_Date,
             Charge_per_hour: this.listall[a].Charge_per_hour,
             Check_In_Time: this.listall[a].Check_In_Time,
             Check_Out_Time: this.listall[a].Check_Out_Time,
             City_Booking: this.listall[a].City_Booking,
             Customer_Invoice: this.listall[a].Customer_Invoice,
             Customer_Name: this.listall[a].Customer_Name,
             Customer_Phone: this.listall[a].Customer_Phone,
             Final_Payable_Amount: this.listall[a].Final_Payable_Amount,
             Floor_Name: this.listall[a].Floor_Name,
             Number_hours_booked:this.listall[a].Number_hours_booked,
             Parking_Area_Location: this.listall[a].Parking_Area_Location,
             Parking_Area_Name: this.listall[a].Parking_Area_Name,
             Slot_Number: this.listall[a].Slot_Number,
             Sub_Floor_Name: this.listall[a].Sub_Floor_Name,
             Usage_Hours: this.listall[a].Usage_Hours,
             Vehicle_Type: this.listall[a].Vehicle_Type,
             Vendor_Invoice: this.listall[a].Vendor_Invoice,
             createdAt: this.listall[a].createdAt,
             updatedAt: this.listall[a].updatedAt,
             __v:0,
             _id: this.listall[a]._id,
           }
           this.parking_list.push(d);
        }

   }
 }
 selectall(event)
 {
   if(event.target.checked==false)
   {
     this.bookingtablelist=false;
   }
   else
   {
     let b=0;
     for(let a=0;a<this.parking_list.length;a++)
     {
       if(this.parking_list[a]==true)
       {
         b=1;
       }
       
     }
     if(b==0)
     {
       this.bookingtablelist=true;
     }
   }

 }
 parkingCreation()
 {
   let data={
     
   }
 }
 saveInLocal(key, val): void {
   this.storage.set(key, val);
 }
 
 getFromLocal(key): any {
   return this.storage.get(key);
 }
}
