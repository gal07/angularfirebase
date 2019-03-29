import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSiswaComponent } from './add-siswa.component';

describe('AddSiswaComponent', () => {
  let component: AddSiswaComponent;
  let fixture: ComponentFixture<AddSiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
