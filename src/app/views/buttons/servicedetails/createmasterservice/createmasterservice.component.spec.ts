import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemasterserviceComponent } from './createmasterservice.component';

describe('CreatemasterserviceComponent', () => {
  let component: CreatemasterserviceComponent;
  let fixture: ComponentFixture<CreatemasterserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatemasterserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemasterserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
