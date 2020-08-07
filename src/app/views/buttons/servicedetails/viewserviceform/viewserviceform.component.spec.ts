import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewserviceformComponent } from './viewserviceform.component';

describe('ViewserviceformComponent', () => {
  let component: ViewserviceformComponent;
  let fixture: ComponentFixture<ViewserviceformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewserviceformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewserviceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
