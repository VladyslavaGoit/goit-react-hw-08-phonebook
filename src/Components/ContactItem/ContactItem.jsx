import { Button } from 'Components/Button/Button';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(contact.id));
  return (
    <>
      <p>
        {contact.name}: {contact.number}
      </p>
      <Button onClick={handleDelete}>Delete</Button>
    </>
  );
};
