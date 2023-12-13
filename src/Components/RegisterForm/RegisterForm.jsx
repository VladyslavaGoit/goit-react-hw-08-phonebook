import { Formik, Field } from 'formik';
import {
  StyledForm,
  StyledError,
  Label,
  Wrapper,
  Text,
  StyledLink,
  TitleForm,
  ErrorIcon,
} from './RegisterForm.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button } from 'Components/Button/Button';
import { Toaster } from 'react-hot-toast';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be at most 50 characters')
    .matches(
      /^(?:(?!^\s+$)[\sa-zA-Zа-яА-ЯґҐєЄіІїЇ]+((['-][\sa-zA-Zа-яА-ЯґҐєЄіІїЇ]+)([ ]?[\sa-zA-Zа-яА-ЯґҐєЄіІїЇ]+))*)?$/,
      'Name may only contain letters, dashes, apostrophes or spaces'
    )
    .required('Name is a required!'),
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

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, actions) => {
          dispatch(register(values));
          actions.resetForm();
        }}
      >
        <StyledForm>
          <TitleForm>Sign Up</TitleForm>
          <Label>
            Name
            <Field name="name" type="text" />
            <StyledError name="name" component="div" />
          </Label>
          <Label>
            Email
            <Field name="email" type="email" />
            <StyledError name="email" component="div" />
          </Label>

          <Label>
            Password
            <Field name="password" type="password" />
            <StyledError name="password" component="div" />
          </Label>

          <Button type="submit">Create account</Button>
          <Text>
            Already have an account?
            <StyledLink to={'/login'}> Sign in</StyledLink>
          </Text>
        </StyledForm>
      </Formik>
      <Toaster
        toastOptions={{
          style: {
            gap: '10px',
            background: '#FFFEF9',
          },
          error: {
            duration: 5000,
            icon: <ErrorIcon />,
          },
        }}
      />
    </Wrapper>
  );
};
