import { TestBed } from '@angular/core/testing';

import { DeleteTuorService } from './delete-tuor.service';

describe('DeleteTuorService', () => {
  let service: DeleteTuorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteTuorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
