import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaUsuarioComponent } from './crea-usuario.component';

describe('CreaUsuarioComponent', () => {
  let component: CreaUsuarioComponent;
  let fixture: ComponentFixture<CreaUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
