import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/contactSlice';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    contact: contactsReducer,
    filter: filterReducer,
  },
});
