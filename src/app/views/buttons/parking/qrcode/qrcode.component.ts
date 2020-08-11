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
  constructor(
    private router: Router,
    private http: HttpClient,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this._api.qr_code_get().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.qr_code_list = response.Data;
        console.log(this.qr_code_list);
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
        }
        this._api.qr_code_create(data).subscribe((response: any) => {
          console.log(response);
          if (response.Code == 422) {
            alert(response.Message);
          } else {
            this.ngOnInit();
            alert(response.Message);
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
        }
        this._api.qr_code_edit(data).subscribe((response: any) => {
          console.log(response);
          if (response.Code == 422) {
            alert(response.Message);
          } else {
            this.ngOnInit();
            alert(response.Message);
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
    window.scrollTo(0, 0)
  }

  validation() {
    if ((this.Vendor_Id != undefined && this.Vendor_Id != '') && (this.VendorName != undefined && this.VendorName != '') && (this.parkingarea != undefined && this.parkingarea != '')
      && (this.Latitude != undefined && this.Latitude != '') && (this.Longitude != undefined && this.Longitude != '') && (this.Entry != undefined && this.Entry != '') && (this.Block != undefined && this.Block != '')) {
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
        alert(response.Message);
        this.reset();
        // this.router.navigate(['/superadmin/master/create_master_service'])

      }

    });
  }
}
