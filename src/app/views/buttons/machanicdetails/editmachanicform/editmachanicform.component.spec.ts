import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmachanicformComponent } from './editmachanicform.component';

describe('EditmachanicformComponent', () => {
  let component: EditmachanicformComponent;
  let fixture: ComponentFixture<EditmachanicformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmachanicformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmachanicformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
