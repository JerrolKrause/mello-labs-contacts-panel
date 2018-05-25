import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Contacts } from '../../models';

@Component({
  selector: 'lib-contacts-entry',
  templateUrl: './contacts-entry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsEntryComponent implements OnInit {
  @Input() contact: Contacts.Contact;
  @Input() options: Contacts.Options;

  constructor() {}

  ngOnInit() {}

  /**
   * Launch a mailto link, formatting the response if an email formatter was supplied
   * @param contact
   */
  public mailTo(contact: Contacts.Contact) {
    // If email resolver supplied, use that to format the mailto. If not just use standard mailto
    const mailToLink = this.options.emailFormatter ? this.options.emailFormatter(contact) : contact.email;
    window.location.href = 'mailto:' + mailToLink;
  }

  /**
   * Copy text to clipboard
   * @param text
   */
  public copyToClipboard(text: string) {
    if ((<any>window).clipboardData && (<any>window).setData) {
      // IE specific code path to prevent textarea being shown while dialog is visible.
      return (<any>window).clipboardData.setData('Text', text);
    } else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
      const textarea = document.createElement('textarea');
      textarea.textContent = text;
      textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in MS Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        return document.execCommand('copy'); // Security exception may be thrown by some browsers.
      } catch (ex) {
        console.warn('Copy to clipboard failed.', ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }
}
