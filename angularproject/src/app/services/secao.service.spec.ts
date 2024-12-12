/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SecaoService } from './secao.service';

describe('Service: Secao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecaoService]
    });
  });

  it('should ...', inject([SecaoService], (service: SecaoService) => {
    expect(service).toBeTruthy();
  }));
});
