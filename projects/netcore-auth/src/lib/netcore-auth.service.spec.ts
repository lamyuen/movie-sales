import { TestBed } from '@angular/core/testing';

import { NetcoreAuthService } from './netcore-auth.service';

describe('NetcoreAuthService', () => {
  let service: NetcoreAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetcoreAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
