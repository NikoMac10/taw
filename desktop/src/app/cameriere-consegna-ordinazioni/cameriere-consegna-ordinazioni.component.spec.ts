import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameriereConsegnaOrdinazioniComponent } from './cameriere-consegna-ordinazioni.component';

describe('CameriereConsegnaOrdinazioniComponent', () => {
  let component: CameriereConsegnaOrdinazioniComponent;
  let fixture: ComponentFixture<CameriereConsegnaOrdinazioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameriereConsegnaOrdinazioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameriereConsegnaOrdinazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
