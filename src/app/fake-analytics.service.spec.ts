import { TestBed } from '@angular/core/testing';

import { FakeAnalyticsService } from './fake-analytics.service';

describe('FakeAnalyticsService', () => {
  let service: FakeAnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeAnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
