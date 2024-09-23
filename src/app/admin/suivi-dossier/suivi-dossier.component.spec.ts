import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviDossierComponent } from './suivi-dossier.component';

describe('SuiviDossierComponent', () => {
  let component: SuiviDossierComponent;
  let fixture: ComponentFixture<SuiviDossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviDossierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
