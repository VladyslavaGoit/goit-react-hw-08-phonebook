import { Layout } from 'Components/Layout/Layout';
import { PrivateRoute } from 'Components/PrivateRoute';
import { RestrictedRoute } from 'Components/RestrictedRoute';
import { GlobalStyle } from 'GlobalStyle';
import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Refreshing } from './Refreshing/Refreshing';

const HomePage = lazy(() => import('../Pages/Home/Home'));
const ContactsPage = lazy(() => import('../Pages/Phonebook/Phonebook'));
const RegisterPage = lazy(() => import('../Pages/Register/Register'));
const LoginPage = lazy(() => import('../Pages/Login/Login'));
const NotFound = lazy(() => import('../Pages/NotFound/NotFound'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Refreshing />
      ) : (
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
            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
      <GlobalStyle />
    </>
  );
};

export default App;
