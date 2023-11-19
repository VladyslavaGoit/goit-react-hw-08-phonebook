import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { UserMenu } from 'UserMenu/UserMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <>
          <NavLink to={'/login'}>Log In</NavLink>
          <NavLink to={'/register'}>Register</NavLink>
        </>
      )}
    </header>
  );
};
