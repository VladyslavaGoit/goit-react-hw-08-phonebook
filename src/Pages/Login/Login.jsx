import { Container } from 'Components/Container.styled';
import { Section } from './Login.styled';

const { LoginForm } = require('Components/LoginForm/LoginForm');

const Login = () => {
  return (
    <Section>
      <Container>
        <LoginForm />
      </Container>
    </Section>
  );
};

export default Login;
