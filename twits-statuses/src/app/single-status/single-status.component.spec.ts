import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStatusComponent } from './single-status.component';

describe('SingleStatusComponent', () => {
  let component: SingleStatusComponent;
  let fixture: ComponentFixture<SingleStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
