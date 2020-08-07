import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewccbookinglistComponent } from './viewccbookinglist.component';

describe('ViewccbookinglistComponent', () => {
  let component: ViewccbookinglistComponent;
  let fixture: ComponentFixture<ViewccbookinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewccbookinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewccbookinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
