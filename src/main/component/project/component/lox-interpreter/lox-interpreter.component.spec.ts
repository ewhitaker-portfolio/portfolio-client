import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoxInterpreterComponent } from './lox-interpreter.component';

describe('LoxInterpreterComponent', () => {
  let component: LoxInterpreterComponent;
  let fixture: ComponentFixture<LoxInterpreterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoxInterpreterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoxInterpreterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
