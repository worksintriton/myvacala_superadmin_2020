import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverbookingsComponent } from './driverbookings.component';

describe('DriverbookingsComponent', () => {
  let component: DriverbookingsComponent;
  let fixture: ComponentFixture<DriverbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
