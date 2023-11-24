import { Container } from 'Components/Container.styled';
import { Section, Title } from './Login.styled';

const { LoginForm } = require('Components/LoginForm/LoginForm');

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
