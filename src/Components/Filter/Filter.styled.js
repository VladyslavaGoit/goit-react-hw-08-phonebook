import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 100px 0;
`;

export const Label = styled.label`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 350px;
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
