import { TestBed } from '@angular/core/testing';

import { IconService } from './icon.service';

describe('IconService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } })
  );

  it('should be created', () => {
    const service: IconService = TestBed.get(IconService);
    expect(service).toBeTruthy();
  });
});
