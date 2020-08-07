import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreteamComponent } from './creteam.component';

describe('CreteamComponent', () => {
  let component: CreteamComponent;
  let fixture: ComponentFixture<CreteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
