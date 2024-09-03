import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersAAffecterComponent } from './dossiers-a-affecter.component';

describe('DossiersAAffecterComponent', () => {
  let component: DossiersAAffecterComponent;
  let fixture: ComponentFixture<DossiersAAffecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossiersAAffecterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DossiersAAffecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
