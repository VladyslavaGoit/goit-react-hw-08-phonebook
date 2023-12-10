import { Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 50px 0;
`;
export const StyledForm = styled(Form)`
  margin: 0 auto;
  padding: 35px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px 0px ${p => p.theme.colors.secondBckg};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > input {
    padding: 20px;
    font-size: 14px;
    background-color: ${p => p.theme.colors.lightBckg};
    color: ${p => p.theme.colors.primaryText};
    border: 1px solid ${p => p.theme.colors.accentText};
    border-radius: 10px;
    &:focus {
      outline: none;
      box-shadow: 0px 2px 5px 0px ${p => p.theme.colors.secondBckg};
    }
  }
`;

export const Text = styled.p`
  text-align: center;
`;

export const StyledLink = styled(Link)`
  color: ${p => p.theme.colors.subTitleText};
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledError = styled(ErrorMessage)`
  color: ${p => p.theme.colors.subTitleText};
  font-size: 16px;
`;
