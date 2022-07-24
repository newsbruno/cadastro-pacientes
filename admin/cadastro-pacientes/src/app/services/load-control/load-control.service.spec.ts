import { TestBed } from '@angular/core/testing';

import { LoadControlService } from './load-control.service';

describe('LoadControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadControlService = TestBed.get(LoadControlService);
    expect(service).toBeTruthy();
  });
});
