import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesubserviceformComponent } from './createsubserviceform.component';

describe('CreatesubserviceformComponent', () => {
  let component: CreatesubserviceformComponent;
  let fixture: ComponentFixture<CreatesubserviceformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesubserviceformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesubserviceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
