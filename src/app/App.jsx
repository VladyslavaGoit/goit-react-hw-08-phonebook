import { Layout } from 'components/Layout/Layout';

import { RestrictedRoute } from 'components/RestrictedRoute';
import { lazy } from 'react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { fetchContacts } from 'redux/contacts/operations';
// import { getError, getIsLoading } from 'redux/contacts/selectors';
// import ContactForm from '../components/contactForm/ContactForm';
// import { ContactList } from '../components/contactList/ContactList';
// import Filter from '../components/filter/Filter';
// import css from './App.module.css';

const HomePage = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Phonebook'));
const RegisterPage = lazy(() => import('../pages/Register'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route path="login" element={<div>Авторизація</div>} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};

// export default App;
