import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactOperations';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.items.push(payload);
      state.isLoading = false;
      state.error = null;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;

      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(contact => contact.id !== payload);
      state.isLoading = false;
      state.error = null;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
      state.error = payload;
    },
  },
});

export const contactsReducer = contactSlice.reducer;
