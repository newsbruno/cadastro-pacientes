import { TestBed } from '@angular/core/testing';

import { DrawerControllerService } from './drawer-controller.service';

describe('DrawerControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrawerControllerService = TestBed.get(DrawerControllerService);
    expect(service).toBeTruthy();
  });
});
