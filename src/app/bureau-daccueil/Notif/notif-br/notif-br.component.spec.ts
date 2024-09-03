import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifBRComponent } from './notif-br.component';

describe('NotifBRComponent', () => {
  let component: NotifBRComponent;
  let fixture: ComponentFixture<NotifBRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifBRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifBRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
