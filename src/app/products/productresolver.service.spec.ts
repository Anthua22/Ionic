import { TestBed } from '@angular/core/testing';

import { ProductresolverService } from './productresolver.service';

describe('ProductresolverService', () => {
  let service: ProductresolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductresolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
