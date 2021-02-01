import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { filterReducer, contactsReducer } from './phonebook-reducer';
import logger from 'redux-logger';

// const persistConfig = {
//   key: 'root',
//   storage,
// };
const middleware = [...getDefaultMiddleware(), logger];
console.log(process.env.NODE_ENV);
const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
export default store;
