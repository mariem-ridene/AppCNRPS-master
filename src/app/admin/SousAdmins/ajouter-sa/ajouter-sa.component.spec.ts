import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSAComponent } from './ajouter-sa.component';

describe('AjouterSAComponent', () => {
  let component: AjouterSAComponent;
  let fixture: ComponentFixture<AjouterSAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterSAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
