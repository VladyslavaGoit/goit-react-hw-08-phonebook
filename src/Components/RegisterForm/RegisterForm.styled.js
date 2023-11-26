import { Form, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 100px 0;
`;
export const StyledForm = styled(Form)`
  margin: 0 auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > button {
    margin: 0 auto;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > input {
    height: 40px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
  }
`;

export const StyledError = styled(ErrorMessage)`
  color: #b02e2e;
  font-size: 14px;
`;
