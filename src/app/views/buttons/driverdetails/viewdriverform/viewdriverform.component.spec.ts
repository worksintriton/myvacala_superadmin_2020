import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdriverformComponent } from './viewdriverform.component';

describe('ViewdriverformComponent', () => {
  let component: ViewdriverformComponent;
  let fixture: ComponentFixture<ViewdriverformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdriverformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdriverformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
