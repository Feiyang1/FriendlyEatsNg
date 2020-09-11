import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleFcmComponent } from './console-fcm.component';

describe('ConsoleFcmComponent', () => {
  let component: ConsoleFcmComponent;
  let fixture: ComponentFixture<ConsoleFcmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleFcmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleFcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
