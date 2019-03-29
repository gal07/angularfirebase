import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireStorageComponent } from './fire-storage.component';

describe('FireStorageComponent', () => {
  let component: FireStorageComponent;
  let fixture: ComponentFixture<FireStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
