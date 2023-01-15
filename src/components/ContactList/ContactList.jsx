import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';
import './ContactList.css';

const ContactList = ({ filteredContacts, onDeleteBtnClick }) => {
  return (
    <ul className="contact-list">
      <ContactListItem
        filteredContacts={filteredContacts}
        onDeleteBtnClick={onDeleteBtnClick}
      ></ContactListItem>
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.array,
  onDeleteBtnClick: PropTypes.func,
};

export default ContactList;
