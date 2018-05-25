export declare namespace Contacts {
  interface Options {
    /** Show the number of contacts in the accordion title */
    showCount?: boolean;
    /** Show copy to clipboard button */
    showCopyToClipboard?: boolean;
    /** Should all panels be open on load. Specify 'first' to only have the first panel open */
    expandPanels?: boolean | 'first';
    /** Will format the string supplied to the mailto href for the email address.
    EXAMPLE:
    emailFormatter: (contact: Contacts.Contact) => {
            return contact.email + `?subject=${contact.name}&cc=test@test.com&bcc=test1@test.com,test2@test.com&body=Hello World`;
    }

    Because the formatter is a closure, properties from outside its scope can be supplied and passed down
    This allows the formatter to change the properties by passing a new closure reference
    EXAMPLE:
    const loanNumber = '1234567';
    emailFormatter: (contact: Contacts.Contact) => {
            return contact.email + `?subject=[${loanNumber}]`;
    }
    */
    emailFormatter?: (contact: Contact) => string;
  }

  interface Group {
    label?: string;
    isOpen: boolean;
    contacts: Contact[];
  }

  interface Contact {
    name: string;
    email: string;
    phone: Phone[];
    title: string;
  }

  interface Phone {
    label?: string;
    number: string;
  }
}
