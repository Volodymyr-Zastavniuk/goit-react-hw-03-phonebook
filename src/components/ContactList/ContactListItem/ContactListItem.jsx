import React from 'react';
import PropTypes from 'prop-types';
import './ContactListItem.css';

const ContactListItem = ({ filteredContacts, onDeleteBtnClick }) => {
  return (
    <>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <div className="contact-list__item">
              {name}: {number}
              <button
                type="button"
                onClick={() => onDeleteBtnClick(id)}
                className="contact-list__btn"
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </>
  );
};

ContactListItem.propTypes = {
  filteredContacts: PropTypes.array,
  onDeleteBtnClick: PropTypes.func,
};

export default ContactListItem;
