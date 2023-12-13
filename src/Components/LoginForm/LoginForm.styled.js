import { Link } from 'react-router-dom';
import { Form, ErrorMessage } from 'formik';
import { BsDashCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  max-width: 350px;
  gap: 25px;
  & > button {
    @media screen and (max-width: ${p => p.theme.breakpoint}) {
      font-size: 18px;
    }
  }
`;

export const TitleForm = styled.h2`
  font-size: 28px;
  font-weight: 500;
  text-align: center;

  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    font-size: 18px;
  }
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
  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
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

export const ErrorIcon = styled(BsDashCircleFill)`
  height: 50px;
  width: 50px;
  fill: red;
`;
