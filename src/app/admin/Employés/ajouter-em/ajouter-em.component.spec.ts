import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEmComponent } from './ajouter-em.component';

describe('AjouterEmComponent', () => {
  let component: AjouterEmComponent;
  let fixture: ComponentFixture<AjouterEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterEmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
