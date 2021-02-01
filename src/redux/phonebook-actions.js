import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/AddContact', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
const deleteContact = createAction('phonebook/DeleteContact');
const changeFilter = createAction('phonebook/ChangeFilter');

export default { addContact, deleteContact, changeFilter };
