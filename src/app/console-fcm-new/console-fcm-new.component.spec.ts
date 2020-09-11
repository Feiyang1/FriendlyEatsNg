import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleFcmNewComponent } from './console-fcm-new.component';

describe('ConsoleFcmNewComponent', () => {
  let component: ConsoleFcmNewComponent;
  let fixture: ComponentFixture<ConsoleFcmNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleFcmNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleFcmNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
