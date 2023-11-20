import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import css from '../app/App.module.css';
import { Container } from 'components/Container.styled';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section>
      <Container>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.subTitle}>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        {!isLoading && error && <b>Something went wrong...</b>}
        <ContactList />
      </Container>
    </section>
  );
}
