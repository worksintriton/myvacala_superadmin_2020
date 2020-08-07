import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsubserviceformComponent } from './listsubserviceform.component';

describe('ListsubserviceformComponent', () => {
  let component: ListsubserviceformComponent;
  let fixture: ComponentFixture<ListsubserviceformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsubserviceformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsubserviceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
