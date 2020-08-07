import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainservicebannerComponent } from './mainservicebanner.component';

describe('MainservicebannerComponent', () => {
  let component: MainservicebannerComponent;
  let fixture: ComponentFixture<MainservicebannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainservicebannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainservicebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
