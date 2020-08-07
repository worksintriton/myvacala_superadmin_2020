import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployeesComponent } from './addemployees.component';

describe('AddemployeesComponent', () => {
  let component: AddemployeesComponent;
  let fixture: ComponentFixture<AddemployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddemployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
