/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrderhistoryService } from './orderhistory.service';

describe('Service: Orderhistory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderhistoryService]
    });
  });

  it('should ...', inject([OrderhistoryService], (service: OrderhistoryService) => {
    expect(service).toBeTruthy();
  }));
});
