import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createmachanicform',
  templateUrl: './createmachanicform.component.html',
  styleUrls: ['./createmachanicform.component.scss']
})
export class CreatemachanicformComponent implements OnInit {
  bikeservice:boolean;
  carservice:boolean;
  constructor() { }

  ngOnInit() {
    this.bikeservice=false;
    this.carservice=true;
  }
  selectservicetype(event)
  {
    console.log(event.target.value);
    if(event.target.value=="Car")
    {
      this.carservice=true;
      this.bikeservice=false;
    }
    if(event.target.value=="Bike")
    {
      this.bikeservice=true;
      this.carservice=false;
    }
    if(event.target.value=="Both")
    {
      this.bikeservice=true;
      this.carservice=true;
    }
  }
}
