import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
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

  & > input {
    padding: 20px;
    background-color: ${p => p.theme.colors.lightBckg};
    border: 1px solid ${p => p.theme.colors.accentText};
    border-radius: 10px;
    &:focus {
      border-color: ${p => p.theme.colors.accentBckg};
      box-shadow: 0px 2px 5px 0px ${p => p.theme.colors.secondBckg};
      outline: none;
    }
  }
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const StyledLink = styled(Link)`
  color: ${p => p.theme.colors.lightBckg};
  &:hover {
    text-decoration: underline;
  }
`;
