import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViwecartComponent } from './viwecart.component';

describe('ViwecartComponent', () => {
  let component: ViwecartComponent;
  let fixture: ComponentFixture<ViwecartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViwecartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViwecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
