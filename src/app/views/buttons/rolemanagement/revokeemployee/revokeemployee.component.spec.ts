import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevokeemployeeComponent } from './revokeemployee.component';

describe('RevokeemployeeComponent', () => {
  let component: RevokeemployeeComponent;
  let fixture: ComponentFixture<RevokeemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevokeemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevokeemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
