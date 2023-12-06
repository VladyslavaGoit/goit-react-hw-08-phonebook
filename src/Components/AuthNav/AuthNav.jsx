import {
  SignInIcon,
  SignUpIcon,
  StyledNavlink,
  Wrapper,
} from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <StyledNavlink to={'/login'}>
        <SignInIcon />
        Sign in
      </StyledNavlink>
      <StyledNavlink to={'/register'}>
        <SignUpIcon />
        Sign up
      </StyledNavlink>
    </Wrapper>
  );
};
