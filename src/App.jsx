import React from 'react';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { useContacts } from './redux/selectors/selectors';

import ContactForm from './components/Form';

import { fetchContacts } from './redux/contacts/contactOperations';

import ContactList from './components/ListContacts';
import Filter from './components/Filter';

import { PhoneBook, TitleH1, TitleH2, Message, Loader } from 'App.styled';

const App = () => {
  const { contacts, loading, error } = useContacts();

  const notify = error =>
    toast(`${error}! Something went wrong...`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (!error) return;
    notify(error);
  }, [error]);

  return (
    <PhoneBook>
      <TitleH1>Phonebook</TitleH1>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <ContactForm />
      {loading && (
        <Loader>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </Loader>
      )}
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
