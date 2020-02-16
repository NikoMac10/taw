import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaioloComponent } from './pizzaiolo.component';

describe('PizzaioloComponent', () => {
  let component: PizzaioloComponent;
  let fixture: ComponentFixture<PizzaioloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaioloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaioloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
