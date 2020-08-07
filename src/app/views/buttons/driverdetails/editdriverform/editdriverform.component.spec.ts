import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdriverformComponent } from './editdriverform.component';

describe('EditdriverformComponent', () => {
  let component: EditdriverformComponent;
  let fixture: ComponentFixture<EditdriverformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdriverformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdriverformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
