import axios from 'axios';

axios.defaults.baseURL = 'https://63c1133199c0a15d28e0e4e7.mockapi.io/api/v1/';

export async function getContacts() {
  const { data } = await axios.get(`contacts`);
  return data;
}

export async function postContact(newContact) {
  const { data } = await axios.post('contacts', newContact);
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`contacts/${contactId}`);
  return data;
}
