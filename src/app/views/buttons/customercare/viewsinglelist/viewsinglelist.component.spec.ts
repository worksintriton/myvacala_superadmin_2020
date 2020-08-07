import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsinglelistComponent } from './viewsinglelist.component';

describe('ViewsinglelistComponent', () => {
  let component: ViewsinglelistComponent;
  let fixture: ComponentFixture<ViewsinglelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsinglelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsinglelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
