import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getIsTryAdd } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';
import { Button } from 'Components/Button/Button';
import { Label, StyledForm } from './ContactForm.styled';
import toast, { Toaster } from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isTryAdd = useSelector(getIsTryAdd);

  const handleSubmit = evt => {
    evt.preventDefault();
    const newName = evt.target.elements.name.value;
    const newNumber = evt.target.elements.number.value;
    const isSameName = contacts.find(
      ({ name }) => name.toLowerCase().trim() === newName.toLowerCase().trim()
    );
    const isSameNumber = contacts.find(({ number }) => number === newNumber);

    if (isSameName) {
      return toast(
        `Contact with this name already exists.
        Please use a different name.`
      );
    }
    if (isSameNumber) {
      return toast(
        `Contact with this number already exists. Please enter a new number.`
      );
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
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <Label>
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
      <Button type="submit" disabled={isTryAdd}>
        {isTryAdd ? (
          <ThreeDots
            height="20px"
            width="40px"
            radius="9"
            color="#F3C653"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          'Add contact'
        )}
      </Button>
      <Toaster />
    </StyledForm>
  );
};
export default ContactForm;
