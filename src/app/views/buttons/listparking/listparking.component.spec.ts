import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListparkingComponent } from './listparking.component';

describe('ListparkingComponent', () => {
  let component: ListparkingComponent;
  let fixture: ComponentFixture<ListparkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListparkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListparkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
