import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss']
})
export class ErrorMessagesComponent implements OnInit, OnChanges {
  @Input() errorObj: {[errorName: string]: any};
  @Input() errorMessages: {[errorName: string]: string};

  filteredErrors: string[] = [];

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    const errorObjChange = changes.errorObj;
    if (
      errorObjChange &&
      !this._isObjEqual(
        errorObjChange.currentValue,
        errorObjChange.previousValue
      )
    ) {
      this._filterErrors();
    }
  }

  private _filterErrors() {
    if (!this.errorObj) {
      this.filteredErrors = [];
      return;
    }
    this.filteredErrors = Object.keys(this.errorObj).map(err => {
      return this.errorMessages[err];
    });
  }

  private _isObjEqual(a, b) {
    try {
      if (JSON.stringify(a) === JSON.stringify(b)) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }
}
