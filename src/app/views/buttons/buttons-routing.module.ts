import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { PatientListComponent } from './patient-list/patient-list.component';
import { ViewPatientDetailsComponent } from './view-patient-details/view-patient-details.component';
import { HomeBannerComponent } from './admin/home-banner/home-banner.component';
import { AdminuserlistComponent } from './admin/adminuserlist/adminuserlist.component';
import { AdminusercreateComponent } from './admin/adminusercreate/adminusercreate.component';
import { AccessrollComponent } from './admin/accessroll/accessroll.component';
import { SubcatdoctorComponent } from './admin/subcatdoctor/subcatdoctor.component';
import { SymptomsComponent } from './admin/symptoms/symptoms.component';
import { SpecializationsComponent } from './admin/specializations/specializations.component';
import { CreatedoctorsComponent } from './doctor/createdoctors/createdoctors.component';
import { ListdoctorsComponent } from './doctor/listdoctors/listdoctors.component';
import { ViewDoctorsComponent } from './doctor/view-doctors/view-doctors.component';
import { AppusersComponent } from './admin/appusers/appusers.component';
import { CreatedriverformComponent } from './driverdetails/createdriverform/createdriverform.component';
import { ViewdriverformComponent } from './driverdetails/viewdriverform/viewdriverform.component';
import { EditdriverformComponent } from './driverdetails/editdriverform/editdriverform.component';
import { ListdriverformComponent } from './driverdetails/listdriverform/listdriverform.component';
import { CreatemachanicformComponent } from './machanicdetails/createmachanicform/createmachanicform.component';
import { ViewmachanicformComponent } from './machanicdetails/viewmachanicform/viewmachanicform.component';
import { EditmachanicformComponent } from './machanicdetails/editmachanicform/editmachanicform.component';
import { ListmachanicformComponent } from './machanicdetails/listmachanicform/listmachanicform.component';

