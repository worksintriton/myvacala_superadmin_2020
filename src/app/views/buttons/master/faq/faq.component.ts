import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
import Swal from 'sweetalert2';

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
    if(this.question != "" && this.question != undefined && this.Answer != "" && this.Answer != undefined  ){
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
                  alert("FAQ created successfully");
                  this.ngOnInit();
                  this.reset();
                  }
              }
            );
   
    }
    else{
      alert("Fill all the fields")
    }
   }
  deletefaq(i)
      {
        Swal.fire({
          title: 'Are you sure?',
          text: 'If you delete this data it will affect existing user details.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it'
        }).then((result) => {
          if (result.value) {
         
      let data = {

        "FAQ_id": i
    
      }
      console.log(data);
      this._api.faq_delete(data).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code == 200) {
            alert("FAQ deleted successfully");
            this.ngOnInit();
          }
          else {
            alert("sorry");
          }
    
        }
      ); 
            // Swal.fire(
            //   'Deleted!',
            //   'Your imaginary file has been deleted.',
            //   'success'
            // )
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelled',
              'Your data is safe.',
              'error'
            )
          }
        })
    }
  
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
