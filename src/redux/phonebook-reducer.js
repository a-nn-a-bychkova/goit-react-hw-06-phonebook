import { createReducer } from '@reduxjs/toolkit';
import actions from '../redux/phonebook-actions';
import initialContacts from '../initialContacts.json';

export const filterReducer = createReducer(' ', {
  [actions.changeFilter]: (_, action) => action.payload,
});
export const contactsReducer = createReducer(initialContacts, {
  [actions.addContact]: (state, { payload }) => {
    return [...state, payload];
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
