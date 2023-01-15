import { nanoid } from 'nanoid';
import { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { contacts, onSubmit } = this.props;
    const normalizedName = name.toLowerCase().trim();
    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number,
    };

    contacts.find(contact => contact.name.toLowerCase() === normalizedName)
      ? alert(`${name} is already in contacts.`)
      : onSubmit(newContact);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit} className="contact__form">
        <label className="contact__label">
          Name{' '}
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleInputChange}
            className="contact__input"
          />
        </label>

        <label className="contact__label">
          Number{' '}
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleInputChange}
            className="contact__input"
          />
        </label>

        <button type="submit" className="contact__btn">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = { contaxts: PropTypes.array, onSubmit: PropTypes.func };

export default ContactForm;
