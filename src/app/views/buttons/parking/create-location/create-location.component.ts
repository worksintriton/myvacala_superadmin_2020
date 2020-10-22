import { Component, OnInit, Inject ,  ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import { ApiService } from '../../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.scss']
})
export class CreateLocationComponent implements OnInit {
  LocationName: any;
  DisplayName: any;
  latitude: any;
  longitude: any;

  selectedimgae: any;
  Pic: any = undefined;

  Location_list: any;
  pincode: string;
  pin: any = [];
  edit: boolean = false;
  id: any;
  width: any;
  height: any;
  @ViewChild('imgType', { static: false }) imgType: ElementRef;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    this._api.parkLocationList().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.Location_list = response.Data.reverse();
        console.log(this.Location_list);
      }
    );
  }
  Location_save() {
    if (this.Pic != undefined &&
      this.LocationName != undefined &&
      this.DisplayName != undefined &&
      this.latitude != undefined &&
      this.longitude != undefined &&
      this.pincode != undefined&&
      this.LocationName != '' &&
      this.DisplayName != '' &&
      this.latitude != '' &&
      this.longitude != '' &&
      this.pincode != '') {
      let str = this.pincode.split(" ").join("");
      console.log(str)
      this.pin = str.split(',');
      console.log(this.pin)
      let data = {
        "Image": this.Pic,
        "Location_Name": this.LocationName,
        "Display_Name": this.DisplayName,
        "Lat": this.latitude,
        "Long": this.longitude,
        "Pincodes": this.pin
      }
      console.log(data);
      this._api.parkLocationSave(data).subscribe(
        (response: any) => {
          console.log(response.Data);
          this.saveInLocal('Location_list', response.data);
          alert(response.Message);
          this.ngOnInit();
          // this.router.navigateByUrl('/superadmin/master/listemployees');
          this.Pic = undefined;
          this.LocationName = undefined;
          this.DisplayName = undefined;
          this.latitude = undefined;
          this.longitude = undefined;
          this.pincode = undefined;

        }
      );
    } else {
      if(this.Pic == undefined){
        alert('Please upload Image')
      }
     else{
      alert('Fill all the inputs')
     }
    }

  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  _keyPress(event: any) {
    const pattern = /[0-9\+\,\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }

  }

  VehicleModel_delete(i) {
    let data = {

      "Location_id": i

    }
    console.log(data);
    this._api.parkLocationDelete(data).subscribe(
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
  editservice(data) {
    window.scroll(0, 0);

    this.id = data._id;
    this.edit = true;
    this.Pic = data.Image;
    this.LocationName = data.Location_Name;
    this.DisplayName = data.Display_Name;
    this.latitude = data.Lat;
    this.longitude = data.Long;
    this.pincode = data.Pincodes.toString();
    console.log(this.pincode)
  }
  editsave() {
    if (this.Pic != undefined &&
      this.LocationName != undefined &&
      this.DisplayName != undefined &&
      this.latitude != undefined &&
      this.longitude != undefined &&
      this.pincode != undefined&&
      this.LocationName != '' &&
      this.DisplayName != '' &&
      this.latitude != '' &&
      this.longitude != '' &&
      this.pincode != '') {
        let str = this.pincode.split(" ").join("");
        console.log(str)
        this.pin = str.split(',');
        console.log(this.pin)
        let data = {
          "Location_id": this.id,
          "Image": this.Pic,
          "Location_Name": this.LocationName,
          "Display_Name": this.DisplayName,
          "Lat": this.latitude,
          "Long": this.longitude,
          "Pincodes": this.pin
        }
        console.log(data);
        this._api.parkLocationEdit(data).subscribe(
          (response: any) => {
            console.log(response.Data);
            this.saveInLocal('Location_list', response.data);
            alert(response.Message);
            this.ngOnInit();
            // this.router.navigateByUrl('/superadmin/master/listemployees');
    
            this.id = undefined;
            this.edit = false;
            this.Pic = undefined;
            this.LocationName = undefined;
            this.DisplayName = undefined;
            this.latitude = undefined;
            this.longitude = undefined;
            this.pincode = undefined;
          }
        );
      }
      else {
        if(this.Pic == undefined){
          alert('Please upload Image')
        }
       else{
        alert('Fill all the inputs')
       }
      }
  
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
    this.http.post('https://myvacala.com/api/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.Pic = res.Data;
      });
  }
}


