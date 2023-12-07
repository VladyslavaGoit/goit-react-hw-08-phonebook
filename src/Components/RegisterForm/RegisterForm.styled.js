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
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > input {
    height: 50px;
    background-color: ${p => p.theme.colors.lightBckg};
    border: 1px solid ${p => p.theme.colors.accentText};
    border-radius: 10px;
  }
`;

export const StyledError = styled(ErrorMessage)`
  color: ${p => p.theme.colors.secondBckg};
  font-size: 14px;
`;
