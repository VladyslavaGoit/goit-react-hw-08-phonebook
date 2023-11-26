import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import ContactForm from '../../Components/ContactForm/ContactForm';
import { ContactList } from '../../Components/ContactList/ContactList';
import Filter from '../../Components/Filter/Filter';
import { Container } from 'Components/Container.styled';
import { Section, SubTitle, Title } from './Phonebook.styled';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />
        <SubTitle>Contacts</SubTitle>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        {!isLoading && error && <b>Something went wrong...</b>}
        <ContactList />
      </Container>
    </Section>
  );
}