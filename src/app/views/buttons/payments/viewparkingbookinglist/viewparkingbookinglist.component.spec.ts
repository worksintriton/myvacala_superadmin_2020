import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewparkingbookinglistComponent } from './viewparkingbookinglist.component';

describe('ViewparkingbookinglistComponent', () => {
  let component: ViewparkingbookinglistComponent;
  let fixture: ComponentFixture<ViewparkingbookinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewparkingbookinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewparkingbookinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
