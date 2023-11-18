import { Navigation } from 'components/Navigation/Navigation';
import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  return (
    <header>
      <Navigation />
      <NavLink to={'/login'}>Log In</NavLink>
      <NavLink to={'/register'}>Register</NavLink>
    </header>
  );
};
