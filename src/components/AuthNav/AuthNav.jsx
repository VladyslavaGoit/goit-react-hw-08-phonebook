import { StyledNavlink, Wrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <StyledNavlink to={'/login'}>Log In</StyledNavlink>
      <StyledNavlink to={'/register'}>Register</StyledNavlink>
    </Wrapper>
  );
};
