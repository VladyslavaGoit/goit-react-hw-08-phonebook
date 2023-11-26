import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import css from './ContactItem.module.css';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(contact.id));
  return (
    <>
      <p className={css.contactText}>
        {contact.name}: {contact.number}
      </p>
      <button className={css.contactButton} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};
