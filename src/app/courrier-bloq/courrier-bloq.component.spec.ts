import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourrierBloqComponent } from './courrier-bloq.component';

describe('CourrierBloqComponent', () => {
  let component: CourrierBloqComponent;
  let fixture: ComponentFixture<CourrierBloqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourrierBloqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourrierBloqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
