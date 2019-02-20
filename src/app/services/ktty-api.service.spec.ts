import { TestBed } from '@angular/core/testing';

import { KttyApiService } from './ktty-api.service';

describe('KttyApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KttyApiService = TestBed.get(KttyApiService);
    expect(service).toBeTruthy();
  });
});
