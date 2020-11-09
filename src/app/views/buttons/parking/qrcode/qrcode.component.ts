import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import Swal from 'sweetalert2';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {
  Vendor_Id: any;
  VendorName: any;
  parkingarea: any;
  Longitude: any;
  Latitude: any;
  Entry: any;
  Block: any;
  imgurl: any;
  qr_code_list: any = [];
  validate: boolean = false;
  update: boolean = false;
  id: any;
  vendor_id_list: any;
  id_list: any;
  vehicle_type: any;
  single_parking: any;
  parking_id: any;
  vehicle_list: any;
  config = {
    displayKey: "description", //if objects array passed which key to be displayed defaults to description
    search: true, //true/false for the search functionlity defaults to false,
    height: '250px', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder: 'Select', // text to be displayed when no item is selected defaults to Select,
    customComparator: () => { },// a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    limitTo: 0, // number thats limits the no of options displayed in the UI (if zero, options will not be limited)
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder: 'Search',// label thats displayed in search input,
    searchOnKey: 'name',// key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
  }
  arealist: any = [];
  constructor(
    private router: Router,
    private http: HttpClient,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this._api.vehiclelist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.vehicle_list = response.Data.reverse();
        // console.log("vehicle_list");
        // console.log(this.vehicle_list);
      }
    );
    this._api.qr_code_get().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.qr_code_list = response.Data.reverse();
        console.log(this.qr_code_list);
      }
    );
    
    this._api.list_parking().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.vendor_id_list = response.Data.reverse();
        console.log(this.vendor_id_list);
        this.id_list = [];
        for (let i = 0; i < this.vendor_id_list.length; i++) {
          this.id_list.push(this.vendor_id_list[i].parking_owner_id.parking_vendor_id)
        }
      }
    );
  }
  open(qrurl) {
    let url = qrurl;
    Swal.fire({
      imageUrl: url,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }

  createqr_code() {
    this.validation();
    if (this.validate == true) {
      if (this.update == false) {
        console.log("create");
        let data = {
          "Vendor_id": this.Vendor_Id,
          "Vendor_Name": this.VendorName,
          "Parking_Area_Name": this.parkingarea,
          "Lat": this.Latitude,
          "Long": this.Longitude,
          "Entry": this.Entry,
          "Block_Name": this.Block,
          "Vehicletype_id": this.vehicle_type,
        }
        console.log(data)
        this._api.qr_code_create(data).subscribe((response: any) => {
          console.log(response);
          if (response.Code == 422) {
            alert(response.Message);
          } else {
            this.ngOnInit();
            alert("QR code generated successfully");
            this.reset();
            // this.router.navigate(['/superadmin/master/create_master_service'])

          }

        });
      }
      else if (this.update == true) {
        console.log("edit");
        let data = {
          "_id": this.id,
          "Vendor_id": this.Vendor_Id,
          "Vendor_Name": this.VendorName,
          "Parking_Area_Name": this.parkingarea,
          "Lat": this.Latitude,
          "Long": this.Longitude,
          "Entry": this.Entry,
          "Block_Name": this.Block,
          "Vehicletype_id": this.vehicle_type,
        }
        this._api.qr_code_edit(data).subscribe((response: any) => {
          console.log(response);
          if (response.Code == 422) {
            alert(response.Message);
          } else {
            this.ngOnInit();
            alert("QR code detail updated successfully");
            this.reset();
            // this.router.navigate(['/superadmin/master/create_master_service'])

          }

        });
      }

    }
    else {
      alert("Fill all the fields")
    }

  }
  downloadimg(url) {
    saveAs(url, "QR_code");
  }
  reset() {
    this.update = false;
    this.Vendor_Id = undefined;
    this.VendorName = undefined;
    this.parkingarea = undefined;
    this.Latitude = undefined;
    this.Longitude = undefined;
    this.Entry = undefined;
    this.Block = undefined;
    this.imgurl = undefined;
    this.parking_id = undefined;
    this.vehicle_type = undefined;
    this.single_parking = undefined;
    this.arealist = [];
  }
  edit(data) {
    this.update = true;
    this.id = data._id;
    this.Vendor_Id = data.Vendor_id;
    this.VendorName = data.Vendor_Name;
    this.parkingarea = data.Parking_Area_Name;
    this.Latitude = data.Lat;
    this.Longitude = data.Long;
    this.Entry = data.Entry;
    this.Block = data.Block_Name;
    this.imgurl = data.QRcode_Image_URL;
    this.vehicle_type = data.Vehicletype_id;
    window.scrollTo(0, 0);
    this.single_parking = this.vendor_id_list.filter((x: any) => this.Vendor_Id == x._id);
    this.parking_id = this.single_parking[0].parking_vendor_id;
    this.vechiletype_detail();
  }

  validation() {
    if (this.parking_id != undefined && this.VendorName != undefined && this.parkingarea != undefined && this.Latitude != undefined && this.Longitude != undefined && this.Entry != undefined && this.Block != undefined) {
      this.validate = true;
    }
    else {
      this.validate = false;
    }
  }
  delete(id) {
    let data = {
      "_id": id
    }
    this._api.qr_code_delete(data).subscribe((response: any) => {
      console.log(response);
      if (response.Code == 422) {
        alert(response.Message);
      } else {
        this.ngOnInit();
        alert("QR code deleted successfully");
        this.reset();
        // this.router.navigate(['/superadmin/master/create_master_service'])

      }

    });
  }

  get_mech() {
    this.single_parking = this.vendor_id_list.filter((x: any) => this.parking_id == x._id);
    this.Vendor_Id = this.single_parking[0]._id;
    console.log(this.Vendor_Id)
    console.log(this.single_parking);
    this.VendorName = this.single_parking[0].parking_details_name
    this.Latitude = this.single_parking[0].parking_details_lat;
    this.Longitude = this.single_parking[0].parking_details_long;
  }
  vechiletype_detail() {
    if (this.vehicle_type == "5f0c0cfc2f857d66950cf25f") {
      this.arealist = this.single_parking[0].parking_details_slots_Car_details;
    }
    if (this.vehicle_type == "5f0c0d092f857d66950cf260") {
      this.arealist = this.single_parking[0].parking_details_slots_Bike_details;
    }
  }
}
