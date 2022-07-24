import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteCadastroComponent } from './paciente-cadastro.component';

describe('PacienteCadastroComponent', () => {
  let component: PacienteCadastroComponent;
  let fixture: ComponentFixture<PacienteCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
