import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/filter/selectors';
import { ContactItem } from 'Components/ContactItem/ContactItem';
import { Item, List } from './ContactList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(contact => (
        <Item key={contact.id}>
          <ContactItem contact={contact} />
        </Item>
      ))}
    </List>
  );
};
