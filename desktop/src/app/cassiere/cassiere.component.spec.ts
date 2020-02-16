import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CassiereComponent } from './cassiere.component';

describe('CassiereComponent', () => {
  let component: CassiereComponent;
  let fixture: ComponentFixture<CassiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CassiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CassiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
