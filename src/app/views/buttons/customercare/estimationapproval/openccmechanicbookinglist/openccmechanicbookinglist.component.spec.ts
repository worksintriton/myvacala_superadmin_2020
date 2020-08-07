import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenccmechanicbookinglistComponent } from './openccmechanicbookinglist.component';

describe('OpenccmechanicbookinglistComponent', () => {
  let component: OpenccmechanicbookinglistComponent;
  let fixture: ComponentFixture<OpenccmechanicbookinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenccmechanicbookinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenccmechanicbookinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
