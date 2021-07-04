import { TestBed } from '@angular/core/testing';

import { AuthorsserviceService } from './authorsservice.service';

describe('AuthorsserviceService', () => {
  let service: AuthorsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
