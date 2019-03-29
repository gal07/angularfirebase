import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireCloudMessagingComponent } from './fire-cloud-messaging.component';

describe('FireCloudMessagingComponent', () => {
  let component: FireCloudMessagingComponent;
  let fixture: ComponentFixture<FireCloudMessagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireCloudMessagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireCloudMessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
