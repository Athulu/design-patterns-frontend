import { TestBed } from '@angular/core/testing';

import { DesignPatternsClientService } from './design-patterns-client.service';

describe('DesignPatternsClientService', () => {
  let service: DesignPatternsClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignPatternsClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
