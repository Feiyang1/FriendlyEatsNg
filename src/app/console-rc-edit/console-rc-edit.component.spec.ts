import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleRcEditComponent } from './console-rc-edit.component';

describe('ConsoleRcEditComponent', () => {
  let component: ConsoleRcEditComponent;
  let fixture: ComponentFixture<ConsoleRcEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleRcEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleRcEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
