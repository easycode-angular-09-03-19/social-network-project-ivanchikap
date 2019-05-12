import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFollowsComponent } from './profile-follows.component';

describe('ProfileFollowsComponent', () => {
  let component: ProfileFollowsComponent;
  let fixture: ComponentFixture<ProfileFollowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFollowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFollowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
