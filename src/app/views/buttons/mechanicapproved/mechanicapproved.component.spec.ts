import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicapprovedComponent } from './mechanicapproved.component';

describe('MechanicapprovedComponent', () => {
  let component: MechanicapprovedComponent;
  let fixture: ComponentFixture<MechanicapprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicapprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicapprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
