import { Container } from 'components/Container.styled';

const { LoginForm } = require('components/LoginForm/LoginForm');

const Login = () => {
  return (
    <section>
      <Container>
        <LoginForm />
      </Container>
    </section>
  );
};

export default Login;
