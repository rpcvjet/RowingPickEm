import { TestBed } from '@angular/core/testing';

import { RowerService } from './rower.service';

describe('RowerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RowerService = TestBed.get(RowerService);
    expect(service).toBeTruthy();
  });
});
