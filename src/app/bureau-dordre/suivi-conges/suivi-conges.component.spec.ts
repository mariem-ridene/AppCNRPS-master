import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviCongesComponent } from './suivi-conges.component';

describe('SuiviCongesComponent', () => {
  let component: SuiviCongesComponent;
  let fixture: ComponentFixture<SuiviCongesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviCongesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
