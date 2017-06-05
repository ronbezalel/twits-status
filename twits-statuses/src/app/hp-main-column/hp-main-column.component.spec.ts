import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpMainColumnComponent } from './hp-main-column.component';

describe('HpMainColumnComponent', () => {
  let component: HpMainColumnComponent;
  let fixture: ComponentFixture<HpMainColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpMainColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpMainColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
