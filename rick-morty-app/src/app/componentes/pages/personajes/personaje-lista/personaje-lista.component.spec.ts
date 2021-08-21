import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeListaComponent } from './personaje-lista.component';

describe('PersonajeListaComponent', () => {
  let component: PersonajeListaComponent;
  let fixture: ComponentFixture<PersonajeListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonajeListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
