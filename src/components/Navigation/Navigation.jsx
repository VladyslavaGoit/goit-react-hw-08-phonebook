import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { StyledNavlink, Wrapper } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <Wrapper>
        <StyledNavlink to={'/'}>Home</StyledNavlink>
        {isLoggedIn && (
          <StyledNavlink to={'/contacts'}>Phonebook</StyledNavlink>
        )}
      </Wrapper>
    </nav>
  );
};
