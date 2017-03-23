import { WebAPI } from '../../../helpers/web-api';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ContactViewed, ContactUpdated } from '../../../event/messages';

export class ContactList {
    static inject() { return [WebAPI, EventAggregator]};

    constructor(api, ea) {
        this.api = api;
        this.ea = ea;
        this.contacts = [];

        this.ea.subscribe(ContactViewed, msg => this.select(msg.contact));
        this.ea.subscribe(ContactUpdated, msg => {
            let id = msg.contact.id;
            let found = this.contacts.find(x => x.id === id);
            Object.assign(found, msg.contact);
        });

        this.message = 'User List Page.';
    }

    created() {
        this.api.getContactList().then(contacts => this.contacts = contacts);
    }

    select(contact) {
        this.selectedId = contact.id;
        return true;
    }
}