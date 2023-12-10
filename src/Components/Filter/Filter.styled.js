import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 100px 0;
`;

export const Label = styled.label`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 40px;
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
