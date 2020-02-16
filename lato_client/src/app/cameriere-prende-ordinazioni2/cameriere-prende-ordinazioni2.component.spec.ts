import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamerierePrendeOrdinazioni2Component } from './cameriere-prende-ordinazioni.component';

describe('CamerierePrendeOrdinazioni2Component', () => {
  let component: CamerierePrendeOrdinazioni2Component;
  let fixture: ComponentFixture<CamerierePrendeOrdinazioni2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamerierePrendeOrdinazioni2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamerierePrendeOrdinazioni2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
