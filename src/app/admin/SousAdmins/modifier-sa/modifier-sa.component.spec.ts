import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSaComponent } from './modifier-sa.component';

describe('ModifierSaComponent', () => {
  let component: ModifierSaComponent;
  let fixture: ComponentFixture<ModifierSaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierSaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierSaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
