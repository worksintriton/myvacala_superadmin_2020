import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../../api.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-viwecart',
  templateUrl: './viwecart.component.html',
  styleUrls: ['./viwecart.component.scss']
})
export class ViwecartComponent implements OnInit {
  itemdetails:any;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    private location: Location,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this.itemdetails = this.getFromLocal('itemsingle')
    console.log(this.itemdetails)
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  back(){
    this.location.back();
  }
}
