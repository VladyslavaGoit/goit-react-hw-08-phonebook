import { createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    isTryAdd: false,
    isTryDelete: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContacts.pending](state, action) {
      state.isTryAdd = true;
      state.error = null;
    },
    [addContacts.fulfilled](state, action) {
      state.isTryAdd = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContacts.rejected](state, action) {
      state.isTryAdd = false;
      state.error = action.payload;
    },
    [deleteContacts.pending](state, action) {
      state.isTryDelete = true;
      state.error = null;
    },
    [deleteContacts.fulfilled](state, action) {
      state.isTryDelete = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [deleteContacts.rejected](state, action) {
      state.isTryDelete = false;
      state.error = action.payload;
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
