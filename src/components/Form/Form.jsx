import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { nanoid } from 'nanoid';

import { selectContacts } from '../../redux/contacts/selectContacts';
import { addContact } from '../../redux/contacts/contactOperations';

import { FormUser, LabelUser, InputUser, ButtonAdd } from './Form.styled';

const loginInputIdName = nanoid();
const loginInputIdNumber = nanoid();

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    const isInConacts = contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (isInConacts) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact({ name, phone }));
    form.elements.phone.value = '';
    form.elements.name.value = '';
  };

  return (
    <div>
      <FormUser onSubmit={handleSubmit}>
        <LabelUser htmlFor={loginInputIdName}>Name</LabelUser>
        <InputUser
          id={loginInputIdName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <LabelUser htmlFor={loginInputIdNumber}>Number</LabelUser>
        <InputUser
          id={loginInputIdNumber}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ButtonAdd type="submit">Add contact</ButtonAdd>
      </FormUser>
    </div>
  );
};

export default ContactForm;
