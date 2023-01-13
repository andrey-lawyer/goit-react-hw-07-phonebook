import { createSelector } from '@reduxjs/toolkit';

import { selectFilter } from './../filter/selectFilter';

export const selectContacts = state => state.contact.items;

export const selectGetVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
