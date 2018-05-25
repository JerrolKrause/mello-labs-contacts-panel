import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContactsPanelComponent } from './contacts-panel.component';
import { ContactsEntryComponent } from './components/contacts-entry/contacts-entry.component';

import { PhoneNumberPipe } from './pipes/phone-number.pipe';

export * from './models';

@NgModule({
  imports: [CommonModule, NgbModule.forRoot()],
  declarations: [ContactsPanelComponent, ContactsEntryComponent, PhoneNumberPipe],
  exports: [ContactsPanelComponent],
})
export class ContactsPanelModule {}
