import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFuncComponent } from './display-func.component';

describe('DisplayFuncComponent', () => {
  let component: DisplayFuncComponent;
  let fixture: ComponentFixture<DisplayFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
