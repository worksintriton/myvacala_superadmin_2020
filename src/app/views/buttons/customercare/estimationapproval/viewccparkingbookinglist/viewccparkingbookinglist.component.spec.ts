import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewccparkingbookinglistComponent } from './viewccparkingbookinglist.component';

describe('ViewccparkingbookinglistComponent', () => {
  let component: ViewccparkingbookinglistComponent;
  let fixture: ComponentFixture<ViewccparkingbookinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewccparkingbookinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewccparkingbookinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
