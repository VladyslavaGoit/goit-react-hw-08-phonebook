import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  max-width: 400px;
  & > button {
    margin: 0 auto;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
  & > input {
    height: 40px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
  }
`;
