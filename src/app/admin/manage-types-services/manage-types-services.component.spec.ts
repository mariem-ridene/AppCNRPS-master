import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTypesServicesComponent } from './manage-types-services.component';

describe('ManageTypesServicesComponent', () => {
  let component: ManageTypesServicesComponent;
  let fixture: ComponentFixture<ManageTypesServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTypesServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTypesServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
