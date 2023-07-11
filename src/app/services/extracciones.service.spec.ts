import { TestBed } from '@angular/core/testing';

import { ExtraccionesService } from './extracciones.service';

describe('ExtraccionesService', () => {
  let service: ExtraccionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtraccionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
