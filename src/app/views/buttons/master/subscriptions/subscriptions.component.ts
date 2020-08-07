import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  Included:any;
  newInclude:any;
  Included_new:any=[];
  include_list:any=[];

  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,

    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
  }
  
  addRow() {    
    this.newInclude = this.Included;  
    this.Included_new.push(this.newInclude);        
    console.log(this.Included_new);   
     
}
  deleteRow_new(dynamic,i) {  
    console.log(dynamic,i, this.Included_new)
    for(let b=0; b<this.Included_new.length;b++)
    {
      if(this.Included_new[b]==dynamic)
      {
        //this.Location_list[i].status="true";
        this.Included_new.splice(b, 1);
      }
      console.log(this.Included_new);
    }
  } 
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
