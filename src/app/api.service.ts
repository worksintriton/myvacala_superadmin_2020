import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  constructor(private http: HttpClient) { }


  CreateDoctor(data) {
    return this.http.post(this.apiUrl + 'user/register', data);
  }

  CreateDoctor1(data) {
    return this.http.post(this.apiUrl + 'doctor/edit', data);
  }


  DoctorList() {
    return this.http.get(this.apiUrl + 'doctor/getlist');
  }


  DeleteDoctor(data) {
    return this.http.delete(this.apiUrl + 'doctor/delete/' + data);
  }


  UserList() {
    return this.http.get(this.apiUrl + 'user/getlist');
  }

  DeleteUser(data) {
    return this.http.delete(this.apiUrl + 'user/delete/' + data);
  }



  PatientList() {
    return this.http.get(this.apiUrl + 'getlist');
  }

  DeletePatient(data) {
    return this.http.delete(this.apiUrl + 'delete/' + data);
  }



  GetFamilyList(data) {
    return this.http.post(this.apiUrl + 'family/getlist', data);
  }



  DeleteMembers(data) {
    return this.http.post(this.apiUrl + 'family/delete', data);
  }






  specializationList() {
    return this.http.get(this.apiUrl + 'specialization/getlist');
  }

  Createspecialization(data) {
    return this.http.post(this.apiUrl + 'specialization/create', data);
  }

  DeleteSpecialisation(data) {
    return this.http.post(this.apiUrl + 'specialization/delete', data);
  }




  Banner_List() {
    return this.http.get(this.apiUrl + 'homebanner/getlist');
  }
  banneredit(data) {
    return this.http.post(this.apiUrl + 'homebanner/edit', data);
  }

  CreateBanner(data) {
    return this.http.post(this.apiUrl + 'homebanner/create', data);
  }


  DeleteBanner(data) {
    return this.http.post(this.apiUrl + 'homebanner/delete/', data);
  }


  Symptoms_list() {
    return this.http.get(this.apiUrl + 'symptoms/getlist');
  }


  CreateSymptoms(data) {
    return this.http.post(this.apiUrl + 'symptoms/create', data);
  }

  deleteSymptoms(data) {
    return this.http.post(this.apiUrl + 'symptoms/delete', data);
  }



  editSymptoms(data) {
    return this.http.post(this.apiUrl + 'symptoms/edit', data);
  }



  loginprocess(data) {
    return this.http.post(this.apiUrl + 'login', data);
  }
  Masterservice_save(data) {
    return this.http.post(this.apiUrl + 'masterservices/create', data);
  }
  subservice_save(data) {
    return this.http.post(this.apiUrl + 'subservice/create', data);
  }
  subservice_edit(data) {
    return this.http.post(this.apiUrl + 'subservice/edit', data);
  }
  getsubservicelist() {
    return this.http.get(this.apiUrl + 'subservice/getlist');
  }
  deletesubservice_list(i) {
    return this.http.post(this.apiUrl + 'subservice/delete', i);
  }
  getservicelist() {
    return this.http.get(this.apiUrl + 'masterservices/getlist');
  }
  Masterservice_edit(data) {
    return this.http.post(this.apiUrl + 'masterservices/edit', data);
  }
  deleteservice_list(data) {
    return this.http.post(this.apiUrl + 'masterservices/delete', data);
  }
  BookingList() {
    return this.http.get(this.apiUrl + 'mechanic/bookinglist');
  }
  getmainservicelist() {
    return this.http.get(this.apiUrl + 'service/getlistfull');
  }
  editmainservice(data) {
    return this.http.put(this.apiUrl + 'service/edit', data);
  }
  createmainservice(data) {
    return this.http.post(this.apiUrl + 'service/create', data);
  }
  deletemainservice(data) {
    return this.http.post(this.apiUrl + 'service/delete', data);
  }
  vehiclecreation(data) {
    return this.http.post(this.apiUrl + 'vehicletype/create', data);
  }
  vehiclelist() {
    return this.http.get(this.apiUrl + 'vehicletype/getlist');
  }
  vehiclebrand() {
    return this.http.get(this.apiUrl + 'vehiclebrand/getlist');
  }
  vehiclebrandcreation(data) {
    return this.http.post(this.apiUrl + 'vehiclebrand/create', data);
  }
  vehiclebrand_delete(data) {
    return this.http.post(this.apiUrl + 'vehiclebrand/delete', data);
  }

  vehicleBrandList(data) {
    return this.http.post(this.apiUrl + 'vehiclebrand/vehicletypegetlist', data);
  }
  PopularvehicleList(data) {
    return this.http.post(this.apiUrl + 'vehiclebrand/popular/getlist', data);
  }
  // Popular_vehicle_List()
  // {
  //   return this.http.get(this.apiUrl + 'vehiclebrand/popular/getlist'); 
  // } 
  parking_bookingList() {
    return this.http.get(this.apiUrl + 'parking/getlist');
  }
  slotList_save(data) {
    return this.http.post(this.apiUrl + 'parkingvendor/slotallocation', data);
  }
  VehicleBrand_save(data) {
    return this.http.post(this.apiUrl + 'vehiclebrand/create', data);
  }
  //  VehicleBrand_edit(data)
  // {
  //   return this.http.get(this.apiUrl + 'vehiclebrand/vehiclewithbrand',data);
  // }
  VehicleBrandEdit(data) {
    return this.http.put(this.apiUrl + 'vehiclebrand/edit', data);
  }
  Employee_save(data) {
    return this.http.post(this.apiUrl + 'employee/create', data);
  }
  Employee_list(data) {
    return this.http.post(this.apiUrl + 'employee/activelist', data);
  }
  otpvalidationapi(data) {
    return this.http.post(this.apiUrl + 'employeeotpverify', data);
  }
  otploginprocess(data) {
    return this.http.post(this.apiUrl + 'employeelogin', data);
  }
  RevokeEmployee_list(data) {
    return this.http.post(this.apiUrl + 'employee/activelist', data);
  }
  EditEmployee_Edit(data) {
    return this.http.put(this.apiUrl + 'employee/edit', data);
  }
  SuspendedEmployee(data) {
    return this.http.put(this.apiUrl + 'employee/statuschange', data);
  }
  Customer_list() {
    return this.http.get(this.apiUrl + 'customer/getlist');
  }
  getfuellist() {
    return this.http.get(this.apiUrl + 'fuel/getlist');
  }
  FuelType_save(data) {
    return this.http.post(this.apiUrl + 'fuel/create', data);
  }
  FuelType_edit(data) {
    return this.http.post(this.apiUrl + 'fuel/edit', data);
  }
  FuelType_delete(data) {
    return this.http.post(this.apiUrl + 'fuel/delete', data);
  }
  vehicleModellist() {
    return this.http.get(this.apiUrl + 'vehiclemodel/getlist');
  }
  vehicledetails_list(data) {
    return this.http.post(this.apiUrl + 'vehiclename/mobile/brandvehiclelist', data);
  }
  vehiclenamedetails_list() {
    return this.http.get(this.apiUrl + 'vehiclename/getlist');
  }
  vehicledetails_save(data) {
    return this.http.post(this.apiUrl + 'vehiclename/create', data);
  }
  vehicledetails_edit(data) {
    return this.http.post(this.apiUrl + 'vehiclename/edit', data);
  }
  vehicleModel_save(data) {
    return this.http.post(this.apiUrl + 'vehiclemodel/create', data);
  }
  vehicleModel_edit(data) {
    return this.http.put(this.apiUrl + 'vehiclemodel/edit', data);
  }
  vehiclenameDelete(data) {
    return this.http.post(this.apiUrl + 'vehiclename/delete', data);
  }
  VehicleModel_delete(data) {
    return this.http.post(this.apiUrl + 'vehiclemodel/delete', data);
  }
  mechanicList() {
    return this.http.get(this.apiUrl + 'mechanic/getlist');
  }
  LocationList() {
    return this.http.get(this.apiUrl + 'location/admin/getlist');
  }
  LocationSave(data) {
    return this.http.post(this.apiUrl + 'location/create', data);
  }
  LocationDelete(data) {
    return this.http.post(this.apiUrl + 'location/delete', data);
  }
  LocationEdit(data) {
    return this.http.put(this.apiUrl + 'location/edit', data);
  }
  parkLocationList() {
    return this.http.get(this.apiUrl + 'parkinglocation/admin/getlist');
  }
  parkLocationSave(data) {
    return this.http.post(this.apiUrl + 'parkinglocation/create', data);
  }
  parkLocationDelete(data) {
    return this.http.post(this.apiUrl + 'parkinglocation/delete', data);
  }
  parkLocationEdit(data) {
    return this.http.put(this.apiUrl + 'parkinglocation/edit', data);
  }
  popular_service(data) {
    return this.http.post(this.apiUrl + 'vehiclebrand/popular/create', data);
  }
  user_list() {
    return this.http.get(this.apiUrl + 'customer/getlist');
  }
  user_location_list() {
    return this.http.get(this.apiUrl + 'customer/admin/customerlocationlist');
  }
  notification() {
    return this.http.get(this.apiUrl + 'notification/admin/getlist');
  }
  notification_delete(data) {
    return this.http.post(this.apiUrl + 'notification/delete', data);
  }
  cart() {
    return this.http.get(this.apiUrl + 'cart/admin/getlist');
  }
  cart_delete(data) {
    return this.http.post(this.apiUrl + 'cart/admin/delete', data);
  }
  faq() {
    return this.http.get(this.apiUrl + 'faq/getlist');
  }
  faq_delete(data) {
    return this.http.post(this.apiUrl + 'faq/delete', data);
  }
  faqcreate(data) {
    return this.http.post(this.apiUrl + 'faq/create', data);
  }
  banner(data) {
    return this.http.post(this.apiUrl + 'homebanner/create', data);
  }
  bannerlist() {
    return this.http.get(this.apiUrl + 'homebanner/getlist');
  }
  mainservicebanner(data) {
    return this.http.post(this.apiUrl + 'servicebanner/create', data);
  }
  mainservicebanneredit(data) {
    return this.http.post(this.apiUrl + 'servicebanner/edit', data);
  }
  mainservicebannerdelete(data) {
    return this.http.post(this.apiUrl + 'servicebanner/delete', data);
  }
  maniservicebannerlist() {
    return this.http.get(this.apiUrl + 'servicebanner/admin/getlist');
  }
  getmaniservicebannerlist(data) {
    return this.http.post(this.apiUrl + 'servicebanner/admin/mastergetlist', data);
  }
  flash(data) {
    return this.http.post(this.apiUrl + 'mobilesplashscreen/create', data);
  }
  flash_list() {
    return this.http.get(this.apiUrl + 'mobilesplashscreen/getlist');
  }
  flash_edit(data) {
    return this.http.put(this.apiUrl + 'mobilesplashscreen/edit', data);
  }
  flashscreenDelete(data) {
    return this.http.post(this.apiUrl + 'mobilesplashscreen/delete', data);
  }

  coupon_codde_create(data) {
    return this.http.post(this.apiUrl + 'coupons/create', data);
  }
  coupon_codde_edit(data) {
    return this.http.post(this.apiUrl + 'coupons/edit', data);
  }
  coupon_codde_delete(data) {
    return this.http.post(this.apiUrl + 'coupons/delete', data);
  }
  coupon_list() {
    return this.http.get(this.apiUrl + 'coupons/getlist');
  }

  add_emp(data) {
    return this.http.post(this.apiUrl + 'employee/create', data);
  }
  delete_emp(data) {
    return this.http.post(this.apiUrl + 'employee/delete', data);
  }
  emp_list() {
    return this.http.get(this.apiUrl + 'employee/getlist');
  }
  popular_service_get_daetails() {
    return this.http.get(this.apiUrl + 'mobileappdetails/getlist');
  }
  emp_edit(data) {
    return this.http.post(this.apiUrl + 'employee/edit', data);
  }
  popular_service_edit(data) {
    return this.http.post(this.apiUrl + 'mobileappdetails/edit', data);
  }
  qr_code_create(data){
    return this.http.post(this.apiUrl + 'parking/parkingareadetails/qrcode', data);
  }
  qr_code_get() {
    return this.http.get(this.apiUrl + 'parking/parkingareadetails/qrgetlist');
  }
  qr_code_edit(data){
    return this.http.post(this.apiUrl + 'parking/parkingareadetails/qredit', data);
  }
  qr_code_delete(data){
    return this.http.post(this.apiUrl + 'parking/parkingareadetails/qrdelete', data);
  }
  booking_edit(data){
    return this.http.post(this.apiUrl + 'booking/edit', data);
  }
  Parking_owner_create(data){
    return this.http.post(this.apiUrl + 'parking/owner/create', data);
  }
  Parking_owner_checking_Get_Id(data){
    return this.http.post(this.apiUrl + 'parking/owner/getlist_id', data);
  }
  Parking_owner_create_edit(data){
    return this.http.post(this.apiUrl + 'parking/owner/edit', data);
  }
  Parking_owner_edit(data){
    return this.http.post(this.apiUrl + 'parking/parkingareadetails/edit', data);
  }
  list_parking(){
    return this.http.get(this.apiUrl + 'parking/parkingareadetails/Vendor_getlist');
  }
  list_parking_delete(data){
    return this.http.post(this.apiUrl + 'parking/parkingareadetails/delete', data);
  }
  user_delete(data){
    return this.http.post(this.apiUrl + 'customer/delete', data);
  }
  user_edit(data){
    return this.http.post(this.apiUrl + 'customer/edit', data);
  }
  Create_machanic(data){
    return this.http.post(this.apiUrl + 'mechanic/create', data);
  }
  mechanic_byid(data){
    return this.http.post(this.apiUrl + 'mechanic/getlist_by_id', data)
  }
  mechanic_delete(data){
    return this.http.post(this.apiUrl + 'mechanic/delete', data)
  }
  mechanic_edit(data){
    return this.http.post(this.apiUrl + 'mechanic/edit', data)
  }
  emp_login(data){
    return this.http.post(this.apiUrl + 'employee/admin_login', data)
  }
  parkingbookinglist(){
    return this.http.get(this.apiUrl + 'parking/parkingbooking/getlist');
  }
}