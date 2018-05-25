## Contacts Panel
Displays a list of contact information with email address and phone numbers

```bash
# Import Module
import { ContactsPanelModule } from '@mello-labs/contacts-panel';

# Add to imports
@NgModule({
  imports: [ CommonModule, ContactsPanelModule ],
})

# Add Selector in HTML
<lib-contacts-panel [contacts]="contacts"
                    [options]="contactOptions">
</lib-contacts-panel>

# Import typings
import { Contacts } from '@mello-labs/contacts-panel';

# Set options
public contactOptions: Contacts.Options = {
    showCount: true,
    showCopyToClipboard: true,
    defaultOpen: 'first',
    emailFormatter: (contact: Contacts.Contact) => {
      return contact.email + `?subject=${contact.name}&cc=test@test.com&bcc=test1@test.com,test2@test.com&body=Hello World`;
    },
};

# Example of how to supply outside scope to the email formatter. In this case adds loan number to subject which does not exist in the contact model
public updateEmail(loanNumber: string) {
    // Create new instance of contactOptions with email formatter updated to include outside scope
    this.contactOptions = {
      ...this.contactOptions,
      emailFormatter: (contact: Contacts.Contact) => {
        return contact.email + `?subject=${loanNumber}&cc=test@test.com&bcc=test1@test.com,test2@test.com&body=Hello World`;
      },
    }
}

# Supply contacts. Example model below:
public contacts: Contacts.Group[] = [
    {
      label: 'Title Contacts',
      isOpen: true,
      contacts: [
        {
          name: 'John User',
          email: 'john@example.com',
          title: 'Lead Awesomeizer',
          phone: [
            {
              label: 'Direct',
              number: '123 456 7890',
            },
            {
              label: 'Office',
              number: '123 456 7890',
            },
            {
              label: 'Cell',
              number: '123 456 7890',
            },
          ],
        },
        {
          name: 'Jane User',
          email: 'jane@example.com',
          title: 'Lead Awesomeizer',
          phone: [
            {
              label: 'Direct',
              number: '123 456 7890',
            },
          ],
        },
        {
          name: 'Joe User',
          email: 'joe@example.com',
          title: 'Lead Awesomeizer',
          phone: [
            {
              label: 'Direct',
              number: '123 456 7890',
            },
          ],
        },
      ],
    },
    {
      label: 'Borrower Contacts',
      isOpen: true,
      contacts: [
        {
          name: 'James User',
          email: 'james@example.com',
          title: 'Lead Awesomeizer',
          phone: [
            {
              label: 'Direct',
              number: '123 456 7890',
            },
          ],
        },
        {
          name: 'Johnson User',
          email: 'johnson@example.com',
          title: 'Lead Awesomeizer',
          phone: [
            {
              label: 'Direct',
              number: '123 456 7890',
            },
          ],
        },
      ],
    },
];
```
