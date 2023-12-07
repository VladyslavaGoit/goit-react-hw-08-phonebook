import { Button } from 'Components/Button/Button';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label, StyledLink, Text } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const email = evt.target.elements.email.value;
    const password = evt.target.elements.password.value;
    dispatch(logIn({ email, password }));
    evt.target.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>{' '}
      <Text>
        Don't have an account? <StyledLink to={'/register'}>Sign up</StyledLink>
      </Text>
    </Form>
  );
};
