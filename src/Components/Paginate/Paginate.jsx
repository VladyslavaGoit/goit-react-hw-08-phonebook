import { ContactList } from 'Components/ContactList/ContactList';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/filter/selectors';
import { PaginateStyled } from './Paginate.styled';

export const PaginatedContacts = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const visibleContacts = useSelector(selectVisibleContacts);

  const endOffset = itemOffset + itemsPerPage;

  const pageCount = Math.ceil(visibleContacts.length / itemsPerPage);

  const currentContacts = visibleContacts.slice(itemOffset, endOffset);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % visibleContacts.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {visibleContacts.length > itemsPerPage ? (
        <>
          <ContactList currentContacts={currentContacts} />
          <PaginateStyled
            breakLabel="..."
            nextLabel=" >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< "
            renderOnZeroPageCount={null}
          />
        </>
      ) : (
        <ContactList currentContacts={visibleContacts} />
      )}
    </>
  );
};
