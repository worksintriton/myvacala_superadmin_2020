import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineccComponent } from './enginecc.component';

describe('EngineccComponent', () => {
  let component: EngineccComponent;
  let fixture: ComponentFixture<EngineccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
