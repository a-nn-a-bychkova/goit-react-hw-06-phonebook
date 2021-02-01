import React, { useState } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/phonebook-actions';
import PropTypes from 'prop-types';
import s from '../styles/Input.module.css';

function ContactForm(props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    console.log(name, value);
    console.log(props);
    if (e.currentTarget.name === 'name') {
      setName(e.currentTarget.value);
    } else if (e.currentTarget.name === 'number') {
      setNumber(e.currentTarget.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    checkContact(name, number);
    reset();
  };

  const checkContact = (name, number) => {
    console.log('contacts in checkContact', props.contacts);
    const isNameInContact = props.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isNameInContact) {
      alert(`${name} is already in contact`);
    } else if (name !== '' || number !== '') {
      const newContact = {
        name,
        number,
      };
      props.onSubmit(newContact);
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit} className={s.Form}>
      <label className={s.Label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={s.Input}
        />
      </label>
      <label className={s.Label}>
        Number
        <input
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          className={s.Input}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: newContact => dispatch(actions.addContact(newContact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
