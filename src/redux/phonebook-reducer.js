import { ADD_CONTACT, CHANGE_FILTER, DELETE_CONTACT } from './phonebook-types';
import initialContacts from '../initialContacts.json';
export const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};
export const contactsReducer = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return { ...state, payload };
    case DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};
