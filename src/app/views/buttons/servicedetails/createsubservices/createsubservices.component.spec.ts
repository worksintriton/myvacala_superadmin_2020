import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesubservicesComponent } from './createsubservices.component';

describe('CreatesubservicesComponent', () => {
  let component: CreatesubservicesComponent;
  let fixture: ComponentFixture<CreatesubservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesubservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesubservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
