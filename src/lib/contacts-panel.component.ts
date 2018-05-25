import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation, OnChanges } from '@angular/core';

import { Contacts } from './models';

@Component({
  selector: 'lib-contacts-panel',
  templateUrl: './contacts-panel.component.html',
  styleUrls: [`./contacts-panel.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ContactsPanelComponent implements OnInit, OnChanges {
  @Input() contacts: Contacts.Group[];
  @Input() options: Contacts.Options = {
    showCount: true,
    showCopyToClipboard: true,
    expandPanels: true,
  };

  public openPanels: string = '';

  constructor() {}

  ngOnChanges() {
    if (this.options.expandPanels === true) {
      // Loop through contacts and return string of all panels
      // Returns 'ngb-panel-0,ngb-panel-1,'
      this.openPanels = this.contacts.reduce((a, _b, i) => a + 'ngb-panel-' + i + ',', '');
      console.log(this.openPanels)
    } else if (this.options.expandPanels === 'first'){
      this.openPanels = 'ngb-panel-0';
    }

  }

  ngOnInit() {}
}
