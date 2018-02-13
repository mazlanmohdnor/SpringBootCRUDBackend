import { TestBed, inject } from '@angular/core/testing';

import { SpringrestService } from './springrest.service';

describe('SpringrestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpringrestService]
    });
  });

  it('should be created', inject([SpringrestService], (service: SpringrestService) => {
    expect(service).toBeTruthy();
  }));
});
