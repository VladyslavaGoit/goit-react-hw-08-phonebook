import { NavLink } from 'react-router-dom';
import { Wrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <NavLink to={'/login'}>Log In</NavLink>
      <NavLink to={'/register'}>Register</NavLink>
    </Wrapper>
  );
};
