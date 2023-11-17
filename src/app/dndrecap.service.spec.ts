import { TestBed } from '@angular/core/testing';

import { DndrecapService } from './dndrecap.service';

describe('DndrecapService', () => {
  let service: DndrecapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DndrecapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
