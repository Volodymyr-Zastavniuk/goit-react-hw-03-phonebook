import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const parcedContacts = JSON.parse(localStorage.getItem('savedContacts'));
    console.log(parcedContacts);
    if (parcedContacts) {
      this.setState({ contacts: parcedContacts });
    }
  }
  componentDidUpdate(_, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (prevContacts !== nextContacts) {
      localStorage.setItem('savedContacts', JSON.stringify(nextContacts));
    }
  }

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  addContact = newContact => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <Section>
          <h1>Phonebook</h1>
          <ContactForm
            contacts={contacts}
            onSubmit={this.addContact}
          ></ContactForm>
        </Section>
        <Section>
          <h2>Contacts</h2>
          <Filter
            filter={filter}
            onInputChange={this.handleInputChange}
          ></Filter>
          <ContactList
            filteredContacts={filteredContacts}
            onDeleteBtnClick={this.deleteContact}
          ></ContactList>
        </Section>
      </>
    );
  }
}
