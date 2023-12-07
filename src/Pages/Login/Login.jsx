import { Container } from 'Components/Container.styled';
import { Section, StyledIcon, Title, Wrapper } from './Login.styled';

const { LoginForm } = require('Components/LoginForm/LoginForm');

const Login = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <div>
            <Title>Please login to continue</Title>
            <LoginForm />
          </div>
          <StyledIcon />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Login;
