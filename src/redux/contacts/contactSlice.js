import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactOperations';

function pending(state) {
  state.isLoading = true;
}

function rejected(state, { payload }) {
  state.isLoading = false;
  state.error = payload;
}

function fulfilled(state) {
  state.isLoading = false;
  state.error = null;
}

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [addContact.pending]: pending,
    [fetchContacts.pending]: pending,
    [deleteContact.pending]: pending,

    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      fulfilled(state);
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.items.push(payload);
      fulfilled(state);
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(contact => contact.id !== payload);
      fulfilled(state);
    },

    [fetchContacts.rejected]: rejected,
    [addContact.rejected]: rejected,
    [deleteContact.rejected]: rejected,
  },
});

export const contactsReducer = contactSlice.reducer;
