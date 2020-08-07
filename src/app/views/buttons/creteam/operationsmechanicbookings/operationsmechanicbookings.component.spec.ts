import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsmechanicbookingsComponent } from './operationsmechanicbookings.component';

describe('OperationsmechanicbookingsComponent', () => {
  let component: OperationsmechanicbookingsComponent;
  let fixture: ComponentFixture<OperationsmechanicbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationsmechanicbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsmechanicbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
