import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CassiereIncassoComponent } from './cassiere-incasso.component';

describe('CassiereIncassoComponent', () => {
  let component: CassiereIncassoComponent;
  let fixture: ComponentFixture<CassiereIncassoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CassiereIncassoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CassiereIncassoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
