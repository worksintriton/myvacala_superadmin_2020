import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenmechanicbookingsComponent } from './openmechanicbookings.component';

describe('OpenmechanicbookingsComponent', () => {
  let component: OpenmechanicbookingsComponent;
  let fixture: ComponentFixture<OpenmechanicbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenmechanicbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenmechanicbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
