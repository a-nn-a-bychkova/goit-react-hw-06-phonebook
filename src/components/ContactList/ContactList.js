import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/phonebook-actions';
import { getVisibleContacts } from '../../redux/phonebook-selector';
import s from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(actions.deleteContact(id));

  return (
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
}

export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
