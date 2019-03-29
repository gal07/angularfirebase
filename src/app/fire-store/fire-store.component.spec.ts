import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireStoreComponent } from './fire-store.component';

describe('FireStoreComponent', () => {
  let component: FireStoreComponent;
  let fixture: ComponentFixture<FireStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
