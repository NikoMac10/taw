import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaristaComponent } from './pizzaiolo.component';

describe('BaristaComponent', () => {
  let component: BaristaComponent;
  let fixture: ComponentFixture<BaristaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaristaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
