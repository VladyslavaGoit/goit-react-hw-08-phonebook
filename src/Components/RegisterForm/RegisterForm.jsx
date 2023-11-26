import { Formik, Field } from 'formik';
import { StyledForm, StyledError, Label, Wrapper } from './RegisterForm.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button } from 'Components/Button/Button';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .required('Required!'),
  email: Yup.string().email('Invalid email address').required('Required!'),
  password: Yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('Required!'),
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
          <Label>
            UserName
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

          <Button type="submit">Register</Button>
        </StyledForm>
      </Formik>
    </Wrapper>
  );
};
