import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowersComponent } from './rowers.component';

describe('RowersComponent', () => {
  let component: RowersComponent;
  let fixture: ComponentFixture<RowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
