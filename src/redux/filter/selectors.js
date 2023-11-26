import { createSelector } from '@reduxjs/toolkit';

const getContacts = store => store.contacts.contacts;

export const getFilter = store => store.filter.value;

export const selectVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
