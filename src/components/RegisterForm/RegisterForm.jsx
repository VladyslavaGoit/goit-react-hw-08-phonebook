import { Button } from 'Components/Button/Button';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label, Wrapper } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    dispatch(register({ name, email, password }));
    event.target.reset();
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Label>
          UserName
          <input type="text" name="name" />
        </Label>
        <Label>
          Email
          <input type="email" name="email" />
        </Label>
        <Label>
          Password
          <input type="password" name="password" />
        </Label>
        <Button type="submit">Register</Button>
      </Form>
    </Wrapper>
  );
};
