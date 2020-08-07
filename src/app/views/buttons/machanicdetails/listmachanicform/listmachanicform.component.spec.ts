import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmachanicformComponent } from './listmachanicform.component';

describe('ListmachanicformComponent', () => {
  let component: ListmachanicformComponent;
  let fixture: ComponentFixture<ListmachanicformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmachanicformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmachanicformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
