import { TestBed } from '@angular/core/testing';

import { DestiladosService } from './destilados.service';

describe('DestiladosService', () => {
  let service: DestiladosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestiladosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
