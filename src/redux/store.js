import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsReducer, filterReducer } from './phonebook-reducer';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// const phonebookPersistConfig = {
//   key: 'phonebook',
//   storage,
//   blacklist: ['filter'],
// };

const store = configureStore({
  // reducer: persistReducer(phonebookPersistConfig, {
  //   filter: filterReducer,
  //   contacts: contactsReducer,
  // }),

  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// export default { store, persistor };
export default { store };
