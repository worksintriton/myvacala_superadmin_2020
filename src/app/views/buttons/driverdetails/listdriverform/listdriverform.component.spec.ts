import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdriverformComponent } from './listdriverform.component';

describe('ListdriverformComponent', () => {
  let component: ListdriverformComponent;
  let fixture: ComponentFixture<ListdriverformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdriverformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdriverformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
