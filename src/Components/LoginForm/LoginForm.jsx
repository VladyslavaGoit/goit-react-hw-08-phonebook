import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Button } from 'Components/Button/Button';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Label,
  StyledForm,
  StyledLink,
  Text,
  StyledError,
} from './LoginForm.styled';
import { Toaster } from 'react-hot-toast';

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address. The @ symbol is required')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please enter a valid email address. Only alphanumeric characters, underscores, periods, hyphens, and the @ symbol are allowed'
    )
    .required('Email is a required!'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters.')
    .max(255)
    .required('Password is a required!'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, actions) => {
    actions.resetForm();
    dispatch(logIn({ email, password }));
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
      >
        <StyledForm>
          <Label>
            Email
            <Field type="email" name="email" />
            <StyledError name="email" component="div" />
          </Label>
          <Label>
            Password
            <Field type="password" name="password" />
            <StyledError name="password" component="div" />
          </Label>
          <Button type="submit">Log In</Button>{' '}
          <Text>
            Don't have an account?{' '}
            <StyledLink to={'/register'}>Sign up</StyledLink>
          </Text>
        </StyledForm>
      </Formik>
      <Toaster />
    </>
  );
};
