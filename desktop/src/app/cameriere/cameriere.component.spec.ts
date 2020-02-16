import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameriereComponent } from './cameriere.component';

describe('CameriereComponent', () => {
  let component: CameriereComponent;
  let fixture: ComponentFixture<CameriereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameriereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameriereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
