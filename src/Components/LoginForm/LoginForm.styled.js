import { Link } from 'react-router-dom';
import { Form, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  gap: 25px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: ${p => p.theme.colors.titleText};
  & > input {
    padding: 15px;
    font-size: 16px;
    color: ${p => p.theme.colors.secondaryText};
    border: 1px solid ${p => p.theme.colors.lightBckg};
    border-radius: 10px;
    box-shadow: 1px 3px 5px 0px ${p => p.theme.colors.lightBckg};
    &:focus {
      outline: none;
      border-color: ${p => p.theme.colors.accentBckg};
      box-shadow: 0px 2px 5px 0px ${p => p.theme.colors.secondBckg};
    }
  }
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const StyledLink = styled(Link)`
  color: ${p => p.theme.colors.accentText};
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledError = styled(ErrorMessage)`
  color: ${p => p.theme.colors.subTitleText};
  font-size: 16px;
`;
