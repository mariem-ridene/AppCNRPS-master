import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauDordreDashboardComponent } from './bureau-dordre-dashboard.component';

describe('BureauDordreDashboardComponent', () => {
  let component: BureauDordreDashboardComponent;
  let fixture: ComponentFixture<BureauDordreDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BureauDordreDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BureauDordreDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
