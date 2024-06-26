import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderChallengeComponent } from './header-challenge.component';

describe('HeaderChallengeComponent', () => {
  let component: HeaderChallengeComponent;
  let fixture: ComponentFixture<HeaderChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderChallengeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
