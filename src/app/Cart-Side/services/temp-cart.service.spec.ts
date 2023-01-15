/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TempCartService } from './temp-cart.service';

describe('Service: TempCart', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TempCartService]
    });
  });

  it('should ...', inject([TempCartService], (service: TempCartService) => {
    expect(service).toBeTruthy();
  }));
});
