import { TestBed } from '@angular/core/testing';

import { ComestiblesService } from './comestibles.service';

describe('ComestiblesService', () => {
  let service: ComestiblesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComestiblesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
