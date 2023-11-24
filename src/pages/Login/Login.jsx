import { Container } from 'components/Container.styled';
import { Section, Title } from './Login.styled';

const { LoginForm } = require('components/LoginForm/LoginForm');

const Login = () => {
  return (
    <Section>
      <Container>
        <Title>Please login to continue</Title>
        <LoginForm />
      </Container>
    </Section>
  );
};

export default Login;
