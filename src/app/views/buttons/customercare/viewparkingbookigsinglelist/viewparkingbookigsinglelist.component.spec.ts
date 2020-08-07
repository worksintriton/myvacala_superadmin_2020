import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewparkingbookigsinglelistComponent } from './viewparkingbookigsinglelist.component';

describe('ViewparkingbookigsinglelistComponent', () => {
  let component: ViewparkingbookigsinglelistComponent;
  let fixture: ComponentFixture<ViewparkingbookigsinglelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewparkingbookigsinglelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewparkingbookigsinglelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
