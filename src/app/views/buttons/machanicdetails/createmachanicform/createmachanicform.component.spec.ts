import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemachanicformComponent } from './createmachanicform.component';

describe('CreatemachanicformComponent', () => {
  let component: CreatemachanicformComponent;
  let fixture: ComponentFixture<CreatemachanicformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatemachanicformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemachanicformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
