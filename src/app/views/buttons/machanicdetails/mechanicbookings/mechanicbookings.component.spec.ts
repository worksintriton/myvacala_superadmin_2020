import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicbookingsComponent } from './mechanicbookings.component';

describe('MechanicbookingsComponent', () => {
  let component: MechanicbookingsComponent;
  let fixture: ComponentFixture<MechanicbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
