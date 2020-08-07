import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewindividualbookingComponent } from './viewindividualbooking.component';

describe('ViewindividualbookingComponent', () => {
  let component: ViewindividualbookingComponent;
  let fixture: ComponentFixture<ViewindividualbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewindividualbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewindividualbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
