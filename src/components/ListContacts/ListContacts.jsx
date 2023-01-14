import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectGetVisibleContacts } from '../../redux/contacts/selectContacts';
import { deleteContact } from '../../redux/contacts/contactOperations';

import {
  ButtonDel,
  ItemContact,
  NameUser,
  ListContacts,
  Phone,
} from './ListContacts.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectGetVisibleContacts);

  return (
    <ListContacts>
      {visibleContacts.map(({ name, phone, id }) => (
        <ItemContact key={id}>
          <NameUser>{name}:</NameUser>
          <Phone>{phone}</Phone>
          <ButtonDel type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ButtonDel>
        </ItemContact>
      ))}
    </ListContacts>
  );
};

export default ContactList;
