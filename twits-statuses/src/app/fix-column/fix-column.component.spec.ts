import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixColumnComponent } from './fix-column.component';

describe('FixColumnComponent', () => {
  let component: FixColumnComponent;
  let fixture: ComponentFixture<FixColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
