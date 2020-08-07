import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenparkingbookingsComponent } from './openparkingbookings.component';

describe('OpenparkingbookingsComponent', () => {
  let component: OpenparkingbookingsComponent;
  let fixture: ComponentFixture<OpenparkingbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenparkingbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenparkingbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
