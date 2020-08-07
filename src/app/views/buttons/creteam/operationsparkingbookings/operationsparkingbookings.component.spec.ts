import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsparkingbookingsComponent } from './operationsparkingbookings.component';

describe('OperationsparkingbookingsComponent', () => {
  let component: OperationsparkingbookingsComponent;
  let fixture: ComponentFixture<OperationsparkingbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationsparkingbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsparkingbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
