import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlocationlistComponent } from './userlocationlist.component';

describe('UserlocationlistComponent', () => {
  let component: UserlocationlistComponent;
  let fixture: ComponentFixture<UserlocationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlocationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlocationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
