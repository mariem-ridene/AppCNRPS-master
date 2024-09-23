import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationStandardComponent } from './affectation-standard.component';

describe('AffectationStandardComponent', () => {
  let component: AffectationStandardComponent;
  let fixture: ComponentFixture<AffectationStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectationStandardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectationStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
