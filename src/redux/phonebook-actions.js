import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from './phonebook-types';
import shortid from 'shortid';

export const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

export const deleteContact = contactId => ({
  type: DELETE_CONTACT,
  payload: contactId,
});

export const changeFilter = value => ({
  type: CHANGE_FILTER,
  payload: value,
});
