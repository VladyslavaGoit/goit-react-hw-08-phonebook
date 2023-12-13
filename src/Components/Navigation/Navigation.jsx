import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import {
  IconHome,
  IconPhone,
  NavWrap,
  StyledNavlink,
} from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavWrap>
      <StyledNavlink to={'/'}>
        <IconHome />
        Home
      </StyledNavlink>
      {isLoggedIn && (
        <StyledNavlink to={'/contacts'}>
          <IconPhone />
          Contacts
        </StyledNavlink>
      )}
    </NavWrap>
  );
};
