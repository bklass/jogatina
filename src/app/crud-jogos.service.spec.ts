import { TestBed, inject } from '@angular/core/testing';

import { CrudJogosService } from './crud-jogos.service';

describe('CrudJogosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudJogosService]
    });
  });

  it('should be created', inject([CrudJogosService], (service: CrudJogosService) => {
    expect(service).toBeTruthy();
  }));
});
