import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgTelComponent } from './msg-tel.component';

describe('MsgTelComponent', () => {
  let component: MsgTelComponent;
  let fixture: ComponentFixture<MsgTelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgTelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
