import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamerierePrendeOrdinazioniComponent } from './cameriere-prende-ordinazioni.component';

describe('CamerierePrendeOrdinazioniComponent', () => {
  let component: CamerierePrendeOrdinazioniComponent;
  let fixture: ComponentFixture<CamerierePrendeOrdinazioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamerierePrendeOrdinazioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamerierePrendeOrdinazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
