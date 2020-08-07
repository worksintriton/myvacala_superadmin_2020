import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclechecklistComponent } from './vehiclechecklist.component';

describe('VehiclechecklistComponent', () => {
  let component: VehiclechecklistComponent;
  let fixture: ComponentFixture<VehiclechecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclechecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclechecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
