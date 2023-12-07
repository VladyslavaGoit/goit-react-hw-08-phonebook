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
    height: 40px;
    border: 1px solid ${p => p.theme.colors.secondBckg};
    border-radius: 4px;
  }
`;
