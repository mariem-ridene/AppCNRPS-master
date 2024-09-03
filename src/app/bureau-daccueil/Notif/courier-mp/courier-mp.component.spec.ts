import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierMPComponent } from './courier-mp.component';

describe('CourierMPComponent', () => {
  let component: CourierMPComponent;
  let fixture: ComponentFixture<CourierMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierMPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
