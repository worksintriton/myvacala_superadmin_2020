import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularVehicleComponent } from './popular-vehicle.component';

describe('PopularVehicleComponent', () => {
  let component: PopularVehicleComponent;
  let fixture: ComponentFixture<PopularVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
