import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenccparkingbookinglistComponent } from './openccparkingbookinglist.component';

describe('OpenccparkingbookinglistComponent', () => {
  let component: OpenccparkingbookinglistComponent;
  let fixture: ComponentFixture<OpenccparkingbookinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenccparkingbookinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenccparkingbookinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
