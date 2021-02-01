import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from '../redux/phonebook-actions';
import initialContacts from '../initialContacts.json';

const filter = createReducer(' ', {
  [actions.changeFilter]: (_, action) => action.payload,
});
const contacts = createReducer(initialContacts, {
  [actions.addContact]: (state, { payload }) => {
    return [...state, payload];
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
export default combineReducers({
  contacts,
  filter,
});
