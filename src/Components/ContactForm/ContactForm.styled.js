import styled from 'styled-components';

export const StyledForm = styled.form`
  margin-bottom: 50px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > button {
    margin-left: auto;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  & > input {
    padding: 15px;
    border: 1px solid ${p => p.theme.colors.lightBckg};
    border-radius: 10px;
    &:focus {
      outline: none;
      box-shadow: 1px 3px 5px 0px ${p => p.theme.colors.secondBckg};
    }
  }
`;
