import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpaymentparkingbookinglistComponent } from './viewpaymentparkingbookinglist.component';

describe('ViewpaymentparkingbookinglistComponent', () => {
  let component: ViewpaymentparkingbookinglistComponent;
  let fixture: ComponentFixture<ViewpaymentparkingbookinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpaymentparkingbookinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpaymentparkingbookinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
