import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclebrandComponent } from './vehiclebrand.component';

describe('VehiclebrandComponent', () => {
  let component: VehiclebrandComponent;
  let fixture: ComponentFixture<VehiclebrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclebrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclebrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
