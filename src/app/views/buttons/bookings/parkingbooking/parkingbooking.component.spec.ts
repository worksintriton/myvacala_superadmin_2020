import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingbookingComponent } from './parkingbooking.component';

describe('ParkingbookingComponent', () => {
  let component: ParkingbookingComponent;
  let fixture: ComponentFixture<ParkingbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
