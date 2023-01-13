import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectGetVisibleContacts } from '../../redux/contacts/selectContacts';
import { deleteContact } from '../../redux/contacts/contactOperations';

import {
  ButtonDel,
  ItemContact,
  NameUser,
  ListContacts,
} from './ListContacts.styled';

const ContactList = () => {

  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectGetVisibleContacts);

  return (
    <ListContacts>
      {visibleContacts.map(({ name, phone, id }) => (
        <ItemContact key={id}>
          <NameUser>{name}:</NameUser>
          <span>{phone}</span>
          <ButtonDel type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ButtonDel>
        </ItemContact>
      ))}
    </ListContacts>
  );
};

export default ContactList;
