import styled from 'styled-components';

export const StyledForm = styled.form`
  margin-bottom: 50px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > button {
    margin-left: auto;
    width: 180px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
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
      box-shadow: 1px 3px 3px 0px ${p => p.theme.colors.accentBckg};
    }
  }
`;
