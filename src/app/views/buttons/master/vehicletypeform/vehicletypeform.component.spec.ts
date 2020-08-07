import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicletypeformComponent } from './vehicletypeform.component';

describe('VehicletypeformComponent', () => {
  let component: VehicletypeformComponent;
  let fixture: ComponentFixture<VehicletypeformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicletypeformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicletypeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
