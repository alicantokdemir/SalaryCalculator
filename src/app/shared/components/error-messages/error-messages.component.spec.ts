import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ErrorMessagesComponent} from '@app/shared/components';
import {SimpleChange} from '@angular/core';

describe('ErrorMessagesComponent', () => {
  let component: ErrorMessagesComponent;
  let fixture: ComponentFixture<ErrorMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorMessagesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the error', () => {
    component.errorMessages = {
      exampleErr: 'Example error message'
    };
    component.errorObj = {
      exampleErr: true
    };
    component.ngOnChanges({
      errorObj: new SimpleChange(null, component.errorObj, true)
    });
    expect(component.filteredErrors).toContain('Example error message');
  });
});
