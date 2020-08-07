import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationapprovalComponent } from './estimationapproval.component';

describe('EstimationapprovalComponent', () => {
  let component: EstimationapprovalComponent;
  let fixture: ComponentFixture<EstimationapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimationapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimationapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
