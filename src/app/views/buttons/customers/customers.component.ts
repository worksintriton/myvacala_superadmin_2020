import { Component, OnInit ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../api.service';
import { ExcelService } from '../../../excel.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customer_list:any;
  constructor(
    private router: Router,   
    private http: HttpClient,
    private _api : ApiService,
    private excelService: ExcelService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
   
    this._api.Customer_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.customer_list = response.Data;
        console.log(this.customer_list);
      }
    );   
  }
 
  
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  
  getFromLocal(key): any {
    return this.storage.get(key);
  }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.customer_list, 'Customer List');
  }
}

