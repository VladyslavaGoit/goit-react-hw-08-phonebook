import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getIsTryAdd } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';
import { Button } from 'Components/Button/Button';
import { Label, StyledError, StyledForm } from './ContactForm.styled';
import toast, { Toaster } from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters')
    .matches(
      /^(?:(?!^\s+$)[\sa-zA-Zа-яА-ЯґҐєЄіІїЇ]+((['-][\sa-zA-Zа-яА-ЯґҐєЄіІїЇ]+)([ ]?[\sa-zA-Zа-яА-ЯґҐєЄіІїЇ]+))*)?$/,
      'Name may only contain letters, dashes, apostrophes or spaces'
    )
    .required('Name is a required!'),
  number: Yup.string()
    .min(5, 'Number must be at least 5 characters')
    .max(20, 'Name must be at most 20 characters')
    .matches(
      /^(?:\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})?$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is a required!'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isTryAdd = useSelector(getIsTryAdd);

  const handleSubmit = (formValues, actions) => {
    const newName = formValues.name;
    const newNumber = formValues.number;
    const isSameName = contacts.find(
      ({ name }) => name.toLowerCase().trim() === newName.toLowerCase().trim()
    );
    const isSameNumber = contacts.find(({ number }) => number === newNumber);

    if (isSameName) {
      toast(
        `Contact with this name already exists.
        Please use a different name.`
      );

      return;
    }
    if (isSameNumber) {
      toast(
        `Contact with this number already exists. Please enter a new number.`
      );
      return;
    }
    dispatch(
      addContacts({
        name: newName,
        number: newNumber,
      })
    );

    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={(formValues, actions) => {
          handleSubmit(formValues, actions);
        }}
      >
        <StyledForm autoComplete="off">
          <Label>
            Name
            <Field name="name" type="text" />
            <StyledError name="name" component="div" />
          </Label>
          <Label>
            Number
            <Field name="number" type="tel" />
            <StyledError name="number" component="div" />
          </Label>
          <Button type="submit" disabled={isTryAdd}>
            {isTryAdd ? (
              <ThreeDots
                height="20px"
                width="40px"
                radius="9"
                color="#F3C653"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              'Add contact'
            )}
          </Button>
        </StyledForm>
      </Formik>
      <Toaster />
    </>
  );
};
export default ContactForm;
