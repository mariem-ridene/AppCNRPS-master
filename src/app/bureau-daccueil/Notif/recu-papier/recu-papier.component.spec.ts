import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuPapierComponent } from './recu-papier.component';

describe('RecuPapierComponent', () => {
  let component: RecuPapierComponent;
  let fixture: ComponentFixture<RecuPapierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuPapierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuPapierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
