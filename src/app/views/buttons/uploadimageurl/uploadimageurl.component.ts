import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-uploadimageurl',
  templateUrl: './uploadimageurl.component.html',
  styleUrls: ['./uploadimageurl.component.scss']
})
export class UploadimageurlComponent implements OnInit {
  imageSrc: string;
  selectedimgae:any;
  Pic:any;

 Specializations_image:any;
 constructor( 
  private router: Router,

  private http: HttpClient,

  private _api: ApiService,
  @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
  }
  fileupload(event){
    this.selectedimgae = event.target.files[0];
    this.addfiles1();
  }
  
  addfiles1()
  {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae, this.selectedimgae.name);
    this.http.post('https://myvacala.com/api/upload', fd)
    .subscribe((res: any) => {
    console.log(res);
    this.Pic = res.Data;
  });
  }
  onFileChange(event)
  {
    const reader = new FileReader();

    

    if(event.target.files && event.target.files.length) {

      const [file] = event.target.files;

      reader.readAsDataURL(file);

    

      reader.onload = () => {

   

        this.imageSrc = reader.result as string;
console.log(this.imageSrc)

      };

   

    }
  }
   
  
}


