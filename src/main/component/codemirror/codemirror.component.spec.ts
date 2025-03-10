import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodemirrorComponent } from './codemirror.component';

describe('CodemirrorComponent', () => {
  let component: CodemirrorComponent;
  let fixture: ComponentFixture<CodemirrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodemirrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodemirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
