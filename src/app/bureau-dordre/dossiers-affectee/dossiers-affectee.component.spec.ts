import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersAffecteeComponent } from './dossiers-affectee.component';

describe('DossiersAffecteeComponent', () => {
  let component: DossiersAffecteeComponent;
  let fixture: ComponentFixture<DossiersAffecteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossiersAffecteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DossiersAffecteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
