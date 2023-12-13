import { Form, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  margin-bottom: 50px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  & > button {
    margin-left: auto;
    padding: 11px 30px;
    @media screen and (max-width: ${p => p.theme.breakpoint}) {
      padding: 10px 20px;
      margin: 10px auto 0 0;
      font-size: 18px;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: ${p => p.theme.colors.titleText};

  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    font-size: 18px;
  }

  & > input {
    padding: 15px;
    font-size: 16px;
    color: ${p => p.theme.colors.secondaryText};
    border: 1px solid ${p => p.theme.colors.lightBckg};
    border-radius: 10px;
    box-shadow: 1px 3px 5px 0px ${p => p.theme.colors.lightBckg};

    &:focus {
      outline: none;
      box-shadow: 1px 3px 3px 0px ${p => p.theme.colors.accentBckg};
    }
  }
`;
export const StyledError = styled(ErrorMessage)`
  color: ${p => p.theme.colors.subTitleText};
  font-size: 16px;
`;
