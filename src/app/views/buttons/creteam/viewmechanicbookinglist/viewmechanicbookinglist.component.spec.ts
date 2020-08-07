import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmechanicbookinglistComponent } from './viewmechanicbookinglist.component';

describe('ViewmechanicbookinglistComponent', () => {
  let component: ViewmechanicbookinglistComponent;
  let fixture: ComponentFixture<ViewmechanicbookinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmechanicbookinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmechanicbookinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
