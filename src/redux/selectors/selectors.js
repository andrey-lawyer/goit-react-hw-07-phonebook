import { createSelector } from '@reduxjs/toolkit';

import { selectFilter } from './../../redux/filter/selectFilter';
import {
  selectContacts,
  selectLoading,
  selectError,
} from './../../redux/contacts/selectContacts';
import { useSelector } from 'react-redux';

export const selectGetVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return { contacts, loading, error };
};
