import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from './redux/contacts/selectContacts';

import ContactForm from './components/Form';
import { useEffect } from 'react';

import { fetchContacts } from './redux/contacts/contactOperations';

import ContactList from './components/ListContacts';
import Filter from './components/Filter';

import { PhoneBook, TitleH1, TitleH2, Message } from 'App.styled';

const App = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PhoneBook>
      <TitleH1>Phonebook</TitleH1>
      <ContactForm />
      <TitleH2>Contacts</TitleH2>
      {contacts.length === 0 ? (
        <Message>Your phone book is empty, add a contact</Message>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </PhoneBook>
  );
};

export default App;
