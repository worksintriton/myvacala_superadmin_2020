import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewparkingcbookinglistComponent } from './viewparkingcbookinglist.component';

describe('ViewparkingcbookinglistComponent', () => {
  let component: ViewparkingcbookinglistComponent;
  let fixture: ComponentFixture<ViewparkingcbookinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewparkingcbookinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewparkingcbookinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
