import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireFunctionComponent } from './fire-function.component';

describe('FireFunctionComponent', () => {
  let component: FireFunctionComponent;
  let fixture: ComponentFixture<FireFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
