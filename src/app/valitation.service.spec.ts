import { TestBed } from '@angular/core/testing';

import { ValitationService } from './valitation.service';

describe('ValitationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValitationService = TestBed.get(ValitationService);
    expect(service).toBeTruthy();
  });
});
