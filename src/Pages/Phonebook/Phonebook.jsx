import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getContacts, getError } from 'redux/contacts/selectors';
import ContactForm from '../../Components/ContactForm/ContactForm';
import { ContactList } from '../../Components/ContactList/ContactList';
import Filter from '../../Components/Filter/Filter';
import { Container } from 'Components/Container.styled';
import { RequestInfo, Section, SubTitle } from './Phonebook.styled';
import { Toaster } from 'react-hot-toast';

export default function Phonebook() {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <SubTitle>
          {contacts.length > 0 ? 'New contacts' : 'Add your first contact'}
        </SubTitle>
        <ContactForm />
        {contacts.length > 0 && (
          <>
            <SubTitle>My contacts</SubTitle>
            <Filter />
          </>
        )}
        {error && <RequestInfo>Something went wrong. Try again</RequestInfo>}
        <ContactList />
      </Container>
      <Toaster
        toastOptions={{
          style: {
            gap: '10px',
            background: '#FFFEF9',
          },
          success: {
            duration: 1000,
            iconTheme: {
              primary: '#F3C653',
              secondary: '#FFFEF9',
            },
          },
        }}
      />
    </Section>
  );
}
