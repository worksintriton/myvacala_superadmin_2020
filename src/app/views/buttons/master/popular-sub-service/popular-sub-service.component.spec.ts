import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSubServiceComponent } from './popular-sub-service.component';

describe('PopularSubServiceComponent', () => {
  let component: PopularSubServiceComponent;
  let fixture: ComponentFixture<PopularSubServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularSubServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularSubServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
