import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';
import { Button } from 'Components/Button/Button';
import { Label, StyledForm } from './ContactForm.styled';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleSubmit = evt => {
    evt.preventDefault();
    const newName = evt.target.elements.name.value;
    const newNumber = evt.target.elements.number.value;
    const isSameContact = contacts.find(
      ({ name, number }) =>
        name.toLowerCase().trim() === newName.toLowerCase().trim() ||
        number === newNumber
    );
    if (isSameContact) {
      evt.target.reset();
      return toast(`"${newName}" is already in contacts`);
    }
    dispatch(
      addContacts({
        name: newName,
        number: newNumber,
      })
    );
    evt.target.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label>
        {' '}
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
      <Toaster />
    </StyledForm>
  );
};
export default ContactForm;
