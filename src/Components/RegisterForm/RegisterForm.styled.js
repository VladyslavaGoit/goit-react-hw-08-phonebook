import { Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsDashCircleFill } from 'react-icons/bs';

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
  box-shadow: 0px 2px 5px 0px ${p => p.theme.colors.secondaryText};

  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    padding: 20px;
    gap: 10px;
  }

  & > button {
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 12px;

    @media screen and (max-width: ${p => p.theme.breakpoint}) {
      padding: 8px;
      font-size: 16px;
    }
  }
`;

export const TitleForm = styled.h2`
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  color: ${p => p.theme.colors.titleText};
  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    font-size: 18px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${p => p.theme.colors.subTitleText};

  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    gap: 5px;
    font-size: 16px;
  }
  & > input {
    padding: 15px;
    font-size: 16px;
    color: ${p => p.theme.colors.secondaryText};
    border: 1px solid ${p => p.theme.colors.lightBckg};
    border-radius: 10px;
    box-shadow: 1px 3px 5px 0px ${p => p.theme.colors.lightBckg};

    @media screen and (max-width: ${p => p.theme.breakpoint}) {
      padding: 10px;
    }

    &:focus {
      outline: none;
      border-color: ${p => p.theme.colors.accentBckg};
      box-shadow: 0px 2px 5px 0px ${p => p.theme.colors.secondBckg};
    }
  }
`;

export const Text = styled.p`
  text-align: center;
  color: ${p => p.theme.colors.secondaryText};
  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    display: flex;
    flex-direction: column;
    font-size: 16px;
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
