import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqlist:any;
  question:any;
  Answer:any;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,

    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this._api.faq().subscribe(
      (response: any) => {
        console.log(response);
        this.faqlist = response.Data.reverse();

      }
    );
  }
  reset(){
    this.question = undefined;
      this.Answer = undefined;
  }
  Faq_Save()
  {
    let data={
      "Question":this.question,
      "Answer":this.Answer
    }
    console.log(data);
  
          this._api.faqcreate(data).subscribe(
            (response: any) => {
              console.log(response);
              if (response.Code == 422) {
                alert(response.Message);
              } else {
                alert(response.Message);
                this.ngOnInit();
                }
            }
          );
  }
  deletefaq(i)
      {
      let data = {

        "FAQ_id": i
    
      }
      console.log(data);
      this._api.faq_delete(data).subscribe(
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
  
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
