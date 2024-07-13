import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercrubComponent } from './usercrub.component';

describe('UsercrubComponent', () => {
  let component: UsercrubComponent;
  let fixture: ComponentFixture<UsercrubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsercrubComponent]
    });
    fixture = TestBed.createComponent(UsercrubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
