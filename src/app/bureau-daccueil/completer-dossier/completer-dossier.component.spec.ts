import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleterDossierComponent } from './completer-dossier.component';

describe('CompleterDossierComponent', () => {
  let component: CompleterDossierComponent;
  let fixture: ComponentFixture<CompleterDossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleterDossierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleterDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
