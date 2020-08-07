import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularserviceComponent } from './popularservice.component';

describe('PopularserviceComponent', () => {
  let component: PopularserviceComponent;
  let fixture: ComponentFixture<PopularserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
