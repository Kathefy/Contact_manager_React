import React, { Component, Fragment } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        email: 'peter@gmail.com',
        name: 'Peter Johnson',
        phone: '111-111'
      },
      {
        id: 2,
        email: 'sarah@gmail.com',
        name: 'Sarah Brown',
        phone: '222-222'
      },
      {
        id: 3,
        email: 'oliver@gmail.com',
        name: 'Oliver Smith',
        phone: '333-333'
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </Fragment>
    );
  }
}

export default Contacts;
