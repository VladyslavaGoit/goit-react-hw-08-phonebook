import { Button } from 'Components/Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import { getIsTryDelete } from 'redux/contacts/selectors';
import { ItemWrap, BoxContact, ContactLink, Text } from './ContactItem.styled';
import { ThreeDots } from 'react-loader-spinner';

export const ContactItem = ({ contact }) => {
  const [currentId, setCurrentId] = useState(null);
  const isTryDelete = useSelector(getIsTryDelete);

  const dispatch = useDispatch();
  const handleDelete = () => {
    setCurrentId(contact.id);
    dispatch(deleteContacts(contact.id));
  };
  return (
    <ItemWrap>
      <BoxContact>
        <Text>{contact.name}</Text>
        <Text>
          number:
          <ContactLink href={`tel:${contact.number}`}>
            {contact.number}
          </ContactLink>
        </Text>
      </BoxContact>
      <Button onClick={handleDelete}>
        {isTryDelete && currentId === contact.id ? (
          <ThreeDots
            height="20"
            width="40"
            radius="9"
            color="#F3C653"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          'Delete'
        )}
      </Button>
    </ItemWrap>
  );
};
