import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmachanicformComponent } from './viewmachanicform.component';

describe('ViewmachanicformComponent', () => {
  let component: ViewmachanicformComponent;
  let fixture: ComponentFixture<ViewmachanicformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmachanicformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmachanicformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
