import React, { useState, useEffect, Component } from 'react';
import shortid from 'shortid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { connect } from 'react-redux';
import { addContact } from '../redux/phonebook-actions';
import initialContacts from '../initialContacts.json';

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    console.log('component useEffect');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      // setContacts(contacts => [...parsedContacts]);
    }
  }, []);
  useEffect(() => {
    console.log('обновились контакты');
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      {contacts.length > 0 ? <Filter /> : <p>Your phonebook is empty</p>}

      <ContactList />
    </div>
  );
}

export default connect(null, null)(App);
