import { TestBed } from '@angular/core/testing';

import { JoblessService } from './jobless.service';

describe('JoblessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JoblessService = TestBed.get(JoblessService);
    expect(service).toBeTruthy();
  });
});
