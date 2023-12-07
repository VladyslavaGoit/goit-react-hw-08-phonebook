import { Container } from 'Components/Container.styled';
import { RegisterForm } from 'Components/RegisterForm/RegisterForm';
import { Section } from './Register.styled';

const Register = () => {
  return (
    <Section>
      <Container>
        <RegisterForm />
      </Container>
    </Section>
  );
};

export default Register;
