import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorMessagesComponent} from '@app/shared/components';

@NgModule({
  imports: [CommonModule],
  declarations: [ErrorMessagesComponent],
  exports: [ErrorMessagesComponent]
})
export class SharedModule {}
