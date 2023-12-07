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
    height: 50px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 10px;
    &:focus {
      border-color: rgba(0, 0, 0, 0.5);
      outline: none;
    }
  }
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const StyledLink = styled(Link)`
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;
