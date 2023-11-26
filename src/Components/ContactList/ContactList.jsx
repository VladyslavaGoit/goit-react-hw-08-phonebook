import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/filter/selectors';
import { ContactItem } from 'Components/ContactItem/ContactItem';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};