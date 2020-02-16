import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CassiereGestioneUtentiComponent } from './cassiere-gestione-utenti.component';

describe('CassiereGestioneUtentiComponent', () => {
  let component: CassiereGestioneUtentiComponent;
  let fixture: ComponentFixture<CassiereGestioneUtentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CassiereGestioneUtentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CassiereGestioneUtentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
