import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Buttons Routing
import { ButtonsRoutingModule } from './buttons-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { ViewPatientDetailsComponent } from './view-patient-details/view-patient-details.component';

import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

import { Daterangepicker } from 'ng2-daterangepicker';

import { StorageServiceModule } from 'angular-webstorage-service';
import { AdminuserlistComponent } from './admin/adminuserlist/adminuserlist.component';
import { AdminusercreateComponent } from './admin/adminusercreate/adminusercreate.component';
import { AccessrollComponent } from './admin/accessroll/accessroll.component';
import { HomeBannerComponent } from './admin/home-banner/home-banner.component';
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
import { CreatesubserviceformComponent } from './subservicedetails/createsubserviceform/createsubserviceform.component';
import { ViewsubserviceformComponent } from './subservicedetails/viewsubserviceform/viewsubserviceform.component';
import { VehicletypeformComponent } from './master/vehicletypeform/vehicletypeform.component';
import { CreatemasterserviceComponent } from './servicedetails/createmasterservice/createmasterservice.component';
import { CreatesubservicesComponent } from './servicedetails/createsubservices/createsubservices.component';
import { ViewbookingformComponent } from './bookings/viewbookingform/viewbookingform.component';
import { OtploginComponent } from './otplogin/otplogin.component';
import { ViewbookingestimationComponent } from './bookings/viewbookingestimation/viewbookingestimation.component';
import { OtpvalidationComponent } from './otpvalidation/otpvalidation.component';
import { PaymentsComponent } from './payments/payments.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { DriverbookingsComponent } from './driverdetails/driverbookings/driverbookings.component';
import { MechanicbookingsComponent } from './machanicdetails/mechanicbookings/mechanicbookings.component';
import { AddemployeesComponent } from './rolemanagement/addemployees/addemployees.component';
import { ListemployeesComponent } from './rolemanagement/listemployees/listemployees.component';
import { AddroleComponent } from './rolemanagement/addrole/addrole.component';
import { ChartsComponent } from './statatics/charts/charts.component';
import { PermissionComponent } from './rolemanagement/permission/permission.component';
import { EstimationapprovalComponent } from './customercare/estimationapproval/estimationapproval.component';
import { Team2Component } from './customercare/team2/team2.component';
import { MechanicapprovedComponent } from './mechanicapproved/mechanicapproved.component';
import { ServiceofsubservicesComponent } from './serviceofsubservices/serviceofsubservices.component';
import { FueltypeComponent } from './fueltype/fueltype.component';
import { VehiclebrandComponent } from './vehiclebrand/vehiclebrand.component';
import { CreteamComponent } from './creteam/creteam.component';
import { ParkingComponent } from './parking/parking.component';
import { ListparkingComponent } from './listparking/listparking.component';
import { ViewindividualbookingComponent } from './bookings/viewindividualbooking/viewindividualbooking.component';
import { ParkingbookingComponent } from './bookings/parkingbooking/parkingbooking.component';
import { ViewpaymentbookinlistComponent } from './payments/viewpaymentbookinlist/viewpaymentbookinlist.component';
import { RevokeemployeeComponent } from './rolemanagement/revokeemployee/revokeemployee.component';
import { CustomersComponent } from './customers/customers.component';
import { ViewsinglelistComponent } from './customercare/viewsinglelist/viewsinglelist.component';
import { ViewparkingbookigsinglelistComponent } from './customercare/viewparkingbookigsinglelist/viewparkingbookigsinglelist.component';
import { BrandComponent } from './master/brand/brand.component';
import { BrandListComponent } from './master/brand-list/brand-list.component';
import { PopularVehicleComponent } from './master/popular-vehicle/popular-vehicle.component';
import { PopularVehicleListComponent } from './master/popular-vehicle-list/popular-vehicle-list.component';
import { VehicleListComponent } from './master/vehicle-list/vehicle-list.component';
import { LocationComponent } from './master/location/location.component';
import { LocationListComponent } from './master/location-list/location-list.component';
import { VehicleModelComponent } from './master/vehicle-model/vehicle-model.component';
import { VehiclechecklistComponent } from './master/vehiclechecklist/vehiclechecklist.component';
import { UserlocationlistComponent } from './master/userlocationlist/userlocationlist.component';
import { UserlistComponent } from './master/userlist/userlist.component';
import { NotificationComponent } from './master/notification/notification.component';
import { FaqComponent } from './master/faq/faq.component';
import { CartComponent } from './master/cart/cart.component';
import { BannerComponent } from './master/banner/banner.component';
import { MainservicebannerComponent } from './master/mainservicebanner/mainservicebanner.component';
import { OperationsmechanicbookingsComponent } from './creteam/operationsmechanicbookings/operationsmechanicbookings.component';
import { OperationsparkingbookingsComponent } from './creteam/operationsparkingbookings/operationsparkingbookings.component';
import { OpenmechanicbookingsComponent } from './payments/openmechanicbookings/openmechanicbookings.component';
import { OpenparkingbookingsComponent } from './payments/openparkingbookings/openparkingbookings.component';
import { ViewparkingbookinglistComponent } from './payments/viewparkingbookinglist/viewparkingbookinglist.component';
import { ViewmechanicbookinglistComponent } from './creteam/viewmechanicbookinglist/viewmechanicbookinglist.component';
import { ViewparkingcbookinglistComponent } from './creteam/viewparkingcbookinglist/viewparkingcbookinglist.component';
import { ViewpaymentparkingbookinglistComponent } from './payments/viewpaymentparkingbookinglist/viewpaymentparkingbookinglist.component';
import { ViewccbookinglistComponent } from './customercare/estimationapproval/viewccbookinglist/viewccbookinglist.component';
import { ViewccparkingbookinglistComponent } from './customercare/estimationapproval/viewccparkingbookinglist/viewccparkingbookinglist.component';
import { OpenccparkingbookinglistComponent } from './customercare/estimationapproval/openccparkingbookinglist/openccparkingbookinglist.component';
import { OpenccmechanicbookinglistComponent } from './customercare/estimationapproval/openccmechanicbookinglist/openccmechanicbookinglist.component';
import { PopularserviceComponent } from './master/popularservice/popularservice.component';
import { SubscriptionsComponent } from './master/subscriptions/subscriptions.component';
import { QrcodeComponent } from './parking/qrcode/qrcode.component';
import { FlashscreenComponent } from './master/flashscreen/flashscreen.component';
import { UploadimageurlComponent } from './uploadimageurl/uploadimageurl.component';
import { CouponCodeComponent } from './coupon-code/coupon-code.component';
import { NgDatepickerModule } from 'ng2-datepicker';
// Angul
import { DataTableModule } from 'ng-angular8-datatable';
import { EditemployeeComponent } from './rolemanagement/editemployee/editemployee.component';
import { EngineccComponent } from './master/enginecc/enginecc.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PopularSubServiceComponent } from './master/popular-sub-service/popular-sub-service.component';
import { ParkingEditComponent } from './parking/parking-edit/parking-edit.component';
@NgModule({
  imports: [
    CommonModule,
    StorageServiceModule,
    ButtonsRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    Daterangepicker,
    NgDatepickerModule,
    DataTableModule,
    Ng2SearchPipeModule 
  ],
  declarations: [
    PatientListComponent,
    ViewPatientDetailsComponent,
    AdminuserlistComponent,
    AdminusercreateComponent,
    AccessrollComponent,
    HomeBannerComponent,
    SubcatdoctorComponent,
    SymptomsComponent,
    SpecializationsComponent,
    CreatedoctorsComponent,
    ListdoctorsComponent,
    ViewDoctorsComponent,
    AppusersComponent,
    CreatedriverformComponent,
    ViewdriverformComponent,
    EditdriverformComponent,
    ListdriverformComponent,
    CreatemachanicformComponent,
    ViewmachanicformComponent,
    EditmachanicformComponent,
    ListmachanicformComponent,
    ViewserviceformComponent,
    ListsubserviceformComponent,
    EditsubserviceformComponent,
    CreatesubserviceformComponent,
    ViewsubserviceformComponent,
    VehicletypeformComponent,
    CreatemasterserviceComponent,
    CreatesubservicesComponent,
    ViewbookingformComponent,
    // OtploginComponent,
    // OtpvalidationComponent,
    ViewbookingestimationComponent,
    PaymentsComponent,
    NotificationsComponent,
    DownloadsComponent,
    DriverbookingsComponent,
    MechanicbookingsComponent,
    AddemployeesComponent,
    ListemployeesComponent,
    AddroleComponent,
    ChartsComponent,
    PermissionComponent,
    EstimationapprovalComponent,
    Team2Component,
    MechanicapprovedComponent,
    ServiceofsubservicesComponent,
    FueltypeComponent,
    VehiclebrandComponent,
    CreteamComponent,
    ParkingComponent,
    ListparkingComponent,
    ViewindividualbookingComponent,
    ParkingbookingComponent,
    ViewpaymentbookinlistComponent,
    RevokeemployeeComponent,
    CustomersComponent,
    ViewsinglelistComponent,
    ViewparkingbookigsinglelistComponent,
    BrandComponent,
    BrandListComponent,
    PopularVehicleComponent,
    PopularVehicleListComponent,
    VehicleListComponent,
    LocationComponent,
    LocationListComponent,
    VehicleModelComponent,
    VehiclechecklistComponent,
    UserlocationlistComponent,
    UserlistComponent,
    NotificationComponent,
    FaqComponent,
    CartComponent,
    BannerComponent,
    MainservicebannerComponent,
    OperationsmechanicbookingsComponent,
    OperationsparkingbookingsComponent,
    OpenmechanicbookingsComponent,
    OpenparkingbookingsComponent,
    ViewparkingbookinglistComponent,
    ViewmechanicbookinglistComponent,
    ViewparkingcbookinglistComponent,
    ViewpaymentparkingbookinglistComponent,
    ViewccbookinglistComponent,
    ViewccparkingbookinglistComponent,
    OpenccparkingbookinglistComponent,
    OpenccmechanicbookinglistComponent,
    PopularserviceComponent,
    SubscriptionsComponent,
    QrcodeComponent,
    FlashscreenComponent,
    UploadimageurlComponent,
    CouponCodeComponent,
    EditemployeeComponent,
    EngineccComponent,
    PopularSubServiceComponent,
    ParkingEditComponent
  ]
})
export class ButtonsModule { }
