import { AuthNav } from 'Components/AuthNav/AuthNav';
import { Container } from 'Components/Container.styled';
import { Navigation } from 'Components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { UserMenu } from 'Components/UserMenu/UserMenu';
import { Header, Wrapper } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <Container>
        <Wrapper>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Wrapper>
      </Container>
    </Header>
  );
};
