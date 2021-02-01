import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phonebook-actions';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.List}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.Item}>
        <p className={s.Text}>
          {name}: {number}
        </p>
        <button
          type="button"
          onClick={() => {
            onDeleteContact(id);
          }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts, filter }) => ({
  contacts: getVisibleContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
