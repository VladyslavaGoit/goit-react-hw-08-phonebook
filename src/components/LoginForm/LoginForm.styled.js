import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  max-width: 400px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  & > input {
    height: 40px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
  }
`;
