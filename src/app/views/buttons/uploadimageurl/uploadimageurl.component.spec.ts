import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadimageurlComponent } from './uploadimageurl.component';

describe('UploadimageurlComponent', () => {
  let component: UploadimageurlComponent;
  let fixture: ComponentFixture<UploadimageurlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadimageurlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadimageurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
