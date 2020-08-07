import { Component, OnInit ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-operationsmechanicbookings',
  templateUrl: './operationsmechanicbookings.component.html',
  styleUrls: ['./operationsmechanicbookings.component.scss']
})
export class OperationsmechanicbookingsComponent implements OnInit {

  constructor(
    private router: Router,   

    private http: HttpClient,

    private _api : ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
  }
  back_to_page()
  {
    
    this.router.navigate(['superadmin/master/cre_team']);
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  
  getFromLocal(key): any {
    return this.storage.get(key);
  }
}

