import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedriverformComponent } from './createdriverform.component';

describe('CreatedriverformComponent', () => {
  let component: CreatedriverformComponent;
  let fixture: ComponentFixture<CreatedriverformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedriverformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedriverformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
