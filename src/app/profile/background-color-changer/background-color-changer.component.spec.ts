import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundColorChangerComponent } from './background-color-changer.component';

describe('BackgroundColorChangerComponent', () => {
  let component: BackgroundColorChangerComponent;
  let fixture: ComponentFixture<BackgroundColorChangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundColorChangerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundColorChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
