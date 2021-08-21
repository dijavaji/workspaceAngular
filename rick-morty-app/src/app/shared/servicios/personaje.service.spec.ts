import { TestBed } from '@angular/core/testing';

import { PersonajeService } from './personaje.service';

describe('PersonajeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonajeService = TestBed.get(PersonajeService);
    expect(service).toBeTruthy();
  });
});
