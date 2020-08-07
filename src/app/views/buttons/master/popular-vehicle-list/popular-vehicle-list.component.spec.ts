import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularVehicleListComponent } from './popular-vehicle-list.component';

describe('PopularVehicleListComponent', () => {
  let component: PopularVehicleListComponent;
  let fixture: ComponentFixture<PopularVehicleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularVehicleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularVehicleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
