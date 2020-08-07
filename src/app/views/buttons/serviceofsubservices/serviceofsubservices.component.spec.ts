import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceofsubservicesComponent } from './serviceofsubservices.component';

describe('ServiceofsubservicesComponent', () => {
  let component: ServiceofsubservicesComponent;
  let fixture: ComponentFixture<ServiceofsubservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceofsubservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceofsubservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