import { ViewserviceformComponent } from './servicedetails/viewserviceform/viewserviceform.component';
import { ListsubserviceformComponent } from './subservicedetails/listsubserviceform/listsubserviceform.component';
import { EditsubserviceformComponent } from './subservicedetails/editsubserviceform/editsubserviceform.component';
import { ViewsubserviceformComponent } from './subservicedetails/viewsubserviceform/viewsubserviceform.component';
import { CreatesubserviceformComponent } from './subservicedetails/createsubserviceform/createsubserviceform.component';
import { VehicletypeformComponent } from './master/vehicletypeform/vehicletypeform.component';
import { CreatemasterserviceComponent } from './servicedetails/createmasterservice/createmasterservice.component';
import { CreatesubservicesComponent } from './servicedetails/createsubservices/createsubservices.component';
import { ViewbookingformComponent } from './bookings/viewbookingform/viewbookingform.component';
import { ViewbookingestimationComponent } from './bookings/viewbookingestimation/viewbookingestimation.component';
// import { OtploginComponent } from './otplogin/otplogin.component';
// import { OtpvalidationComponent } from './otpvalidation/otpvalidation.component';
import { PaymentsComponent } from './payments/payments.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { DriverbookingsComponent } from './driverdetails/driverbookings/driverbookings.component';
import { MechanicbookingsComponent } from './machanicdetails/mechanicbookings/mechanicbookings.component';
import { AddroleComponent } from './rolemanagement/addrole/addrole.component';
import { AddemployeesComponent } from './rolemanagement/addemployees/addemployees.component';
import { ListemployeesComponent } from './rolemanagement/listemployees/listemployees.component';
import { ChartsComponent } from './statatics/charts/charts.component';
import { PermissionComponent } from './rolemanagement/permission/permission.component';
import { Team2Component } from './customercare/team2/team2.component';
import { EstimationapprovalComponent } from './customercare/estimationapproval/estimationapproval.component';
import { MechanicapprovedComponent } from './mechanicapproved/mechanicapproved.component';
import { ServiceofsubservicesComponent } from './serviceofsubservices/serviceofsubservices.component';
import { FueltypeComponent } from './fueltype/fueltype.component';
import { VehiclebrandComponent } from './vehiclebrand/vehiclebrand.component';
import { CreteamComponent } from './creteam/creteam.component';
import { ParkingComponent } from './parking/parking.component';
import { ListparkingComponent } from './listparking/listparking.component';
import { ParkingbookingComponent } from './bookings/parkingbooking/parkingbooking.component';
import { ViewindividualbookingComponent } from './bookings/viewindividualbooking/viewindividualbooking.component';
import { ViewpaymentbookinlistComponent } from './payments/viewpaymentbookinlist/viewpaymentbookinlist.component';
import { RevokeemployeeComponent } from './rolemanagement/revokeemployee/revokeemployee.component';
import { CustomersComponent } from './customers/customers.component';
import { ViewsinglelistComponent } from './customercare/viewsinglelist/viewsinglelist.component';
import { ViewparkingbookigsinglelistComponent } from './customercare/viewparkingbookigsinglelist/viewparkingbookigsinglelist.component';
import { BrandComponent } from './master/brand/brand.component';
import { BrandListComponent } from './master/brand-list/brand-list.component';
import { PopularVehicleComponent } from './master/popular-vehicle/popular-vehicle.component';
import { PopularVehicleListComponent } from './master/popular-vehicle-list/popular-vehicle-list.component';
import { LocationComponent } from './master/location/location.component';
import { LocationListComponent } from './master/location-list/location-list.component';
import { VehicleListComponent } from './master/vehicle-list/vehicle-list.component';
import { VehicleModelComponent } from './master/vehicle-model/vehicle-model.component';
import { VehiclechecklistComponent } from './master/vehiclechecklist/vehiclechecklist.component';
import { UserlistComponent } from './master/userlist/userlist.component';
import { UserlocationlistComponent } from './master/userlocationlist/userlocationlist.component';
import { FaqComponent } from './master/faq/faq.component';
import { NotificationComponent } from './master/notification/notification.component';
import { CartComponent } from './master/cart/cart.component';
import { BannerComponent } from './master/banner/banner.component';
import { MainservicebannerComponent } from './master/mainservicebanner/mainservicebanner.component';
import { OperationsmechanicbookingsComponent } from './creteam/operationsmechanicbookings/operationsmechanicbookings.component';
import { OperationsparkingbookingsComponent } from './creteam/operationsparkingbookings/operationsparkingbookings.component';
import { OpenmechanicbookingsComponent } from './payments/openmechanicbookings/openmechanicbookings.component';
import { ViewparkingcbookinglistComponent } from './creteam/viewparkingcbookinglist/viewparkingcbookinglist.component';
import { OpenparkingbookingsComponent } from './payments/openparkingbookings/openparkingbookings.component';
import { ViewparkingbookinglistComponent } from './payments/viewparkingbookinglist/viewparkingbookinglist.component';
import { ViewpaymentparkingbookinglistComponent } from './payments/viewpaymentparkingbookinglist/viewpaymentparkingbookinglist.component';
import { OpenccmechanicbookinglistComponent } from './customercare/estimationapproval/openccmechanicbookinglist/openccmechanicbookinglist.component';
import { OpenccparkingbookinglistComponent } from './customercare/estimationapproval/openccparkingbookinglist/openccparkingbookinglist.component';
import { ViewmechanicbookinglistComponent } from './creteam/viewmechanicbookinglist/viewmechanicbookinglist.component';
import { PopularserviceComponent } from './master/popularservice/popularservice.component';
import { SubscriptionsComponent } from './master/subscriptions/subscriptions.component';
import { QrcodeComponent } from './parking/qrcode/qrcode.component';
import { FlashscreenComponent } from './master/flashscreen/flashscreen.component';
import { UploadimageurlComponent } from './uploadimageurl/uploadimageurl.component';
import { CouponCodeComponent } from './coupon-code/coupon-code.component';
import { EditemployeeComponent } from './rolemanagement/editemployee/editemployee.component';
import { EngineccComponent } from './master/enginecc/enginecc.component';
import { PopularSubServiceComponent } from './master/popular-sub-service/popular-sub-service.component';
import { ParkingEditComponent } from './parking/parking-edit/parking-edit.component';
import { parkingCouponCodeComponent } from './parking/coupon-code/coupon-code.component';
import { ViwecartComponent } from './master/cart/viwecart/viwecart.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Master'
    },
    children: [
      {
        path: '',
        redirectTo: 'master'
      },
      


      


      {
        path: 'Patient_list',
        component: PatientListComponent,
        data: {
          title: 'Brand buttons'
        }
      },


      {
        path: 'View_patient_profile',
        component: ViewPatientDetailsComponent,
        data: {
          title: 'Brand buttons'
        }
      },

      {
        path: 'Home_banner',
        component: HomeBannerComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'Main_SErvice_banner',
        component: MainservicebannerComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'PopularService',
        component: PopularserviceComponent,
        data: {
          title: 'Brand buttons'
        }
      },
         {
        path: 'Subscriptions',
        component: SubscriptionsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'PopularSubService',
        component: PopularVehicleListComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'QRCodeGeneration',
        component: QrcodeComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'FlashScreen',
        component: FlashscreenComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'ImageURL',
        component: UploadimageurlComponent,
        data: {
          title: 'Brand buttons'
        }
      },

      {
        path: 'admin_user_list',
        component: AdminuserlistComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'admin_user_create',
        component: AdminusercreateComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'accessroll',
        component: AccessrollComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'subcatdoctor',
        component: SubcatdoctorComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'symptoms',
        component: SymptomsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'specializations',
        component: SpecializationsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'Appuserlist',
        component: AppusersComponent,
        data: {
          title: 'Brand buttons'
        }
      },



      {
        path: 'create_doctors',
        component: CreatedoctorsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'List_doctors',
        component: ListdoctorsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'view_doctors',
        component: ViewDoctorsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'vehicle_type',
        component: VehicletypeformComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      
      ///Driver Process///
      
      {
        path: 'create_driver',
        component: CreatedriverformComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'driverbookings',
        component: DriverbookingsComponent,
        data: {
          title: 'Brand buttons'
        }
      }
      ,
      {
        path: 'edit_driver',
        component: EditdriverformComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'list_driver',
        component: ListdriverformComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      ///Mechanic Process///
      
      {
        path: 'create_mechanic',
        component: CreatemachanicformComponent,
        data: {
          title: 'Create Mechanic'
        }
      },
      {
        path: 'mechanicbookings',
        component:MechanicbookingsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'edit_mechanic',
        component: EditmachanicformComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'list_mechanic',
        component: ListmachanicformComponent,
        data: {
          title: 'Mechanic list '
        }
      },
      ///Serive Process///
      {
        path: 'create_master_service',
        component: CreatemasterserviceComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'userlist',
        component: UserlistComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'notification',
        component: NotificationComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'cart',
        component: CartComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'faq',
        component: FaqComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'MasterServiceBanner',
        component: BannerComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'operationmechanicbookings',
        component: OperationsmechanicbookingsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'operationparkingbookings',
        component: OperationsparkingbookingsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'MainServiceBanner',
        component: MainservicebannerComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'userlocationlist',
        component: UserlocationlistComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      
      {
        path: 'create_main_service',
        component: ServiceofsubservicesComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'sub_service',
        component: CreatesubservicesComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'mechanic_approval',
        component: MechanicapprovedComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      //Customer care
      {
        path: 'team1',
        component: EstimationapprovalComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'team2',
        component: Team2Component,
        data: {
          title: 'Brand buttons'
        }
      },
    
      ///Sub Serive Process///
      
      {
        path: 'create_sub_service',
        component: CreatesubserviceformComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'view_sub_service',
        component: ViewsubserviceformComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'edit_sub_service',
        component: EditsubserviceformComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'list_sub_service',
        component: ListsubserviceformComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'view_bookings',
        component: ViewbookingformComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'view_estimation',
        component: ViewbookingestimationComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      // {
      //   path: 'login_1',
      //   component: OtploginComponent,
      //   data: {
      //     title: 'Brand buttons'
      //   }
      // },
      // {
      //   path: 'otp_login',
      //   component: OtpvalidationComponent,
      //   data: {
      //     title: 'Brand buttons'
      //   }
      // },
      {
        path: 'payments',
        component: PaymentsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'downloads',
        component: DownloadsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      // Role management
      {
        path: 'addrole',
        component: AddroleComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'addemployees',
        component: AddemployeesComponent,
        data: {
          title: 'Add Employees'
        }
      },
      {
        path: 'edit_employees',
        component: EditemployeeComponent,
        data: {
          title: 'Edit employees'
        }
      },
      {
        path: 'listemployees',
        component: ListemployeesComponent,
        data: {
          title: 'List Employees'
        }
      },
      {
        path: 'revokemployees',
        component: RevokeemployeeComponent,
        data: {
          title: 'Suspended Employees'
        }
      },
      {
        path: 'charts',
        component: ChartsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'permissions',
        component: PermissionComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'Fuel_Type',
        component: FueltypeComponent,
        data: {
          title: 'Fuel Type'
        }
      },
      {
        path: 'Vehicle_Brand',
        component: VehiclebrandComponent,
        data: {
          title: 'Vehicle Brand'
        }
      },
      {
        path: 'cre_team',
        component: CreteamComponent,
        data: {
          title: 'Operations'
        }
      },
      {
        path: 'parking',
        component: ParkingComponent,
        data: {
          title: 'Parking'
        }
      },
      {
        path: 'list_parking',
        component: ListparkingComponent,
        data: {
          title: 'Parking List'
        }
      },
      {
        path: 'edit_parking',
        component: ParkingEditComponent,
        data: {
          title: 'Edit Parking'
        }
      },

      {
        path: 'booking_parking',
        component: ParkingbookingComponent,
        data: {
          title: 'Booking Parking'
        }
      },
      {
        path: 'view_individual_booking',
        component: ViewindividualbookingComponent,
        data: {
          title: 'Individual Booking'
        }
      },
      {
        path: 'view_payment_booking',
        component: ViewpaymentbookinlistComponent,
        data: {
          title: 'View Booking Details'
        }
      },
      {
        path: 'customer',
        component: CustomersComponent,
        data: {
          title: 'Customer Details'
        }
      },
      {
        path: 'viewsinglelistpayments',
        component: ViewsinglelistComponent,
        data: {
          title: 'Customer Details'
        }
      },
      {
        path: 'viewsingleparkinglist',
        component: ViewparkingbookigsinglelistComponent,
        data: {
          title: 'Customer Details'
        }
      },
      {
        path: 'Brand',
        component: BrandComponent,
        data: {
          title: 'Brand'
        }
      },
      {
        path: 'BrandList',
        component: BrandListComponent,
        data: {
          title: 'BrandList'
        }
      },
      {
        path: 'VehicleList',
        component: VehicleListComponent,
        data: {
          title: 'Vehicle List'
        }
      },
      {
        path: 'VehicleModel',
        component: VehicleModelComponent,
        data: {
          title: 'Vehicle Model'
        }
      },
      {
        path: 'VehicleName',
        component: VehiclechecklistComponent,
        data: {
          title: 'PopularVehicle'
        }
      },
      {
        path: 'Enginecc',
        component: EngineccComponent,
        data: {
          title: 'Enginecc'
        }
      },
      {
        path: 'PopularVehicle',
        component: PopularVehicleComponent,
        data: {
          title: 'PopularVehicle'
        }
      },
    
      {
        path: 'Locations',
        component: LocationComponent,
        data: {
          title: 'Location'
        }
      },
      {
        path: 'LocationsList',
        component: LocationListComponent,
        data: {
          title: 'LocationList'
        }
      },
      {
        path: 'PaymentMechanicBookingList',
        component: OpenmechanicbookingsComponent,
        data: {
          title: 'Payments/View Mechanic Bookings'
        }
      },
      {
        path: 'PaymentParkingBookingList',
        component: OpenparkingbookingsComponent,
        data: {
          title: 'Payments/View Parking Bookings'
        }
      },
      {
        path: 'Payment_View_MechanicBookingList',
        component: ViewpaymentbookinlistComponent,
        data: {
          title: 'Payments/View Mechanic Bookings'
        }
      },
      {
        path: 'Payment_View_ParkingBookingList',
        component: ViewpaymentparkingbookinglistComponent,
        data: {
          title: 'Payments/View Parking Bookings'
        }
      },
      {
        path: 'Operation_View_ParkingBookingList',
        component: OpenccparkingbookinglistComponent,
        data: {
          title: 'Payments/View Parking Bookings'
        }
      },
      {
        path: 'Operation_View_MechanicBookingList',
        component: OpenccmechanicbookinglistComponent,
        data: {
          title: 'Payments/View Parking Bookings'
        }
      },
      {
        path: 'OperationView_MechanicBookingList',
        component: ViewparkingcbookinglistComponent,
        data: {
          title: 'Payments/View Parking Bookings'
        }
      },
        {
        path: 'View_ParkingBookingList',
        component: ViewparkingbookigsinglelistComponent,
        data: {
          title: 'Payments/View Parking Bookings'
        }
      },
      {
        path: 'View_MechanicBookingList',
        component: ViewmechanicbookinglistComponent,
        data: {
          title: 'Operations / View Mechanic Bookings'
        }
      },
      {
        path: 'couponcode',
        component: CouponCodeComponent,
        data: {
          title: 'Coupon Code'
        }
      },
      {
        path: 'parking_couponcode',
        component: parkingCouponCodeComponent,
        data: {
          title: 'Coupon Code'
        }
      },
      {
        path: 'Popular_SubService',
        component: PopularSubServiceComponent,
        data: {
          title: 'Popular_SubService'
        }
      },
      {
        path: 'view_cart_details',
        component: ViwecartComponent,
        data: {
          title: 'Cart Details'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule {}
