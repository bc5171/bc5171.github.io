import { TestBed } from '@angular/core/testing';

import { HeroOffsetService } from './hero-offset.service';

describe('HeroOffsetService', () => {
  let service: HeroOffsetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroOffsetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
