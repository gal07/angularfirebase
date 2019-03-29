import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseRealtimeComponent } from './database-realtime.component';

describe('DatabaseRealtimeComponent', () => {
  let component: DatabaseRealtimeComponent;
  let fixture: ComponentFixture<DatabaseRealtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseRealtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseRealtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
