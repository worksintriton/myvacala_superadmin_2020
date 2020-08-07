import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsubserviceformComponent } from './viewsubserviceform.component';

describe('ViewsubserviceformComponent', () => {
  let component: ViewsubserviceformComponent;
  let fixture: ComponentFixture<ViewsubserviceformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsubserviceformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsubserviceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
