import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleRcComponent } from './console-rc.component';

describe('ConsoleRcComponent', () => {
  let component: ConsoleRcComponent;
  let fixture: ComponentFixture<ConsoleRcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleRcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleRcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
