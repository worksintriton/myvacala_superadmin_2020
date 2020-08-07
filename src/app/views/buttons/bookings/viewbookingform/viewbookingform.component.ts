import { Component, OnInit ,Inject} from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';


@Component({
  selector: 'app-viewbookingform',
  templateUrl: './viewbookingform.component.html',
  styleUrls: ['./viewbookingform.component.scss']
})
export class ViewbookingformComponent implements OnInit {
  Booking_List:any;
  listall:any;
  bookingtablelist:any;
  constructor(   
    private router: Router,   

    private http: HttpClient,

    private _api : ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    
    this._api.BookingList().subscribe(
      (response: any) => {
         console.log(response.Data);
         this.Booking_List=[];        
         for(let a=0;a<response.Data.length;a++)
         {
            let d={
              select_status:false,
              Booking_Date: response.Data[a].Booking_Date,
Booking_Mode: response.Data[a].Booking_Mode,
Booking_Status: response.Data[a].Booking_Status,
Booking_id: response.Data[a].Booking_id,
Current_Booking_Status: response.Data[a].Current_Booking_Status,
Customer_Address: response.Data[a].Customer_Address,
Customer_Email: response.Data[a].Customer_Email,
Customer_Invoice: response.Data[a].Customer_Invoice,
Customer_Name: response.Data[a].Customer_Name,
Customer_Phone: response.Data[a].Customer_Phone,
Customer_id: response.Data[a].Customer_id,
Delivery_Date: response.Data[a].Delivery_Date,
Delivery_Time: response.Data[a].Delivery_Time,
Final_bill_payed: response.Data[a].Final_bill_payed,
Job_Card: response.Data[a].Job_Card,
Lubricant_type: response.Data[a].Lubricant_type,
Mechanic_Name: response.Data[a].Mechanic_Name,
Mechanic_Phone: response.Data[a].Mechanic_Phone,
Mechanic_id: response.Data[a].Mechanic_id,
OTP: response.Data[a].OTP,
Order_Value: response.Data[a].Order_Value,
Payment: response.Data[a].Payment,
Pick_Up_City: response.Data[a].Pick_Up_City,
Pick_Up_Location: response.Data[a].Pick_Up_Location,
Pick_up: response.Data[a].Pick_up,
Pickup_Date: response.Data[a].Pickup_Date,
Pickup_Time: response.Data[a].Pickup_Time,
Services: response.Data[a].Services,
Subserivces:response.Data[a].Subserivces,
TAT: response.Data[a].TAT,
Token_Age: response.Data[a].Token_Age,
Token_Status: response.Data[a].Token_Status,
Unique_Code: response.Data[a].Unique_Code,
Vechicle_Pickup_Images: response.Data[a].Vechicle_Pickup_Images,
Vehicle_Garage_Images: response.Data[a].Vehicle_Garage_Images,
Vehicle_Id:response.Data[a].Vehicle_Id,
Vehicle_No: response.Data[a].Vehicle_No,
Vehicle_Type: response.Data[a].Vehicle_Type,
Vehicledelivery_Status: response.Data[a].Vehicledelivery_Status,
Vehiclepickup_Status: response.Data[a].Vehiclepickup_Status,
Vehicleservice_Status: response.Data[a].Vehicleservice_Status,
Vendor_Invoice: response.Data[a].Vendor_Invoice,
Workshop_Location: response.Data[a].Workshop_Location,
Workshop_Name: response.Data[a].Workshop_Name,
createdAt: response.Data[a].createdAt,
updatedAt: response.Data[a].updatedAt,
__v:  response.Data[a].__v,
_id: response.Data[a]._id,
            }
            this.Booking_List.push(d);
         }
         
         console.log(this.Booking_List);         
         this.listall=this.Booking_List;
      }
      );
  }
  changepermission_parking(event)
  {
    console.log(event.target);
    this.Booking_List=[];
    if(event.target.checked==true)
    {
      for(let a=0;a<this.listall.length;a++)
      {
         let d={
           select_status:true,
           Booking_Date: this.listall[a].Booking_Date,
Booking_Mode : this.listall[a].Booking_Mode,
Booking_Status : this.listall[a].Booking_Status,
Booking_id : this.listall[a].Booking_id,
Current_Booking_Status : this.listall[a].Current_Booking_Status,
Customer_Address : this.listall[a].Customer_Address,
Customer_Email : this.listall[a].Customer_Email,
Customer_Invoice : this.listall[a].Customer_Invoice,
Customer_Name : this.listall[a].Customer_Name,
Customer_Phone : this.listall[a].Customer_Phone,
Customer_id : this.listall[a].Customer_id,
Delivery_Date : this.listall[a].Delivery_Date,
Delivery_Time : this.listall[a].Delivery_Time,
Final_bill_payed : this.listall[a].Final_bill_payed,
Job_Card : this.listall[a].Job_Card,
Lubricant_type : this.listall[a].Lubricant_type,
Mechanic_Name : this.listall[a].Mechanic_Name,
Mechanic_Phone : this.listall[a].Mechanic_Phone,
Mechanic_id : this.listall[a].Mechanic_id,
OTP : this.listall[a].OTP,
Order_Value : this.listall[a].Order_Value,
Payment : this.listall[a].Payment,
Pick_Up_City : this.listall[a].Pick_Up_City,
Pick_Up_Location : this.listall[a].Pick_Up_Location,
Pick_up : this.listall[a].Pick_up,
Pickup_Date : this.listall[a].Pickup_Date,
Pickup_Time : this.listall[a].Pickup_Time,
Services : this.listall[a].Services,
Subserivces:this.listall[a].Subserivces,
TAT : this.listall[a].TAT,
Token_Age : this.listall[a].Token_Age,
Token_Status : this.listall[a].Token_Status,
Unique_Code : this.listall[a].Unique_Code,
Vechicle_Pickup_Images : this.listall[a].Vechicle_Pickup_Images,
Vehicle_Garage_Images : this.listall[a].Vehicle_Garage_Images,
Vehicle_Id:this.listall[a].Vehicle_Id,
Vehicle_No : this.listall[a].Vehicle_No,
Vehicle_Type : this.listall[a].Vehicle_Type,
Vehicledelivery_Status : this.listall[a].Vehicledelivery_Status,
Vehiclepickup_Status : this.listall[a].Vehiclepickup_Status,
Vehicleservice_Status : this.listall[a].Vehicleservice_Status,
Vendor_Invoice : this.listall[a].Vendor_Invoice,
Workshop_Location : this.listall[a].Workshop_Location,
Workshop_Name : this.listall[a].Workshop_Name,
createdAt : this.listall[a].createdAt,
updatedAt : this.listall[a].updatedAt,
__v: this.listall[a].__v,
_id: this.listall[a]._id,
         }
         this.Booking_List.push(d);
      } 
    }
    else{
      for(let a=0;a<this.listall.length;a++)
         {
            let d={
              select_status:false,
              Booking_Date: this.listall[a].Booking_Date,
Booking_Mode : this.listall[a].Booking_Mode,
Booking_Status : this.listall[a].Booking_Status,
Booking_id : this.listall[a].Booking_id,
Current_Booking_Status : this.listall[a].Current_Booking_Status,
Customer_Address : this.listall[a].Customer_Address,
Customer_Email : this.listall[a].Customer_Email,
Customer_Invoice : this.listall[a].Customer_Invoice,
Customer_Name : this.listall[a].Customer_Name,
Customer_Phone : this.listall[a].Customer_Phone,
Customer_id : this.listall[a].Customer_id,
Delivery_Date : this.listall[a].Delivery_Date,
Delivery_Time : this.listall[a].Delivery_Time,
Final_bill_payed : this.listall[a].Final_bill_payed,
Job_Card : this.listall[a].Job_Card,
Lubricant_type : this.listall[a].Lubricant_type,
Mechanic_Name : this.listall[a].Mechanic_Name,
Mechanic_Phone : this.listall[a].Mechanic_Phone,
Mechanic_id : this.listall[a].Mechanic_id,
OTP : this.listall[a].OTP,
Order_Value : this.listall[a].Order_Value,
Payment : this.listall[a].Payment,
Pick_Up_City : this.listall[a].Pick_Up_City,
Pick_Up_Location : this.listall[a].Pick_Up_Location,
Pick_up : this.listall[a].Pick_up,
Pickup_Date : this.listall[a].Pickup_Date,
Pickup_Time : this.listall[a].Pickup_Time,
Services : this.listall[a].Services,
Subserivces:this.listall[a].Subserivces,
TAT : this.listall[a].TAT,
Token_Age : this.listall[a].Token_Age,
Token_Status : this.listall[a].Token_Status,
Unique_Code : this.listall[a].Unique_Code,
Vechicle_Pickup_Images : this.listall[a].Vechicle_Pickup_Images,
Vehicle_Garage_Images : this.listall[a].Vehicle_Garage_Images,
Vehicle_Id:this.listall[a].Vehicle_Id,
Vehicle_No : this.listall[a].Vehicle_No,
Vehicle_Type : this.listall[a].Vehicle_Type,
Vehicledelivery_Status : this.listall[a].Vehicledelivery_Status,
Vehiclepickup_Status : this.listall[a].Vehiclepickup_Status,
Vehicleservice_Status : this.listall[a].Vehicleservice_Status,
Vendor_Invoice : this.listall[a].Vendor_Invoice,
Workshop_Location : this.listall[a].Workshop_Location,
Workshop_Name : this.listall[a].Workshop_Name,
createdAt : this.listall[a].createdAt,
updatedAt : this.listall[a].updatedAt,
__v: this.listall[a].__v,
_id: this.listall[a]._id,
            }
            this.Booking_List.push(d);
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
      for(let a=0;a<this.Booking_List.length;a++)
      {
        if(this.Booking_List[a]==true)
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
}
