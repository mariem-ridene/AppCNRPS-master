import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifMPComponent } from './notif-mp.component';

describe('NotifMPComponent', () => {
  let component: NotifMPComponent;
  let fixture: ComponentFixture<NotifMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifMPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
