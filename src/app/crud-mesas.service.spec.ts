import { TestBed, inject } from '@angular/core/testing';

import { CrudMesasService } from './crud-mesas.service';

describe('CrudMesasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudMesasService]
    });
  });

  it('should be created', inject([CrudMesasService], (service: CrudMesasService) => {
    expect(service).toBeTruthy();
  }));
});
