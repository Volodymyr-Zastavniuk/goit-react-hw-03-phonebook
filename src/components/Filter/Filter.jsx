import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ filter, onInputChange }) => {
  return (
    <label className="filter">
      Find contact by name
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={onInputChange}
        className="filter__input"
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onInputChange: PropTypes.func,
};
export default Filter;
