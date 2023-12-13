import { ContactItem } from 'Components/ContactItem/ContactItem';
import { Item, List } from './ContactList.styled';

export const ContactList = ({ currentContacts }) => {
  return (
    <List>
      {currentContacts &&
        currentContacts.map(contact => (
          <Item key={contact.id}>
            <ContactItem contact={contact} />
          </Item>
        ))}
    </List>
  );
};
