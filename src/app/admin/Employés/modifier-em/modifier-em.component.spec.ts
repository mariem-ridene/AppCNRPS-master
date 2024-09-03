import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEmComponent } from './modifier-em.component';

describe('ModifierEmComponent', () => {
  let component: ModifierEmComponent;
  let fixture: ComponentFixture<ModifierEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierEmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
