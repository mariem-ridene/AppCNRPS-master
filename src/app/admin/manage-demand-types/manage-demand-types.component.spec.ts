import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDemandTypesComponent } from './manage-demand-types.component';

describe('ManageDemandTypesComponent', () => {
  let component: ManageDemandTypesComponent;
  let fixture: ComponentFixture<ManageDemandTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDemandTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDemandTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
