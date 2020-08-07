import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpaymentbookinlistComponent } from './viewpaymentbookinlist.component';

describe('ViewpaymentbookinlistComponent', () => {
  let component: ViewpaymentbookinlistComponent;
  let fixture: ComponentFixture<ViewpaymentbookinlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpaymentbookinlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpaymentbookinlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
