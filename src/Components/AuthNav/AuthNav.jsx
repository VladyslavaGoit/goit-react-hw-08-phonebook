import {
  SignInIcon,
  SignUpIcon,
  StyledNavlink,
  Wrapper,
} from './AuthNav.styled';

export const AuthNav = ({ className }) => {
  return (
    <Wrapper className={className}>
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
