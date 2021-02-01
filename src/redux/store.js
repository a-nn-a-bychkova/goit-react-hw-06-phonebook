import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import initialContacts from '../initialContacts.json';
import { filterReducer, contactsReducer } from './phonebook-reducer';

const rootReducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
